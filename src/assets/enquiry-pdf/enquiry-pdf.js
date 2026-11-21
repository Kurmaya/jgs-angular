/*
 * L17: JGS admission enquiry form as a PDF (A4), filled in with what the parent entered on /enquiry-form.
 * The layout follows the school's printed enquiry form (designer artwork for the header).
 *
 * Runs in the browser (window.JGSEnquiryPdf) and in Node (module.exports), so design previews use the same code.
 *
 * buildEnquiryPdf(PDFLib, fontkit, assets, data) -> Promise<Uint8Array>
 *   assets: { header: PNG bytes, fonts: { regular, medium, semibold } (TTF bytes) }
 *   data:   the enquiry (see enquiry-pdf.service.ts, EnquiryPdfData)
 */
(function (root) {
  'use strict';

  async function buildEnquiryPdf(PDFLib, fontkit, assets, data) {
    var PDFDocument = PDFLib.PDFDocument, rgb = PDFLib.rgb, degrees = PDFLib.degrees;
    var doc = await PDFDocument.create();
    doc.registerFontkit(fontkit);
    doc.setTitle('JGS Enquiry Form ' + data.enquiryNo);
    doc.setAuthor('Johnson Grammar School');
    doc.setSubject('Admission enquiry 2027-28, JGS ' + data.campus);
    doc.setCreator('www.jgschool.in');

    var F = {
      reg: await doc.embedFont(assets.fonts.regular, { subset: true }),
      med: await doc.embedFont(assets.fonts.medium, { subset: true }),
      semi: await doc.embedFont(assets.fonts.semibold, { subset: true })
    };

    var W = 595.28, H = 841.89;
    var page = doc.addPage([W, H]);
    function hex(h) {
      return rgb(parseInt(h.slice(1, 3), 16) / 255, parseInt(h.slice(3, 5), 16) / 255, parseInt(h.slice(5, 7), 16) / 255);
    }
    var C = {
      navy: hex('#2C3B9A'), chip: hex('#DBF0FB'), field: hex('#F5FAFE'), line: hex('#C9D9EA'),
      value: hex('#1B1F3B'), muted: hex('#7A7FA6'), dot: hex('#CEDCE6'), white: rgb(1, 1, 1)
    };

    // Header artwork (title, logo with the campus band, academic year).
    var header = await doc.embedPng(assets.header);
    var hh = W * (header.height / header.width);
    page.drawImage(header, { x: 0, y: H - hh, width: W, height: hh });

    // Layout, in points from the top of the page.
    var L = 34.7, R = 559.6, MID = 285.5, ROW = 18, GAP = 6, VALUE = 9.4, LABEL = 7.9;
    function top(y) { return H - y; }
    function s(v) { return String(v == null ? '' : v).trim(); }
    function text(t, x, y, font, size, color, extra) {
      var o = { x: x, y: top(y), font: font, size: size, color: color || C.value };
      if (extra) for (var k in extra) o[k] = extra[k];
      page.drawText(String(t), o);
    }
    function width(t, font, size) { return font.widthOfTextAtSize(String(t), size); }
    function fit(t, font, size, maxW) {
      t = s(t);
      if (width(t, font, size) <= maxW) return t;
      while (t.length && width(t + '…', font, size) > maxW) t = t.slice(0, -1);
      return t + '…';
    }
    function wrap(t, font, size, maxW) {
      var words = s(t).replace(/\s+/g, ' ').split(' ').filter(Boolean), lines = [], line = '';
      words.forEach(function (w) {
        var tryLine = line ? line + ' ' + w : w;
        if (width(tryLine, font, size) <= maxW || !line) line = tryLine; else { lines.push(line); line = w; }
      });
      if (line) lines.push(line);
      return lines;
    }

    // Label chip: square on the left, rounded bottom-right corner, as on the printed form.
    function chip(label, x, y, h, minW) {
      var lines = label.split('\n');
      var tw = Math.max.apply(null, lines.map(function (l) { return width(l, F.semi, LABEL); }));
      var w = Math.max(minW || 0, tw + 26);
      var r = Math.min(11, h * 0.6);
      page.drawSvgPath('M0 0 H' + w + ' V' + (h - r) + ' Q' + w + ' ' + h + ' ' + (w - r) + ' ' + h + ' H0 Z',
        { x: x, y: top(y), color: C.chip });
      var lh = 9.4;
      var firstY = (lines.length > 1 || h <= ROW + 2) ? y + h / 2 - ((lines.length - 1) * lh) / 2 + LABEL * 0.36 : y + ROW / 2 + LABEL * 0.36;
      lines.forEach(function (l, i) { text(l, x + 8, firstY + i * lh, F.semi, LABEL, C.navy); });
      return w;
    }
    function box(x, y, w, h) { page.drawRectangle({ x: x, y: top(y + h), width: w, height: h, color: C.field }); }

    // A field: light box, label chip, value (shrinks a little before it is shortened).
    function field(label, value, x, y, w) {
      box(x, y, w, ROW);
      var cw = chip(label, x, y, ROW);
      var room = w - cw - 16, size = VALUE;
      while (size > 7.5 && width(s(value), F.med, size) > room) size -= 0.25;
      text(fit(value, F.med, size, room), x + cw + 9, y + ROW / 2 + size * 0.36, F.med, size);
    }
    // A taller field whose value wraps over two lines.
    function tallField(label, value, x, y, w, h) {
      box(x, y, w, h);
      var cw = chip(label, x, y, ROW);
      var size = VALUE, room = w - cw - 18, lines = wrap(value, F.med, size, room);
      while (lines.length > 2 && size > 7.5) { size -= 0.25; lines = wrap(value, F.med, size, room); }
      if (lines.length > 2) { lines = lines.slice(0, 2); lines[1] = fit(lines[1] + '…', F.med, size, room); }
      var lh = size * 1.4;
      var y0 = y + h / 2 - ((lines.length - 1) * lh) / 2 + size * 0.36;
      lines.forEach(function (l, i) { text(l, x + cw + 9, y0 + i * lh, F.med, size); });
    }
    // Radio choices: the chosen one filled in navy.
    function choices(options, chosen, x, y, gap) {
      options.forEach(function (o) {
        var on = chosen === o, label = o.toUpperCase(), font = on ? F.semi : F.reg;
        page.drawCircle({ x: x + 4, y: top(y), size: 4.2, color: on ? C.navy : C.dot });
        if (on) page.drawCircle({ x: x + 4, y: top(y), size: 1.6, color: C.white });
        text(label, x + 12, y + 3, font, 8.2, on ? C.value : C.muted);
        x += 12 + width(label, font, 8.2) + (gap || 18);
      });
      return x;
    }
    function choiceField(label, options, chosen, x, y, gap) {
      var cw = chip(label, x, y, ROW);
      return choices(options, chosen, x + cw + 14, y + ROW / 2, gap);
    }
    // Section heading: line, then spaced capitals on the right (as on the printed form).
    function section(label, y) {
      var size = 8.2, sp = 2.6, wl = 0, x;
      for (var i = 0; i < label.length; i++) wl += width(label[i], F.semi, size) + sp;
      x = R - (wl - sp);
      page.drawLine({ start: { x: L, y: top(y) }, end: { x: x - 14, y: top(y) }, thickness: 1, color: C.navy });
      for (var j = 0; j < label.length; j++) { text(label[j], x, y + 3, F.semi, size, C.navy); x += width(label[j], F.semi, size) + sp; }
    }

    var LW = MID - L - 6, RX = MID + 6, RW = R - MID - 6;

    // Enquiry no. and date, on the dotted lines of the header.
    text(data.enquiryNo, 124, 141.2, F.semi, 9.2, C.navy);
    text(fmtDate(data.submittedAt), 76, 159.6, F.semi, 9.2, C.navy);

    var y = 205;
    // Campus and curriculum
    field('CAMPUS', 'JGS ' + data.campus, L, y, LW);
    field('CURRICULUM', data.curriculumLabel, RX, y, RW);

    // Name of the child, one letter per box (25 x 2)
    y += ROW + GAP;
    var NH = 32;
    box(L, y, R - L, NH);
    var ncw = chip('NAME OF\nTHE CHILD', L, y, NH, 64);
    var gx = L + ncw + 2, cols = 25, bw = (R - gx) / cols, rh = NH / 2;
    for (var i = 1; i < cols; i++) {
      var lx = gx + i * bw;
      page.drawLine({ start: { x: lx, y: top(y) }, end: { x: lx, y: top(y + NH) }, thickness: 0.5, color: C.line });
    }
    page.drawLine({ start: { x: gx, y: top(y + rh) }, end: { x: R, y: top(y + rh) }, thickness: 0.5, color: C.line });
    var cells = layoutName(data.studentName, cols, 2);
    if (cells) {
      cells.forEach(function (ch, k) {
        if (!ch) return;
        var r = Math.floor(k / cols), c = k % cols;
        text(ch, gx + c * bw + bw / 2 - width(ch, F.med, 9.6) / 2, y + r * rh + rh / 2 + 3.4, F.med, 9.6);
      });
    } else {
      text(fit(s(data.studentName).toUpperCase(), F.med, 9.6, R - gx - 10), gx + 6, y + NH / 2 + 3.4, F.med, 9.6);
    }

    // Gender and date of birth
    y += NH + GAP;
    choiceField('GENDER', ['Male', 'Female'], data.gender, L, y);
    box(RX, y, RW, ROW);
    var dw = chip('DATE OF BIRTH', RX, y, ROW);
    var dob = s(data.dateOfBirth).split('/');
    text((dob[0] || '__') + '  /  ' + (dob[1] || '__') + '  /  ' + (dob[2] || '____'), RX + dw + 12, y + ROW / 2 + 3.4, F.med, VALUE);

    // Grade and previous schooling
    y += ROW + GAP;
    field('GRADE APPLYING FOR', data.grade, L, y, LW);
    choiceField('PREVIOUS SCHOOLING', ['Yes', 'No'], data.previousSchooling, RX, y);

    // School name; board and class
    var prev = data.previousSchooling === 'Yes';
    y += ROW + GAP;
    field('SCHOOL NAME', prev ? data.previousSchoolName : 'Not applicable', L, y, R - L);
    y += ROW + GAP;
    var CX = 372;
    choiceField('BOARD', ['IB', 'ICSE', 'CBSE', 'SSC'], prev ? data.previousBoard : '', L, y, 16);
    field('CLASS', prev ? data.previousClass : '', CX, y, R - CX);

    // Siblings in this school
    var sib = data.siblingAtJgs === 'Yes';
    y += ROW + GAP;
    tallField('NAME OF SIBLINGS IN THIS SCHOOL', sib ? data.siblingName : 'None', L, y, R - L, 28);
    y += 28 + GAP;
    field('CLASS & SECTION', sib ? data.siblingClassSection : '', L, y, R - L);

    // Father and mother
    ['father', 'mother'].forEach(function (p) {
      y += ROW + 14;
      section(p === 'father' ? 'FATHER / GUARDIAN DETAILS' : 'MOTHER / GUARDIAN DETAILS', y);
      y += 8;
      field('NAME', data[p + 'Name'], L, y, R - L);
      y += ROW + GAP;
      field('QUALIFICATION', data[p + 'Qualification'], L, y, LW);
      field('ORGANISATION', data[p + 'Organisation'], RX, y, RW);
      y += ROW + GAP;
      var m = s(data[p + 'Mobile']);
      field('MOBILE NO.', m ? '+91 ' + m.replace(/(\d{5})(\d{5})/, '$1 $2') : '', L, y, LW);
      field('EMAIL ADDRESS', data[p + 'Email'], RX, y, RW);
    });

    // Residential address
    y += ROW + GAP;
    tallField('RESIDENTIAL ADDRESS', data.residentialAddress, L, y, R - L, 30);

    // How did you hear about us?
    y += 30 + GAP + 4;
    var hcw = chip('HOW DID YOU HEAR ABOUT US?', L, y, ROW);
    var hx = L + hcw + 22, heard = data.heardFrom;
    choices(['Google', 'Social media', 'Educational fairs'], heard, hx, y + ROW / 2, 22);
    choices(['Newspaper / print ads', 'Hoardings / signages'], heard, hx, y + ROW / 2 + 15, 22);
    var after = choices(['Word of mouth', 'Referral'], heard, hx, y + ROW / 2 + 30, 22);
    var refX = after - 16;
    page.drawLine({ start: { x: refX, y: top(y + ROW / 2 + 33) }, end: { x: R, y: top(y + ROW / 2 + 33) }, thickness: 0.7, color: C.navy, dashArray: [0.7, 1.6] });
    if (heard === 'Referral' && s(data.referralName)) {
      text(fit(data.referralName, F.med, 8.8, R - refX - 4), refX + 3, y + ROW / 2 + 31, F.med, 8.8);
    }

    // What happens next, contact details and (for Mokila) the compliance line.
    y += ROW + 44;
    page.drawLine({ start: { x: L, y: top(y) }, end: { x: R, y: top(y) }, thickness: 0.5, color: C.line });
    y += 13;
    var nx = L;
    text('WHAT HAPPENS NEXT:', nx, y, F.semi, 7.9, C.navy);
    nx += width('WHAT HAPPENS NEXT:', F.semi, 7.9) + 8;
    ['Our admissions team calls you', 'Visit the campus with this form', 'Complete the admission'].forEach(function (t, k) {
      page.drawCircle({ x: nx + 4.5, y: top(y - 2.8), size: 5.2, color: C.chip });
      text(String(k + 1), nx + 4.5 - width(String(k + 1), F.semi, 7) / 2, y - 0.4, F.semi, 7, C.navy);
      text(t, nx + 13, y, F.reg, 7.9, C.value);
      nx += 13 + width(t, F.reg, 7.9) + 10;
    });
    y += 13;
    var contact = data.campus === 'Mokila'
      ? 'JGS Mokila: Behind Vijetha Supermarket, SARK Garden Villas Road, Mokila, Shankarpally, Hyderabad 501203 · +91 90002 87940'
      : 'JGS Kokapet: Plot No. 65/6, Brindavan Colony, Narsingi, Hyderabad 500075 · +91 95132 51488';
    text(contact, L, y, F.reg, 7.4, C.muted);
    y += 10.5;
    text('hello@jgschool.in · www.jgschool.in · WhatsApp +91 89770 06304', L, y, F.reg, 7.4, C.muted);
    if (data.campus === 'Mokila') {
      y += 10.5;
      text('JGS Mokila plans to offer the IB PYP and MYP, and the ICSE for Grades 1 to 6, subject to IB authorisation and CISCE affiliation.', L, y, F.reg, 7.4, C.muted);
      y += 10.5;
      text('JGS Mokila is not yet an IB World School.', L, y, F.reg, 7.4, C.muted);
    }

    // Footer: the printed form's note, and when the form was sent.
    text('NOTE :', L, 790, F.semi, 8, C.navy);
    text('SUBMITTING THE ENQUIRY FORM', L, 803, F.reg, 8.4, C.navy, { ySkew: degrees(12) });
    text('DOES NOT GUARANTEE ADMISSION', L, 814, F.reg, 8.4, C.navy, { ySkew: degrees(12) });
    var sent = 'Submitted online at www.jgschool.in on ' + fmtDate(data.submittedAt) + ' at ' + fmtTime(data.submittedAt);
    text(sent, R - width(sent, F.reg, 7.4), 814, F.reg, 7.4, C.muted);

    return doc.save();
  }

  /** Puts a name into the letter boxes; words do not split across rows. null if it does not fit. */
  function layoutName(name, cols, rows) {
    var words = String(name || '').toUpperCase().replace(/\s+/g, ' ').trim().split(' ').filter(Boolean);
    var cells = new Array(cols * rows).fill(''), r = 0, c = 0;
    for (var i = 0; i < words.length; i++) {
      var w = words[i];
      if (w.length > cols) return null;
      if (c > 0 && c + 1 + w.length > cols) { r++; c = 0; } else if (c > 0) c++;
      if (r >= rows) return null;
      for (var j = 0; j < w.length; j++) cells[r * cols + c++] = w[j];
    }
    return cells;
  }

  function pad(n) { return String(n).padStart(2, '0'); }
  function fmtDate(d) { return pad(d.getDate()) + '/' + pad(d.getMonth() + 1) + '/' + d.getFullYear(); }
  function fmtTime(d) {
    var h = d.getHours(), ap = h >= 12 ? 'pm' : 'am';
    h = h % 12 || 12;
    return h + ':' + pad(d.getMinutes()) + ' ' + ap;
  }

  var api = { buildEnquiryPdf: buildEnquiryPdf, layoutName: layoutName };
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  else root.JGSEnquiryPdf = api;
})(typeof window !== 'undefined' ? window : this);
