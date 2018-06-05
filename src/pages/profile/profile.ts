import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { DetailsPage } from '../details/details';
import { GuardiansPage } from '../guardians/guardians';
import { SocialDetailsPage } from '../social-details/social-details';
import { AdditionalDetailsPage } from '../additional-details/additional-details';
import { EduserviceProvider } from '../../providers/eduservice/eduservice';
import { EditDetailsPage } from '../edit-details/edit-details';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage implements OnInit {
  tab1Root: any = DetailsPage;
  tab2Root: any = SocialDetailsPage;
  tab3Root: any  = AdditionalDetailsPage;
  tab4Root: any = GuardiansPage;
  StudentParams:any;
  edit:boolean;
  errorMsg: any;
  pk_student_id:number;
  details=[];
   constructor(public navCtrl: NavController, public navParams: NavParams, private eduservice: EduserviceProvider,private loadingCtrl:LoadingController) {
    this.pk_student_id=navParams.get('pk_student_id');
  
     }
 
  changeImage() {
    console.log("OK");
  }
  ngOnInit() {
    this.edit=false;
  
    let loading=this.loadingCtrl.create({
      content: 'please wait..'
    });
    loading.present();
    let user = JSON.parse(localStorage.getItem('currentUser'));
    this.eduservice.getStudentProfile(user.studentId)
    .subscribe(result => {
     console.log(result);
     this.StudentParams = result.Item;
     this.details = result.Item;
    },
      Error => this.errorMsg = Error
    );
   loading.dismiss();   
  }
  editProfile() {
  
   this.edit=true;
 
  }

}
