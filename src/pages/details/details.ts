import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Loading } from 'ionic-angular';
import { App } from 'ionic-angular';
import { SocialDetailsPage } from '../social-details/social-details';
import { EduserviceProvider } from '../../providers/eduservice/eduservice';

import { AdditionalDetailsPage } from '../additional-details/additional-details';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';


/**
 * Generated class for the DetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage implements OnInit {

  errorMsg: any;
  edit: boolean;
  public editForm: FormGroup;
  items: any;
  private disabled: boolean = false;

  constructor(private app: App,
    public navCtrl: NavController,
    public navParams: NavParams,
    private eduservice: EduserviceProvider, public loadingCtrl: LoadingController, private formBuilder: FormBuilder) {
    this.editForm = this.formBuilder.group({
      name: ["", Validators.compose([Validators.required])],
      title: ["", Validators.compose([Validators.required])],
      login_email: ["", Validators.compose([Validators.required])],
      cellphone: ["", Validators.compose([Validators.required])],
      roll_number: ["", Validators.compose([Validators.required])],


    });


  }
  private editProfile(): void {
    this.edit = false;
  }

  private submitProfile(value: FormGroup) {
    this.edit = true;
    console.log(this.editForm.get("name").value);
    this.items.Item.name = this.editForm.get("title").value;
    this.items.Item.title = this.editForm.get("login_email").value;
    this.items.Item.login_email = this.editForm.get("cellphone").value;
    this.items.Item.cellphone = this.editForm.get("roll_number").value;
    this.eduservice.onEditDetails(this.items.Item);

  }
  ngOnInit() {
    this.edit = true;
    let user = JSON.parse(localStorage.getItem('currentUser'));
    this.eduservice.getStudentProfile(user.studentId)
      .subscribe(result => {
        console.log(result);
        this.items = result;
        this.editForm = this.formBuilder.group({
          name: [result.Item.name, Validators.compose([Validators.required])],
          title: [result.Item.title, Validators.compose([Validators.required])],
          login_email: [result.Item.login_email, Validators.compose([Validators.required])],
          cellphone: [result.Item.cellphone, Validators.compose([Validators.required])],
          roll_number: [result.Item.roll_number, Validators.compose([Validators.required])],

        });
      },
        Error => this.errorMsg = Error
      );


  }


}
