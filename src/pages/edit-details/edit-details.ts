import { Component , OnInit} from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { User } from '../edit-details/User';
import { ProfilePage } from '../profile/profile';
import { DetailsPage } from '../details/details';
import { HomePage } from '../home/home';
import {App} from 'ionic-angular';
import { EduserviceProvider } from '../../providers/eduservice/eduservice';

/**
 * Generated class for the EditDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-details',
  templateUrl: 'edit-details.html',
})
export class EditDetailsPage implements OnInit {
  details = [];
  errorMsg: any;
  editForm: FormGroup;

  user: User = new User();
  constructor(public navCtrl: NavController,public formBuilder:FormBuilder, public navParams: NavParams , private app:App,private service:EduserviceProvider,private loadingCtrl:LoadingController) {
    this.editForm = this.formBuilder.group({

      login_email: ['', Validators.compose([Validators.required])],
      pk_student_id: ['', Validators.compose([Validators.required])],
      title: ['', Validators.compose([Validators.required])],
      name: ['', Validators.compose([Validators.required])],
      summary: ['', Validators.compose([Validators.required])],
      picture: ['', Validators.compose([Validators.required])],
      login_password: ['', Validators.compose([Validators.required])],
      cellphone: ['', Validators.compose([Validators.required])],
      homephone: ['', Validators.compose([Validators.required])],
      aadhar_number: ['', Validators.compose([Validators.required])],
      pan: ['', Validators.compose([Validators.required])],
      facebook_url: ['', Validators.compose([Validators.required])],
      linkedin_url: ['', Validators.compose([Validators.required])],
      skype_username: ['', Validators.compose([Validators.required])],
      twitter_handle: ['', Validators.compose([Validators.required])],
      is_active: ['', Validators.compose([Validators.required])],
      is_deleted: ['', Validators.compose([Validators.required])],
      fk_institute_id: ['', Validators.compose([Validators.required])],
      fk_branch_id: ['', Validators.compose([Validators.required])],
      roll_number: ['', Validators.compose([Validators.required])],
      gender: ['', Validators.compose([Validators.required])],
      date_of_birth: ['', Validators.compose([Validators.required])],
      current_address: ['', Validators.compose([Validators.required])],
      permanent_address: ['', Validators.compose([Validators.required])],
      student_state: ['', Validators.compose([Validators.required])],
      status: ['', Validators.compose([Validators.required])],
      student_guardian: ['', Validators.compose([Validators.required])],
      
  
    });
}

  ngOnInit(){
     let loading=this.loadingCtrl.create({
      content: 'please wait..'
    });
    loading.present();
    let user = JSON.parse(localStorage.getItem('currentUser'));
    this.service.getStudentProfile(user.studentId)
    .subscribe(result => {
     console.log(result);
     this.details = result.Item;
     loading.dismiss();
    },
      Error => this.errorMsg = Error
   
    );
  }
 

 
onSubmit(value){
  this.service.onEditDetails(value);
console.log(value);
this.navCtrl.pop();
}
backButton(){
  console.log("done");
  this.navCtrl.pop();
}
}
