import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { CourseDetailsPage } from '../course-details/course-details';
import { EduserviceProvider } from '../../providers/eduservice/eduservice';

/**
 * Generated class for the CourseListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-course-list',
  templateUrl: 'course-list.html',
})
export class CourseListPage implements OnInit {
  errorMsg: any;
 courses = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, private eduservice:EduserviceProvider,private loadingCtrl:LoadingController) {
  }
 ngOnInit(){
  // let loading=this.loadingCtrl.create({
  //   content: 'please wait..'
  // });
  // loading.present();
  let user = JSON.parse(localStorage.getItem('currentUser'));
  this.eduservice.getCourseList(user.instituteId,user.branchId)
    .subscribe(result => {
     console.log(result);
      this.courses = result.Items
    },
      Error => this.errorMsg = Error
    );
    // loading.dismiss();
 }
  itemSelected(pk_course_id,course_title,summary,week_duration){
    
    this.navCtrl.push(CourseDetailsPage ,{
      pk_course_id : pk_course_id,
      course_title:course_title,
      summary:summary,
      week_duration:week_duration
    });
  }

}
