import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { FormControlName } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { ProfilePage } from '../pages/profile/profile';
import { AttendancePage } from '../pages/attendance/attendance';
import { TimetablePage } from '../pages/timetable/timetable';
import { NoticePage } from '../pages/notice/notice';
import { FeePaymentPage } from '../pages/fee-payment/fee-payment';
import { DetailsPage } from '../pages/details/details';
import { GuardiansPage } from '../pages/guardians/guardians';
import { SocialDetailsPage } from '../pages/social-details/social-details';
import { AdditionalDetailsPage } from '../pages/additional-details/additional-details';
import { MakePaymentPage } from '../pages/make-payment/make-payment';
import { CourseListPage } from '../pages/course-list/course-list';
import { CourseDetailsPage } from '../pages/course-details/course-details';
import { SubjectListPage } from '../pages/subject-list/subject-list';
import { SubjectDetailsPage } from '../pages/subject-details/subject-details';
import { FacultyListPage } from '../pages/faculty-list/faculty-list';
import { StudentListPage } from '../pages/student-list/student-list';
import { GalleryPage } from '../pages/gallery/gallery';
import { TestsPage } from '../pages/tests/tests';
import { TestResultsPage } from '../pages/test-results/test-results';
import { NoticeDetailsPage } from '../pages/notice-details/notice-details';
import { ExaminationDetailsPage } from '../pages/examination-details/examination-details';
import { FacultyProfilePage } from '../pages/faculty-profile/faculty-profile';
import { ForgotPasswordPage } from '../pages/forgot-password/forgot-password';
import { EditDetailsPage } from '../pages/edit-details/edit-details';
import { EduserviceProvider } from '../providers/eduservice/eduservice';
import { HttpModule } from '@angular/http';
import { ExaminationListPage } from '../pages/examination-list/examination-list';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import {File} from  '@ionic-native/file'
import { LocalNotifications } from '@ionic-native/local-notifications';
import { FileOpener } from '@ionic-native/file-opener';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    ForgotPasswordPage,
    ProfilePage,
    DetailsPage,
    EditDetailsPage,
    SocialDetailsPage,
    AdditionalDetailsPage,
    GuardiansPage,
    FeePaymentPage,
    MakePaymentPage,
    CourseListPage,
    CourseDetailsPage,
    SubjectListPage,
    SubjectDetailsPage,
    FacultyListPage,
    FacultyProfilePage,
    StudentListPage,
    AttendancePage,
    TimetablePage,
    NoticePage,
    NoticeDetailsPage,
    TestsPage,
    TestResultsPage,
    ExaminationListPage,
    ExaminationDetailsPage,
    GalleryPage
],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    ReactiveFormsModule,
    FormsModule,
    HttpModule

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    ForgotPasswordPage,
    ProfilePage,
    DetailsPage,
    EditDetailsPage,
    SocialDetailsPage,
    AdditionalDetailsPage,
    GuardiansPage,
    FeePaymentPage,
    MakePaymentPage,
    CourseListPage,
    CourseDetailsPage,
    SubjectListPage,
    SubjectDetailsPage,
    FacultyListPage,
    FacultyProfilePage,
    StudentListPage,
    AttendancePage,
    TimetablePage,
    NoticePage,
    NoticeDetailsPage,
    TestsPage,
    TestResultsPage,
  ExaminationListPage,
 ExaminationDetailsPage,
    GalleryPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    EduserviceProvider,FileTransfer, FileTransferObject ,File,LocalNotifications,FileOpener
    
  ]
})
export class AppModule { }
