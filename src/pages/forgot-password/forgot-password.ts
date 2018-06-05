import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms'

/**
 * Generated class for the ForgotPasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-forgot-password',
  templateUrl: 'forgot-password.html',
})
export class ForgotPasswordPage {
  passwordForm: FormGroup;
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public viewCtrl: ViewController,
    private formBuilder: FormBuilder) {
  }
  ngOnInit() {
    this.passwordForm = this.formBuilder.group({
      email: [''],
    })
  }
  closeModal() {
    this.viewCtrl.dismiss();
  }

  sendEmail(value: any) {
    console.log(value);
  }
}
