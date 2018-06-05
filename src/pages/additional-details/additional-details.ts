import { Component, OnInit} from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { App } from 'ionic-angular';

/**
 * Generated class for the AdditionalDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-additional-details',
  templateUrl: 'additional-details.html',
})
export class AdditionalDetailsPage implements OnInit {

  data: any;
  constructor(private app:App,public navCtrl: NavController, public navParams: NavParams) {
  }

 ngOnInit(){
  this.data=this.navParams.data;
  console.log("add details"+this.data.name);
 }

editProfile(){
  
}
}
