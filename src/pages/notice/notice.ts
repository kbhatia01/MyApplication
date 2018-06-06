import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { EduserviceProvider } from '../../providers/eduservice/eduservice';
import { NoticeDetailsPage } from '../notice-details/notice-details';

/**
 * Generated class for the NoticePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-notice',
  templateUrl: 'notice.html',
})
export class NoticePage implements OnInit{
  errorMsg: any;
notifications=[];
  constructor(public navCtrl: NavController, public navParams: NavParams, private eduservice:EduserviceProvider,private loadingCtrl:LoadingController) {
  }

  ngOnInit(){
    let loading=this.loadingCtrl.create({
      content: 'please wait..'
    });
    loading.present();
    let user = JSON.parse(localStorage.getItem('currentUser'));
    console.log(user.studentId);
    this.eduservice.getStudentNotification(user.studentId)
    .subscribe(result => {
     console.log(result);
      this.notifications = result.Items
    },
      Error => this.errorMsg = Error
    );
 loading.dismiss();
   }
   itemSelected(){
    
    this.navCtrl.push(NoticeDetailsPage);
  }
}
