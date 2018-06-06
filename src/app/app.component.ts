import { Component,ViewChild,OnInit } from '@angular/core';
import { Nav, NavController,Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { ProfilePage } from '../pages/profile/profile';
import { AttendancePage } from '../pages/attendance/attendance';
import { FeePaymentPage } from '../pages/fee-payment/fee-payment';
import { TimetablePage } from '../pages/timetable/timetable';
import { NoticePage } from '../pages/notice/notice';
import { CourseListPage } from '../pages/course-list/course-list';
import { TestsPage } from '../pages/tests/tests';
import { GalleryPage } from '../pages/gallery/gallery';
import { CourseDetailsPage } from '../pages/course-details/course-details';
import { ExaminationListPage } from '../pages/examination-list/examination-list';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild('myNav') nav: NavController;
  rootPage:any = LoginPage;
  activePage:any;
  pages: Array<{ title: string, component: any }>;
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'My Profile', component: ProfilePage},
      { title: 'Finance/Fee', component: FeePaymentPage},
      { title: 'Courses', component: CourseListPage},
      { title: 'Tests', component: TestsPage},
      { title: 'Attendance', component: AttendancePage},
      { title: 'Timetable', component: TimetablePage},
      { title: 'Notices/News', component: NoticePage},
      { title: 'Exams/Datesheet', component:ExaminationListPage},
      { title: 'Gallery', component: GalleryPage},

      ];
}
openPage(page){
this.nav.setRoot(page.component);
}
onLogout(){
  this.nav.setRoot(LoginPage);
}

}

