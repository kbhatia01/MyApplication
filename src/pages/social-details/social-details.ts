import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { App } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EduserviceProvider } from '../../providers/eduservice/eduservice';

/**
 * Generated class for the SocialDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-social-details',
  templateUrl: 'social-details.html',
})
export class SocialDetailsPage implements OnInit {
  edit: boolean
  editForm: FormGroup
  data: any;
  items: any;
  errorMsg: any;


  constructor(private app: App, public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder, private eduservice: EduserviceProvider) {
    this.editForm = this.formBuilder.group({
      facebook_url: ["", Validators.compose([Validators.required])],
      skype_username: ["", Validators.compose([Validators.required])],
      twitter_handle: ["", Validators.compose([Validators.required])],
      linkedin_url: ["", Validators.compose([Validators.required])],
    });
  }
  ngOnInit() {
  this.edit = true;
    // let loading=this.loadingCtrl.create({
    //   content: 'please wait..'
    // });
    // loading.present();
    let user = JSON.parse(localStorage.getItem('currentUser'));
    this.eduservice.getStudentProfile(user.studentId)
      .subscribe(result => {
        console.log(result);
        this.items = result;
        //  loading.dismiss();
        this.editForm = this.formBuilder.group({
          facebook_url: [result.Item.facebook_url, Validators.compose([Validators.required])],
          skype_username: [result.Item.skype_username, Validators.compose([Validators.required])],
          twitter_handle: [result.Item.twitter_handle, Validators.compose([Validators.required])],
          linkedin_url: [result.Item.linkedin_url, Validators.compose([Validators.required])],

        });
      },
        Error => this.errorMsg = Error
      );


  }

  submitProfile(value) {

    this.edit = true;
    console.log(this.editForm.get("facebook_url").value);
    this.items.Item.skype_username = this.editForm.get("skype_username").value;
    this.items.Item.twitter_handle = this.editForm.get("twitter_handle").value;
    this.items.Item.linkedin_url = this.editForm.get("linkedin_url").value;
    this.items.Item.facebook_url = this.editForm.get("facebook_url").value;
    this.eduservice.onEditDetails(this.items.Item);

  }

  editProfile() {
    this.edit = false;

  }

}
