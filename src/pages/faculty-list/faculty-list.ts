import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { FacultyProfilePage } from '../faculty-profile/faculty-profile';
import { EduserviceProvider } from '../../providers/eduservice/eduservice';
import {App} from 'ionic-angular';


/**
 * Generated class for the FacultyListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-faculty-list',
  templateUrl: 'faculty-list.html',
})
export class FacultyListPage implements OnInit {
  errorMsg: any;
  faculties = [];
  constructor(public navCtrl: NavController, 
    public navParams: NavParams , 
    private eduservice:EduserviceProvider ,
    private app:App,private loadingCtrl:LoadingController ) {
  }

  ngOnInit(){ 

    let user = JSON.parse(localStorage.getItem('currentUser'));
    this.eduservice.getFacultyList(user.instituteId,user.branchId)
    .subscribe(result => {
     console.log(result);
      this.faculties = result.Items
    },
      Error => this.errorMsg = Error
    );

  }
  facultySelected(name,pk_faculty_id){
    const root=this.app.getRootNav();

    root.push(FacultyProfilePage, {
      name: name,
      pk_faculty_id:pk_faculty_id
    });
  }

}
