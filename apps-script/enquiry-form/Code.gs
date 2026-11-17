/**
 * JGS Enquiry Form 2027-28: Google Sheet script for the /enquiry-form page (L17).
 *
 * What it does with each enquiry sent from www.jgschool.in/enquiry-form:
 *   1. Checks the "I'm not a robot" (reCAPTCHA) answer, once the secret key is set (see below).
 *   2. Adds a row to the "Enquiries" tab with every field of the enquiry form.
 *   3. Saves the enquiry form PDF in the Google Drive folder "JGS Enquiry Forms 2027-28"
 *      and puts a link to it in the row (the "PDF" column).
 *   4. Emails the admissions team, with the PDF attached.
 *
 * L22: it also receives a copy of every enquiry from the short forms (the home page, /home and the
 * "Enquire now" popup). Those go to their own tab, "Quick enquiries", with where the parent came from
 * (campaign, ad group, search term, Google click ID). They are not emailed (school decision, 17 Nov 2026).
 * The short forms still save to the "JGS - Website Leads" sheet as before; this tab is an extra copy.
 *
 * One-time setup (full steps in docs/L17-enquiry-form-sheet.md):
 *   - Paste this file into the new Sheet (Extensions > Apps Script), save, choose "setup" and click Run.
 *   - Deploy > New deployment > Web app: Execute as "Me", Who has access "Anyone". Copy the web app URL.
 *   - Spam check: Project Settings > Script properties > add RECAPTCHA_SECRET = the reCAPTCHA secret key
 *     that belongs to the website's site key. Until then enquiries are saved and marked "Not set up".
 *
 * Settings (Project Settings > Script properties), all optional:
 *   RECAPTCHA_SECRET  reCAPTCHA secret key (spam check)
 *   NOTIFY_TO         who gets the email (default below)
 *   NOTIFY_CC         copied on the email (default below)
 *   QUICK_EMAIL       set to "on" to also email each quick enquiry (off unless set)
 */

var SHEET_NAME = 'Enquiries';
var QUICK_SHEET_NAME = 'Quick enquiries';
var FOLDER_NAME = 'JGS Enquiry Forms 2027-28';
var DEFAULT_TO = 'admissions@jgschool.in';
var DEFAULT_CC = 'siddarth.k@jgschool.in';
var MAX_PDF_BYTES = 2 * 1024 * 1024;

/** Sheet columns: [heading, field name sent by the website]. */
var COLUMNS = [
  ['Submitted at', '_submittedAt'],
  ['Enquiry No.', 'enquiryNo'],
  ['Campus', 'location'],
  ['Curriculum', 'curriculum'],
  ['Grade applying for', 'studentGrade'],
  ['Name of the child', 'studentName'],
  ['Gender', 'gender'],
  ['Date of birth', 'dateOfBirth'],
  ['Previous schooling', 'previousSchooling'],
  ['School name', 'previousSchoolName'],
  ['Board', 'previousBoard'],
  ['Class', 'previousClass'],
  ['Sibling at JGS', 'siblingAtJgs'],
  ['Name of sibling(s)', 'siblingName'],
  ['Sibling class & section', 'siblingClassSection'],
  ['Father / guardian name', 'fatherName'],
  ['Father qualification', 'fatherQualification'],
  ['Father organisation', 'fatherOrganisation'],
  ['Father mobile', 'fatherMobile'],
  ['Father email', 'fatherEmail'],
  ['Mother / guardian name', 'motherName'],
  ['Mother qualification', 'motherQualification'],
  ['Mother organisation', 'motherOrganisation'],
  ['Mother mobile', 'motherMobile'],
  ['Mother email', 'motherEmail'],
  ['Residential address', 'residentialAddress'],
  ['How did you hear about us', 'heardFrom'],
  ['Referred by', 'referralName'],
  ['PDF', '_pdf'],
  ['Spam check', '_spamCheck'],
  ['Email sent', '_emailSent'],
  ['Source', 'utm_source'],
  ['Medium', 'utm_medium'],
  ['Campaign', 'utm_campaign'],
  ['Keyword', 'utm_term'],
  ['Ad content', 'utm_content'],
  ['Google click ID', '_gclid'],
  ['Meta click ID', 'fbclid'],
  ['Landing page', 'landing_page'],
  ['Referrer', 'referrer'],
  ['First visit', 'first_seen'],
  ['Form page', 'form_page']
];

/** L22: columns of the "Quick enquiries" tab (short forms on the home page, /home and the popup). */
var QUICK_COLUMNS = [
  ['Submitted at', '_submittedAt'],
  ['Enquiry No.', 'enquiryNo'],
  ['Form page', 'form_page'],
  ['Campus', 'location'],
  ['Grade', 'studentGrade'],
  ['Name of the child', 'studentName'],
  ['Mother\'s name', 'motherName'],
  ['Father\'s name', 'fatherName'],
  ['Phone', 'phoneNumber'],
  ['Email', 'emailAddress'],
  ['Source', 'utm_source'],
  ['Medium', 'utm_medium'],
  ['Campaign', 'utm_campaign'],
  ['Keyword', 'utm_term'],
  ['Ad content', 'utm_content'],
  ['Google click ID', '_gclid'],
  ['Meta click ID', 'fbclid'],
  ['Landing page', 'landing_page'],
  ['Referrer', 'referrer'],
  ['First visit', 'first_seen'],
  ['Spam check', '_spamCheck'],
  ['Email sent', '_emailSent']
];

/** Run once after pasting: creates the tabs, their headings and the Drive folder, and asks for permissions. */
function setup() {
  var sheet = getSheet_();
  getSheet_(QUICK_SHEET_NAME, QUICK_COLUMNS);
  var folder = getFolder_();
  // Ask for the permissions the script needs (Mail and web requests) during setup, not on the first enquiry.
  MailApp.getRemainingDailyQuota();
  try { UrlFetchApp.fetch('https://www.google.com/recaptcha/api/siteverify', { method: 'post', muteHttpExceptions: true }); } catch (e) {}
  Logger.log('Ready. Sheet tab: ' + sheet.getName() + '. PDF folder: ' + folder.getUrl());
}

/** Receives an enquiry from the website. */
function doPost(e) {
  var lock = LockService.getScriptLock();
  try {
    var data = JSON.parse((e && e.postData && e.postData.contents) || '{}');
    if (data.formType === 'quick') {
      return handleQuick_(data, lock);
    }
    var spam = checkRecaptcha_(data.recaptchaToken);
    if (spam === 'Failed') {
      return json_({ ok: false, error: 'recaptcha' });
    }
    if (!clean_(data.studentName) || !clean_(data.location) || !clean_(data.enquiryNo)) {
      return json_({ ok: false, error: 'missing' });
    }

    var now = new Date();
    var tz = Session.getScriptTimeZone() || 'Asia/Kolkata';
    data._submittedAt = Utilities.formatDate(now, tz, 'dd/MM/yyyy HH:mm:ss');
    data._gclid = data.gclid || data.gbraid || data.wbraid || '';
    data._spamCheck = spam;

    // Save the PDF first, so the row can link to it.
    var pdfBlob = null, pdfUrl = '';
    if (data.pdfBase64) {
      var bytes = Utilities.base64Decode(String(data.pdfBase64));
      if (bytes.length <= MAX_PDF_BYTES && isPdf_(bytes)) {
        var fileName = 'JGS-Enquiry-Form-' + safeName_(data.enquiryNo) + ' - ' + safeName_(data.studentName) + '.pdf';
        pdfBlob = Utilities.newBlob(bytes, 'application/pdf', fileName);
        var file = getFolder_().createFile(pdfBlob);
        pdfUrl = file.getUrl();
      }
    }
    data._pdf = pdfUrl ? '=HYPERLINK("' + pdfUrl + '","Open PDF")' : 'Not received';

    // Email the admissions team.
    data._emailSent = sendEmail_(data, pdfBlob) ? 'Yes' : 'No';

    lock.waitLock(20000);
    var sheet = getSheet_();
    var row = COLUMNS.map(function (c) {
      var v = data[c[1]];
      if (c[1] === '_pdf') return v; // the link formula
      return cell_(v);
    });
    sheet.appendRow(row);
    return json_({ ok: true, enquiryNo: data.enquiryNo });
  } catch (err) {
    console.error(err);
    return json_({ ok: false, error: String(err) });
  } finally {
    try { lock.releaseLock(); } catch (e) {}
  }
}

/**
 * L22: a copy of a short-form enquiry. Its reCAPTCHA answer has already been used by the main
 * "JGS - Website Leads" sheet (an answer can be checked only once), so it is not checked again here;
 * the row is marked accordingly. Only rows with a child's name, campus and a valid mobile are saved.
 */
function handleQuick_(data, lock) {
  if (!clean_(data.studentName) || !/^(Kokapet|Mokila)$/.test(clean_(data.location)) ||
      !/^[6-9]\d{9}$/.test(clean_(data.phoneNumber))) {
    return json_({ ok: false, error: 'missing' });
  }
  var tz = Session.getScriptTimeZone() || 'Asia/Kolkata';
  data._submittedAt = Utilities.formatDate(new Date(), tz, 'dd/MM/yyyy HH:mm:ss');
  data._gclid = data.gclid || data.gbraid || data.wbraid || '';
  data._spamCheck = 'Checked by the website form';
  // No email for quick enquiries (school decision, 17 Nov 2026). Script property QUICK_EMAIL = on switches it on.
  var emailOn = String(PropertiesService.getScriptProperties().getProperty('QUICK_EMAIL') || '').toLowerCase() === 'on';
  data._emailSent = emailOn ? (sendQuickEmail_(data) ? 'Yes' : 'No') : 'Off';

  lock.waitLock(20000);
  var sheet = getSheet_(QUICK_SHEET_NAME, QUICK_COLUMNS);
  sheet.appendRow(QUICK_COLUMNS.map(function (c) { return cell_(data[c[1]]); }));
  return json_({ ok: true, enquiryNo: data.enquiryNo });
}

function sendQuickEmail_(d) {
  var props = PropertiesService.getScriptProperties();
  var to = props.getProperty('NOTIFY_TO') || DEFAULT_TO;
  var cc = props.getProperty('NOTIFY_CC') || DEFAULT_CC;
  var fromAd = clean_(d.utm_campaign) || (d._gclid ? 'Google Ads' : clean_(d.fbclid) ? 'Meta' : '');
  var subject = 'New quick enquiry ' + clean_(d.enquiryNo) + ': ' + clean_(d.studentName) + ', ' +
    clean_(d.studentGrade) + ', JGS ' + clean_(d.location) + (fromAd ? ' [' + fromAd + ']' : '');
  var rows = [
    ['Enquiry No.', d.enquiryNo], ['Submitted at', d._submittedAt], ['Form page', d.form_page],
    ['Campus', 'JGS ' + clean_(d.location)], ['Grade', d.studentGrade], ['Name of the child', d.studentName],
    ['Mother\'s name', d.motherName], ['Father\'s name', d.fatherName], ['Phone', d.phoneNumber], ['Email', d.emailAddress],
    ['Campaign', d.utm_campaign], ['Search term', d.utm_term], ['Source / medium', [d.utm_source, d.utm_medium].filter(Boolean).join(' / ')],
    ['Google click ID', d._gclid ? 'Yes' : ''], ['Landing page', d.landing_page]
  ];
  var html = '<p>A new admission enquiry was sent from the short form on www.jgschool.in' + esc_(d.form_page) + '.</p>' +
    '<table cellpadding="6" cellspacing="0" style="border-collapse:collapse;font-family:Arial,sans-serif;font-size:14px">' +
    rows.filter(function (r) { return clean_(r[1]); }).map(function (r) {
      return '<tr><td style="border:1px solid #dde3ea;background:#f5fafe;color:#2c3b9a;font-weight:bold">' + esc_(r[0]) +
        '</td><td style="border:1px solid #dde3ea">' + esc_(r[1]) + '</td></tr>';
    }).join('') + '</table>' +
    '<p>This enquiry is also in the "JGS - Website Leads" sheet as usual.</p>';
  try {
    var options = { htmlBody: html, cc: cc, name: 'JGS Website Enquiries' };
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(clean_(d.emailAddress))) options.replyTo = clean_(d.emailAddress);
    MailApp.sendEmail(to, subject, 'A new admission enquiry was sent from www.jgschool.in.', options);
    return true;
  } catch (e) {
    console.error('Quick enquiry email not sent: ' + e);
    return false;
  }
}

/** A quick check that the web app is running (open the web app URL in a browser). */
function doGet() {
  return json_({ ok: true, service: 'JGS Enquiry Form 2027-28' });
}

function checkRecaptcha_(token) {
  var secret = PropertiesService.getScriptProperties().getProperty('RECAPTCHA_SECRET');
  if (!secret) return 'Not set up';
  if (!token) return 'Failed';
  try {
    var res = UrlFetchApp.fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'post',
      payload: { secret: secret, response: String(token) },
      muteHttpExceptions: true
    });
    var out = JSON.parse(res.getContentText() || '{}');
    return out.success ? 'Passed' : 'Failed';
  } catch (e) {
    return 'Could not check';
  }
}

function sendEmail_(d, pdfBlob) {
  var props = PropertiesService.getScriptProperties();
  var to = props.getProperty('NOTIFY_TO') || DEFAULT_TO;
  var cc = props.getProperty('NOTIFY_CC') || DEFAULT_CC;
  var subject = 'New enquiry ' + clean_(d.enquiryNo) + ': ' + clean_(d.studentName) + ', ' + clean_(d.studentGrade) +
    ', JGS ' + clean_(d.location) + ' (' + clean_(d.curriculum) + ')';
  var rows = [
    ['Enquiry No.', d.enquiryNo], ['Submitted at', d._submittedAt],
    ['Campus', 'JGS ' + clean_(d.location)], ['Curriculum', d.curriculum], ['Grade applying for', d.studentGrade],
    ['Name of the child', d.studentName], ['Gender', d.gender], ['Date of birth', d.dateOfBirth],
    ['Previous schooling', d.previousSchooling === 'Yes'
      ? 'Yes: ' + [d.previousSchoolName, d.previousBoard, d.previousClass].filter(Boolean).join(', ') : 'No'],
    ['Sibling at JGS', d.siblingAtJgs === 'Yes'
      ? 'Yes: ' + [d.siblingName, d.siblingClassSection].filter(Boolean).join(', ') : 'No'],
    ['Father / guardian', parent_(d, 'father')], ['Mother / guardian', parent_(d, 'mother')],
    ['Residential address', d.residentialAddress],
    ['How did you hear about us', d.heardFrom === 'Referral' ? 'Referral: ' + clean_(d.referralName) : d.heardFrom],
    ['Ad source', [d.utm_source, d.utm_medium, d.utm_campaign].filter(Boolean).join(' / ') ||
      (d._gclid ? 'Google Ads' : d.fbclid ? 'Meta' : '')],
    ['Spam check', d._spamCheck]
  ];
  var html = '<p>A new admission enquiry was sent from www.jgschool.in/enquiry-form.</p>' +
    '<table cellpadding="6" cellspacing="0" style="border-collapse:collapse;font-family:Arial,sans-serif;font-size:14px">' +
    rows.map(function (r) {
      return '<tr><td style="border:1px solid #dde3ea;background:#f5fafe;color:#2c3b9a;font-weight:bold">' + esc_(r[0]) +
        '</td><td style="border:1px solid #dde3ea">' + esc_(r[1]) + '</td></tr>';
    }).join('') + '</table>' +
    (pdfBlob ? '<p>The enquiry form PDF is attached.</p>' : '<p>No PDF was received with this enquiry.</p>');
  try {
    var mainEmail = clean_(d.fatherEmail) || clean_(d.motherEmail) || clean_(d.emailAddress);
    var options = { htmlBody: html, cc: cc, name: 'JGS Website Enquiries' };
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mainEmail)) options.replyTo = mainEmail;
    if (pdfBlob) options.attachments = [pdfBlob];
    MailApp.sendEmail(to, subject, 'A new admission enquiry was sent from www.jgschool.in/enquiry-form.', options);
    return true;
  } catch (e) {
    console.error('Email not sent: ' + e);
    return false;
  }
}

function parent_(d, p) {
  if (!clean_(d[p + 'Name'])) return 'Not given';
  return [d[p + 'Name'], d[p + 'Qualification'], d[p + 'Organisation'], d[p + 'Mobile'], d[p + 'Email']]
    .map(clean_).filter(Boolean).join(', ');
}

function getSheet_(name, columns) {
  name = name || SHEET_NAME;
  columns = columns || COLUMNS;
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(name);
  if (!sheet) {
    sheet = name === SHEET_NAME && ss.getSheets().length === 1 && ss.getSheets()[0].getLastRow() === 0
      ? ss.getSheets()[0].setName(name)
      : ss.insertSheet(name);
  }
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(columns.map(function (c) { return c[0]; }));
    sheet.getRange(1, 1, 1, columns.length).setFontWeight('bold').setBackground('#dbf0fb').setFontColor('#2c3b9a');
    sheet.setFrozenRows(1);
    sheet.setFrozenColumns(2);
    // Plain text, so phone numbers and dates are kept exactly as typed (not the PDF column, which holds a link).
    columns.forEach(function (c, i) {
      if (c[1] !== '_pdf') sheet.getRange(2, i + 1, sheet.getMaxRows() - 1, 1).setNumberFormat('@');
    });
  }
  return sheet;
}

function getFolder_() {
  var props = PropertiesService.getScriptProperties();
  var id = props.getProperty('PDF_FOLDER_ID');
  if (id) {
    try { return DriveApp.getFolderById(id); } catch (e) {}
  }
  var folder = DriveApp.createFolder(FOLDER_NAME);
  props.setProperty('PDF_FOLDER_ID', folder.getId());
  return folder;
}

function isPdf_(bytes) {
  return bytes.length > 4 && bytes[0] === 0x25 && bytes[1] === 0x50 && bytes[2] === 0x44 && bytes[3] === 0x46; // %PDF
}

/** Text for a cell: trimmed, limited in length, and never read as a formula. */
function cell_(v) {
  var s = clean_(v).slice(0, 1000);
  return /^[=+\-@]/.test(s) ? "'" + s : s;
}

function clean_(v) {
  return v == null ? '' : String(v).replace(/[\u0000-\u001f]+/g, ' ').trim();
}

function safeName_(v) {
  return clean_(v).replace(/[^A-Za-z0-9 ._-]+/g, '').slice(0, 60);
}

function esc_(v) {
  return clean_(v).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}
