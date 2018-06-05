import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {App} from 'ionic-angular';

/**
 * Generated class for the GuardiansPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-guardians',
  templateUrl: 'guardians.html',
})
export class GuardiansPage implements OnInit {

  data: any;
  constructor(private app:App, public navCtrl: NavController, public navParams: NavParams) {
  }

 ngOnInit(){
  this.data=this.navParams.data;
  console.log("guardian details"+this.data.name);
 }
editProfile(){
  
}
}
