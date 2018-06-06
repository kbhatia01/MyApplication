import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { ExaminationDetailsPage } from '../examination-details/examination-details';
import { EduserviceProvider } from '../../providers/eduservice/eduservice';

/**
 * Generated class for the ExaminationListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-examination-list',
  templateUrl: 'examination-list.html',
})
export class ExaminationListPage implements OnInit {
  errorMsg: any;
  exams = [];
   constructor(public navCtrl: NavController, public navParams: NavParams, private eduservice:EduserviceProvider,private loadingCtrl:LoadingController) {
   }
  ngOnInit(){  
  
   let user = JSON.parse(localStorage.getItem('currentUser'));
   this.eduservice.getDateSheet(user.instituteId,user.branchId)
     .subscribe(result => {
      console.log(result);
       this.exams = result.Items
     },
       Error => this.errorMsg = Error
     );

  }
   itemSelected(pk_datesheet_id){
     this.navCtrl.push(ExaminationDetailsPage ,{
        pk_datesheet_id:pk_datesheet_id
     });
   }
 
}
