import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SubjectDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-subject-details',
  templateUrl: 'subject-details.html',
})
export class SubjectDetailsPage {
subject_name:string;
status:string;
fees:number;
pk_subject_id:number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.subject_name = navParams.get('subject_name');
    this.fees = navParams.get('fees');
    this.status = navParams.get('status');
    this.pk_subject_id = navParams.get('pk_subject_id');
  
  }



}
