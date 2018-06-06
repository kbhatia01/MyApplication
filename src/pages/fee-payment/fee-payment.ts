import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { MakePaymentPage } from '../make-payment/make-payment';
import { EduserviceProvider } from '../../providers/eduservice/eduservice';

/**
 * Generated class for the FeePaymentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-fee-payment',
  templateUrl: 'fee-payment.html',
})
export class FeePaymentPage implements OnInit {
  errorMsg: any;
    payments = [];
   
  constructor(public navCtrl: NavController,
     public navParams: NavParams, private loadingCtrl:LoadingController,
    private eduservice: EduserviceProvider) {
  }
ngOnInit(){
  // let loading=this.loadingCtrl.create({
  //   content: 'please wait..'
  // });
  // loading.present();
  let user = JSON.parse(localStorage.getItem('currentUser'));
  this.eduservice.getPaymentHistory(user.admissionId)

  .subscribe(result => {
    
   console.log(result);
    this.payments = result.Items
  },
    Error => this.errorMsg = Error
    
  );
  //loading.dismiss
}
  makePayment(){
    this.navCtrl.push(MakePaymentPage);
  }
}
