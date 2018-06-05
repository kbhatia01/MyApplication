import { Component,OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { SubjectListPage } from '../subject-list/subject-list';
import { FacultyListPage } from '../faculty-list/faculty-list';
import { StudentListPage } from '../student-list/student-list';
import { EduserviceProvider } from '../../providers/eduservice/eduservice';
import { LoadedModule } from 'ionic-angular/util/module-loader';

/**
 * Generated class for the CourseDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-course-details',
  templateUrl: 'course-details.html',
})
export class CourseDetailsPage implements OnInit  {
  errorMsg: any;
  details = [];
 course_title:string;
 summary:string;
 status:string;
 week_duration:any;
 pk_course_id:number;
  tab1Root: any ;
  tab2Root: any ;
  tab3Root: any ;
  SubjectListParams = {
  
  };
  constructor(public navCtrl: NavController, public navParams: NavParams, private eduservice:EduserviceProvider,
    private loadingCtrl:LoadingController) {
  
    this.course_title = navParams.get('course_title');
    this.summary = navParams.get('summary');
    this.week_duration = navParams.get('week_duration');
    this.pk_course_id = navParams.get('pk_course_id');
    this.SubjectListParams = {pk_course_id:this.pk_course_id };
    this.tab1Root = SubjectListPage;
    this.tab2Root = FacultyListPage;
    this.tab3Root = StudentListPage;

}

ngOnInit(){
  
  }
}


