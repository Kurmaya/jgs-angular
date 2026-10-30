import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { AboutmainComponent } from './eduman/about/aboutmain/aboutmain.component';
import { BlogmainComponent } from './eduman/blog/blogmain/blogmain.component';
import { BlogdetailsmainComponent } from './eduman/blogdetails/blogdetailsmain/blogdetailsmain.component';
import { CartmainComponent } from './eduman/cart/cartmain/cartmain.component';
import { CheckoutmainComponent } from './eduman/checkout/checkoutmain/checkoutmain.component';
import { ContactmainComponent } from './eduman/contact/contactmain/contactmain.component';
import { CoursefourmainComponent } from './eduman/course/coursefour/coursefourmain/coursefourmain.component';
import { CourseonemainComponent } from './eduman/course/courseone/courseonemain/courseonemain.component';
import { CoursethreemainComponent } from './eduman/course/coursethree/coursethreemain/coursethreemain.component';
import { CoursetwomainComponent } from './eduman/course/coursetwo/coursetwomain/coursetwomain.component';
import { CoursedetailsmainComponent } from './eduman/coursedetails/coursedetailsmain/coursedetailsmain.component';
import { ErrorpageComponent } from './eduman/errorpage/errorpage.component';
import { EventmainComponent } from './eduman/event/eventmain/eventmain.component';
import { EventdetailsmainComponent } from './eduman/eventdetails/eventdetailsmain/eventdetailsmain.component';
import { FaqdetailsmainComponent } from './eduman/faqdetails/faqdetailsmain/faqdetailsmain.component';
import { FaqmainComponent } from './eduman/faqpage/faqmain/faqmain.component';
import { HomeonemainComponent } from './eduman/homeone/homeonemain/homeonemain.component';
import { HomethreemainComponent } from './eduman/homethree/homethreemain/homethreemain.component';
import { HometwomainComponent } from './eduman/hometwo/hometwomain/hometwomain.component';
import { BecomeinstructormainComponent } from './eduman/instructor/becomeinstructor/becomeinstructormain/becomeinstructormain.component';
import { InstructormainComponent } from './eduman/instructor/instructormain/instructormain.component';
import { InstructorpromainComponent } from './eduman/instructor/instructorpromain/instructorpromain.component';
import { MembershipmainComponent } from './eduman/membership/membershipmain/membershipmain.component';
import { ShopmainComponent } from './eduman/shop/shopmain/shopmain.component';
import { ShopdetailsmainComponent } from './eduman/shopdetails/shopdetailsmain/shopdetailsmain.component';
import { WishlistmainComponent } from './eduman/wishlist/wishlistmain/wishlistmain.component';
import { ZoomclassdetailsmainComponent } from './eduman/zoom/zoomclassdetailsmain/zoomclassdetailsmain.component';
import { ZoomclassmainComponent } from './eduman/zoom/zoomclassmain/zoomclassmain.component';
import { GallerymainComponent } from './eduman/gallery/gallerymain.component';
import { JgsdifferencemainComponent } from './eduman/jgsdifference/jgsdifferencemain.component';
import { FacilitesComponent } from './eduman/facilities/facilities.component';
import { CurriculumComponent } from './eduman/curriculum/curriculum.component';
import { TermsconditionmainComponent } from './eduman/termscondition/termscondition.component';
import { PrivacypolicyComponent } from './eduman/privacypolicy/privacypolicy.component';
import { AdmissionsComponent } from './eduman/admissions/admissions.component';
import { BrochureComponent } from './eduman/brochure/brochure.component';
import { ViewBrochuremainComponent } from './eduman/viewbrochure/viewbrochure.component';
import { BrochureFilpBookmainComponent } from './eduman/brochureflipbook/brochureflipbook.component';
import { AdmissionsLandingComponent } from './eduman/admissionslanding/admissionslanding.component';
import { NewsComponent } from './eduman/news/news.component';
import { IcseComponent } from './eduman/icse/icse.component';
import { NewlandingpageComponent } from './eduman/homeone/newlandingpage/newlandingpage.component';

const routes: Routes = [ 
  { path: '', component: HomeonemainComponent, pathMatch: 'full' },
  {
    path: 'home',
    component: NewlandingpageComponent
  },
  
  // {
  //   path: 'home-2',
  //   component: HometwomainComponent
  // },
  // {
  //   path: 'home-3',
  //   component: HomethreemainComponent
  // },
  {
    path: 'about',
    component: AboutmainComponent
  },
  // {
  //   path: 'gallery',
  //   component: GallerymainComponent
  // },
  {
    path: 'jgsdifference',
    component: JgsdifferencemainComponent
  },
  {
    path: 'facilities',
    component: FacilitesComponent,
    data: {
      title: "Products - Find the latest and hottest products",
      description: "Welcome to the product page of the application"
    }
  },
  {
    path: 'curriculum',
    component: CurriculumComponent
  },
  {
  path: 'icse',
  component: IcseComponent
},
  {
    path: 'terms-and-conditions',
    component: TermsconditionmainComponent
  },
  {
    path: 'privacypolicy',
    component: PrivacypolicyComponent
  },
  {
    path: 'enquiry-form',
    component: AdmissionsComponent
  },
  // {
  //   path: 'admissions',
  //   component: AdmissionsLandingComponent
  // },
  /*{
    path: 'brochure',
    component: BrochureComponent
  },*/
  // {
  //   path: 'brochure',
  //   component: ViewBrochuremainComponent
  // },
  // {
  //   path: 'view-brochure',
  //   component: BrochureFilpBookmainComponent
  // },
  // {
  //   path: 'membership',
  //   component: MembershipmainComponent
  // },
  {
    path: '404-page',
    component: ErrorpageComponent
  },
  {
    path: 'contact',
    component: ContactmainComponent
  },
  // {
  //   path: 'news',
  //   component: NewsComponent
  // },
  // {
  //   path: 'faq-page',
  //   component: FaqmainComponent
  // },
  // {
  //   path: 'faq-details',
  //   component: FaqdetailsmainComponent
  // },
  // {
  //   path: 'event',
  //   component: EventmainComponent
  // },
  // {
  //   path: 'event-details',
  //   component: EventdetailsmainComponent
  // },
  // {
  //   path: 'instructor',
  //   component: InstructormainComponent
  // },
  // {
  //   path: 'instructor-profile',
  //   component: InstructorpromainComponent
  // },
  // {
  //   path: 'become-instructor',
  //   component: BecomeinstructormainComponent
  // },
  // {
  //   path: 'blog',
  //   component: BlogmainComponent
  // },
  // {
  //   path: 'blog-details',
  //   component: BlogdetailsmainComponent
  // },
  // {
  //   path: 'wishlist',
  //   component: WishlistmainComponent
  // },
  // {
  //   path: 'cart',
  //   component: CartmainComponent
  // },
  // {
  //   path: 'checkout',
  //   component: CheckoutmainComponent
  // },
  // {
  //   path: 'shop',
  //   component: ShopmainComponent
  // },
  // {
  //   path: 'shop-details',
  //   component: ShopdetailsmainComponent
  // },
  // {
  //   path: 'course',
  //   component: CourseonemainComponent
  // },
  // {
  //   path: 'course-2',
  //   component: CoursetwomainComponent
  // },
  // {
  //   path: 'course-3',
  //   component: CoursethreemainComponent
  // },
  // {
  //   path: 'course-4',
  //   component: CoursefourmainComponent
  // },
  // {
  //   path: 'course-details',
  //   component: CoursedetailsmainComponent
  // },
  // {
  //   path: 'zoom-class',
  //   component: ZoomclassmainComponent
  // },
  // {
  //   path: 'zoom-class-detalis',
  //   component: ZoomclassdetailsmainComponent
  // }
];


@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking',
    anchorScrolling: 'enabled'
})
],
  exports: [RouterModule]
})
export class AppRoutingModule {}
