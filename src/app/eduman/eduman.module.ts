import { Input, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatRadioModule } from '@angular/material/radio'; 
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatSortModule } from '@angular/material/sort';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { CountdownModule } from 'ngx-countdown';
import { MetismenuAngularModule } from '@metismenu/angular';
import { HttpClientModule } from '@angular/common/http';
import { SwiperModule } from 'swiper/angular';
import { CategoriesComponent } from './homeone/categories/categories.component';
import { HeroComponent } from './homeone/hero/hero.component';
import { HomeonemainComponent } from './homeone/homeonemain/homeonemain.component';
import { StudentsectionComponent } from './homeone/studentsection/studentsection.component';
import { FeaturesectionComponent } from './homeone/featuresection/featuresection.component';
import { BannersectionComponent } from './homeone/bannersection/bannersection.component';
import { EducationsectionComponent } from './homeone/educationsection/educationsection.component';
import { FooteroneComponent } from './common/footer/footerone/footerone.component';
import { BrandsliderComponent } from './elements/slider/brandslider/brandslider.component';
import { TestimonialsliderComponent } from './elements/slider/testimonialslider/testimonialslider.component';
import { CoursetabComponent } from './elements/tabs/coursetab/coursetab.component';
import { HeaderoneComponent } from './common/header/headerone/headerone.component';
import { HeadertwoComponent } from './common/header/headertwo/headertwo.component';
import { HometwomainComponent } from './hometwo/hometwomain/hometwomain.component';
import { HerosectiontwoComponent } from './hometwo/herosectiontwo/herosectiontwo.component';
import { CountersectionComponent } from './hometwo/countersection/countersection.component';
import { AboutsectiontwoComponent } from './hometwo/aboutsectiontwo/aboutsectiontwo.component';
import { CategoriessectiontwoComponent } from './hometwo/categoriessectiontwo/categoriessectiontwo.component';
import { PartnersectionComponent } from './hometwo/partnersection/partnersection.component';
import { TeachersectionComponent } from './hometwo/teachersection/teachersection.component';
import { ZoomsectionComponent } from './hometwo/zoomsection/zoomsection.component';
import { SkillsectionComponent } from './hometwo/skillsection/skillsection.component';
import { BlogsectionComponent } from './hometwo/blogsection/blogsection.component';
import { CoursetabtwoComponent } from './elements/tabs/coursetabtwo/coursetabtwo.component';
import { HomethreemainComponent } from './homethree/homethreemain/homethreemain.component';
import { AcademiccourseComponent } from './homethree/academiccourse/academiccourse.component';
import { CountersectionthreeComponent } from './homethree/countersectionthree/countersectionthree.component';
import { CampussectionComponent } from './homethree/campussection/campussection.component';
import { GallaryinstaComponent } from './homethree/gallaryinsta/gallaryinsta.component';
import { FootertwoComponent } from './common/footer/footertwo/footertwo.component';
import { MessagesectionComponent } from './homethree/messagesection/messagesection.component';
import { CardsectionComponent } from './homethree/cardsection/cardsection.component';
import { HerothreeComponent } from './homethree/herothree/herothree.component';
import { EventsectionComponent } from './homethree/eventsection/eventsection.component';
import { EventinnerComponent } from './homethree/eventinner/eventinner.component';
import { TestimonialthreeComponent } from './elements/slider/testimonialthree/testimonialthree.component';
import { HeaderthreeComponent } from './common/header/headerthree/headerthree.component';
import { MobilemenuComponent } from './common/header/mobilemenu/mobilemenu.component';
import { HeaderfourComponent } from './common/header/headerfour/headerfour.component';
import { AboutmainComponent } from './about/aboutmain/aboutmain.component';
import { AboutfeatureComponent } from './about/aboutfeature/aboutfeature.component';
import { AboutfeaturevideoComponent } from './about/aboutfeaturevideo/aboutfeaturevideo.component';
import { AboutcounterComponent } from './about/aboutcounter/aboutcounter.component';
import { KnowsbetterComponent } from './about/knowsbetter/knowsbetter.component';
import { AboutinstructorComponent } from './about/aboutinstructor/aboutinstructor.component';
import { AffiliatesectionComponent } from './about/affiliatesection/affiliatesection.component';
import { MembershipmainComponent } from './membership/membershipmain/membershipmain.component';
import { MembershipsectionComponent } from './membership/membershipsection/membershipsection.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { ContactmainComponent } from './contact/contactmain/contactmain.component';
import { ContactformComponent } from './contact/contactform/contactform.component';
import { ContactsidebarComponent } from './contact/contactsidebar/contactsidebar.component';
import { ContactmapComponent } from './contact/contactmap/contactmap.component';
import { FaqmainComponent } from './faqpage/faqmain/faqmain.component';
import { FaqtopicComponent } from './faqpage/faqtopic/faqtopic.component';
import { FaqbannerComponent } from './faqpage/faqbanner/faqbanner.component';
import { FaqdetailsmainComponent } from './faqdetails/faqdetailsmain/faqdetailsmain.component';
import { EventmainComponent } from './event/eventmain/eventmain.component';
import { EventdetailsmainComponent } from './eventdetails/eventdetailsmain/eventdetailsmain.component';
import { EventdetailsidebarComponent } from './eventdetails/eventdetailsidebar/eventdetailsidebar.component';
import { InstructormainComponent } from './instructor/instructormain/instructormain.component';
import { InstructorpromainComponent } from './instructor/instructorpromain/instructorpromain.component';
import { PaginationComponent } from './common/pagination/pagination.component';
import { BecomeinstructormainComponent } from './instructor/becomeinstructor/becomeinstructormain/becomeinstructormain.component';
import { JourneysectionComponent } from './instructor/becomeinstructor/journeysection/journeysection.component';
import { KnowledgesectionComponent } from './instructor/becomeinstructor/knowledgesection/knowledgesection.component';
import { BlogmainComponent } from './blog/blogmain/blogmain.component';
import { BlogsearchComponent } from './blog/blogsearch/blogsearch.component';
import { BlogrecentpostComponent } from './blog/blogrecentpost/blogrecentpost.component';
import { BlogcategoryComponent } from './blog/blogcategory/blogcategory.component';
import { BlogtagsComponent } from './blog/blogtags/blogtags.component';
import { BlogdetailsmainComponent } from './blogdetails/blogdetailsmain/blogdetailsmain.component';
import { BlogcommentComponent } from './blogdetails/blogcomment/blogcomment.component';
import { BlogformComponent } from './blogdetails/blogform/blogform.component';
import { WishlistmainComponent } from './wishlist/wishlistmain/wishlistmain.component';
import { CartmainComponent } from './cart/cartmain/cartmain.component';
import { CheckoutmainComponent } from './checkout/checkoutmain/checkoutmain.component';
import { ShopdetailsmainComponent } from './shopdetails/shopdetailsmain/shopdetailsmain.component';
import { RelatedproductComponent } from './elements/slider/relatedproduct/relatedproduct.component';
import { ShopmainComponent } from './shop/shopmain/shopmain.component';
import { ShopcatComponent } from './shop/shopcat/shopcat.component';
import { ShopratingComponent } from './shop/shoprating/shoprating.component';
import { ShoppriceComponent } from './shop/shopprice/shopprice.component';
import { ShoplevelComponent } from './shop/shoplevel/shoplevel.component';
import { ShoplanguageComponent } from './shop/shoplanguage/shoplanguage.component';
import { ShopdurationComponent } from './shop/shopduration/shopduration.component';
import { CourseonemainComponent } from './course/courseone/courseonemain/courseonemain.component';
import { CoursebarComponent } from './course/coursebar/coursebar.component';
import { CoursetwomainComponent } from './course/coursetwo/coursetwomain/coursetwomain.component';
import { CoursethreemainComponent } from './course/coursethree/coursethreemain/coursethreemain.component';
import { CoursefourmainComponent } from './course/coursefour/coursefourmain/coursefourmain.component';
import { CoursedetailsmainComponent } from './coursedetails/coursedetailsmain/coursedetailsmain.component';
import { CoursecurriculamComponent } from './coursedetails/coursecurriculam/coursecurriculam.component';
import { CourseinstructorComponent } from './coursedetails/courseinstructor/courseinstructor.component';
import { StudentfeedbackComponent } from './coursedetails/studentfeedback/studentfeedback.component';
import { CoursereviewComponent } from './coursedetails/coursereview/coursereview.component';
import { CoursevideoComponent } from './coursedetails/coursevideo/coursevideo.component';
import { ZoomclassmainComponent } from './zoom/zoomclassmain/zoomclassmain.component';
import { ZoomclassdetailsmainComponent } from './zoom/zoomclassdetailsmain/zoomclassdetailsmain.component';
import { BreadcrumbComponent } from './common/breadcrumb/breadcrumb.component';
import { FourdecadesComponent } from './homeone/fourdecades/fourdecades.component';
import { CustomsliderComponent } from './homeone/customslider/customslider.component';
import { WhyibpypComponent } from './homeone/whyibpyp/whyibpyp.component';
import { AdmissionopenComponent } from './homeone/admissionopen/admissionopen.component';
import { NewseducationComponent } from './homeone/newseductaion/newseducation.component';
import { AboutmissionComponent } from './about/aboutmission/aboutmission.component';
import { GallerymainComponent } from './gallery/gallerymain.component';
import { JgsdifferencemainComponent } from './jgsdifference/jgsdifferencemain.component';
import { StandoutComponent } from './jgsdifference/standout/standout.component';
import { FacilitesComponent } from './facilities/facilities.component';
import { CurriculumComponent } from './curriculum/curriculum.component';
import { TermsconditionmainComponent } from './termscondition/termscondition.component';
import { PrivacypolicyComponent } from './privacypolicy/privacypolicy.component';
import { AdmissionsComponent } from './admissions/admissions.component'; 
import { GalleryHomeComponent } from './homeone/galleryhome/galleryhome.component';
import { BrochureComponent } from './brochure/brochure.component';
import { ViewBrochuremainComponent } from './viewbrochure/viewbrochure.component';
import { BrochureFilpBookmainComponent } from './brochureflipbook/brochureflipbook.component';
import { AdmissionsLandingComponent } from './admissionslanding/admissionslanding.component';
import { HeroLandingComponent } from './homeone/herolanding/herolanding.component';
import { LegacyStandardsComponent } from './jgsdifference/legacystandards/legacystandards.component';
import { FooterLandingComponent } from './common/footer/footerlanding/footerlanding.component';
import { HeaderLandingComponent } from './common/header/headerlanding/headerlanding.component';
import { GallerylandingComponent } from './gallerylanding/gallerylanding.component';
import { AdmissionopenLandingComponent } from './homeone/admissionopenlanding/admissionopenlanding.component';
import { WhyibpypLandingComponent } from './homeone/whyibpyplanding/whyibpyplanding.component';
import { BlogHomeComponent } from './homeone/bloghome/bloghome.component';
import { AdmissionProgramsComponent } from './admissionprograms/admissionprograms.component';
import { ChildLearnComponent } from './childlearn/childlearn.component';
import { FourdecadesLandingComponent } from './homeone/fourdecadeslanding/fourdecadeslanding.component';
import { FaqLandingComponent } from './faqlanding/faqlanding.component';
import { NewsComponent } from './news/news.component';
import { FacilitiessliderComponent } from './elements/slider/facilitiesslider/facilitiesslider.component';
import { IcseComponent } from './icse/icse.component';
import { NewlandingpageComponent } from './homeone/newlandingpage/newlandingpage.component';
import { LandingheaderComponent } from './common/header/landingheader/landingheader.component';
import { NewlandingheroComponent } from './homeone/newlandinghero/newlandinghero.component';
import { LandingmobilemenuComponent } from './common/header/landingmobilemenu/landingmobilemenu.component';
import { LandingfooterComponent } from './common/footer/landingfooter/landingfooter.component';
import { EnquiryFormComponent } from './enquiry-form/enquiry-form.component';
import { HomeintroComponent } from './homeone/homeintro/homeintro.component';
import { HomeadmissionsComponent } from './homeone/homeadmissions/homeadmissions.component';
import { HomefaqComponent } from './homeone/homefaq/homefaq.component';



@NgModule({ 
  imports: [
    CommonModule,
    RouterModule,
    MatCheckboxModule,
    MatDialogModule,
    MatSelectModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatMenuModule,
    MatRadioModule,
    MatPaginatorModule,
    MatNativeDateModule,
    MatRippleModule,
    MatSortModule,
    MatSlideToggleModule,
    MatTooltipModule,
    MatExpansionModule,
    MatToolbarModule,
    MatDatepickerModule,
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    MatTabsModule,
    CountdownModule,
    MetismenuAngularModule,
    HttpClientModule,
    SwiperModule
  ],
  declarations: [
    CategoriesComponent,
    HeroComponent,
    HomeonemainComponent,
    StudentsectionComponent,
    FeaturesectionComponent,
    BannersectionComponent,
    EducationsectionComponent,
    FooteroneComponent,
    BrandsliderComponent,
    TestimonialsliderComponent,
    CoursetabComponent,
    HeaderoneComponent,
    HeadertwoComponent,
    HometwomainComponent,
    HerosectiontwoComponent,
    CountersectionComponent,
    AboutsectiontwoComponent,
    CategoriessectiontwoComponent,
    PartnersectionComponent,
    TeachersectionComponent,
    ZoomsectionComponent,
    SkillsectionComponent,
    BlogsectionComponent,
    CoursetabtwoComponent,
    HomethreemainComponent,
    AcademiccourseComponent,
    CountersectionthreeComponent,
    CampussectionComponent,
    GallaryinstaComponent,
    FootertwoComponent,
    MessagesectionComponent,
    CardsectionComponent,
    HerothreeComponent,
    EventsectionComponent,
    EventinnerComponent,
    TestimonialthreeComponent,
    HeaderthreeComponent,
    MobilemenuComponent,
    HeaderfourComponent,
    AboutmainComponent,
    AboutfeatureComponent,
    AboutfeaturevideoComponent,
    AboutcounterComponent,
    KnowsbetterComponent,
    AboutinstructorComponent,
    AffiliatesectionComponent,
    MembershipmainComponent,
    MembershipsectionComponent,
    ErrorpageComponent,
    ContactmainComponent,
    ContactformComponent,
    ContactsidebarComponent,
    ContactmapComponent,
    FaqmainComponent,
    FaqtopicComponent,
    FaqbannerComponent,
    FaqdetailsmainComponent,
    EventmainComponent,
    EventdetailsmainComponent,
    EventdetailsidebarComponent,
    InstructormainComponent,
    InstructorpromainComponent,
    PaginationComponent,
    BecomeinstructormainComponent,
    JourneysectionComponent,
    KnowledgesectionComponent,
    BlogmainComponent,
    BlogsearchComponent,
    BlogrecentpostComponent,
    BlogcategoryComponent,
    BlogtagsComponent,
    BlogdetailsmainComponent,
    BlogcommentComponent,
    BlogformComponent,
    WishlistmainComponent,
    CartmainComponent,
    CheckoutmainComponent,
    ShopdetailsmainComponent,
    RelatedproductComponent,
    ShopmainComponent,
    ShopcatComponent,
    ShopratingComponent,
    ShoppriceComponent,
    ShoplevelComponent,
    ShoplanguageComponent,
    ShopdurationComponent,
    CourseonemainComponent,
    CoursebarComponent,
    CoursetwomainComponent,
    CoursethreemainComponent,
    CoursefourmainComponent,
    CoursedetailsmainComponent,
    CoursecurriculamComponent,
    CourseinstructorComponent,
    StudentfeedbackComponent,
    CoursereviewComponent,
    CoursevideoComponent,
    ZoomclassmainComponent,
    ZoomclassdetailsmainComponent,
    BreadcrumbComponent,
    FourdecadesComponent,
    CustomsliderComponent,
    WhyibpypComponent,
    AdmissionopenComponent,
    NewseducationComponent,
    AboutmissionComponent,
    GallerymainComponent,
    JgsdifferencemainComponent,
    StandoutComponent,
    FacilitesComponent,
    CurriculumComponent,
    TermsconditionmainComponent,
    PrivacypolicyComponent,
    AdmissionsComponent,
    GalleryHomeComponent,
    BrochureComponent,
    ViewBrochuremainComponent,
    BrochureFilpBookmainComponent,
    AdmissionsLandingComponent,
    HeroLandingComponent,
    LegacyStandardsComponent,
    FooterLandingComponent,
    HeaderLandingComponent,
    GallerylandingComponent,
    AdmissionopenLandingComponent,
    WhyibpypLandingComponent,
    BlogHomeComponent,
    AdmissionProgramsComponent,
    ChildLearnComponent,
    FourdecadesLandingComponent,
    FaqLandingComponent,
    NewsComponent,
    FacilitiessliderComponent,
    IcseComponent,
    NewlandingpageComponent,
    LandingheaderComponent,
    NewlandingheroComponent,
    LandingmobilemenuComponent,
    LandingfooterComponent,
    EnquiryFormComponent,
    HomeintroComponent,
    HomeadmissionsComponent,
    HomefaqComponent,
    
    
  ]
})
export class EdumanModule { }
