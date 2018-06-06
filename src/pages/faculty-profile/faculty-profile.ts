import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { EduserviceProvider } from '../../providers/eduservice/eduservice';

/**
 * Generated class for the FacultyProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-faculty-profile',
  templateUrl: 'faculty-profile.html',
})
export class FacultyProfilePage implements OnInit {
  errorMsg: any;
name:string;
pk_faculty_id:number;
faculties=[];
  constructor(public navCtrl: NavController, public navParams: NavParams , private eduservice:EduserviceProvider,private loadingCtrl:LoadingController) {
    
    this.name = navParams.get('name');
    this.pk_faculty_id = navParams.get('pk_faculty_id');
    
  }

 ngOnInit(){
  this.eduservice.getFacultyProfile(this.pk_faculty_id)
  .subscribe(result => {
   console.log(result);
    this.faculties = result.Item
  },
    Error => this.errorMsg = Error
  );

 }

}
