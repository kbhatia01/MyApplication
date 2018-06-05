import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import {App} from 'ionic-angular';
import { EduserviceProvider } from '../../providers/eduservice/eduservice';
import { ProfilePage } from '../profile/profile';

/**
 * Generated class for the StudentListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-student-list',
  templateUrl: 'student-list.html',
})
export class StudentListPage implements OnInit {
  errorMsg: any;
  students = [];
  constructor(private app: App,
    private eduservice:EduserviceProvider,
    public navCtrl: NavController, 
    public navParams: NavParams,private loadingCtrl:LoadingController) {
  }
 ngOnInit(){

  let user = JSON.parse(localStorage.getItem('currentUser'));
  this.eduservice.getStudentList(user.instituteId,user.branchId)
  .subscribe(result => {
   console.log(result);
    this.students = result.Items
  },
    Error => this.errorMsg = Error
  );

 }
  studentSelected(pk_student_id){
    const root=this.app.getRootNav();

    root.push(ProfilePage,{
      pk_student_id : pk_student_id
    });
  }

}
