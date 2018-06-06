import { Component,OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams , ModalController } from 'ionic-angular';
import { FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms'
import { HomePage } from '../home/home';
import { ForgotPasswordPage } from '../forgot-password/forgot-password';
import { EduserviceProvider } from '../../providers/eduservice/eduservice';


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage implements OnInit {
  loginform: FormGroup;
   result:any;
   public studentId:number;
   public response:any;
  public instituteId:number;
  public branchId:number;
  public admissionId:number;
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private formBuilder: FormBuilder,
    public modalCtrl: ModalController, private edusome:EduserviceProvider) {
  }
 
 ngOnInit(){
  this.loginform = this.formBuilder.group({

    username: ['', Validators.compose([Validators.required])],
    password: ['', Validators.compose([Validators.required])],
    // remember: [true,Validators.compose([Validators.required])]

  })
  }

  onSubmit(m:FormGroup){
    localStorage.setItem('currentUser', JSON.stringify({studentId:13, instituteId: 2, branchId: 2, admissionId: 1}));
 
    // console.log(this.loginform.value);
    // console.log(m);
    // let a=this.edusome.onLogin(m);
    // a.subscribe((res:Response)=>{
     
    //   this.response=res;
    //  // console.log(res);
    //  //localStorage.setItem('currentUser', this.response.json());
    // });
  // console.log(this.response);
  // 
    this.navCtrl.push(HomePage);
  }

  forgotpassword(){
    let myModal = this.modalCtrl.create(ForgotPasswordPage);
    myModal.present();
  }

}
