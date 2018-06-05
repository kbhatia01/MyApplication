import { Component,OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, } from 'ionic-angular';
import { SubjectDetailsPage } from '../subject-details/subject-details';
import { EduserviceProvider } from '../../providers/eduservice/eduservice';
import {App} from 'ionic-angular';

/**
 * Generated class for the SubjectListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-subject-list',
  templateUrl: 'subject-list.html',
})
export class SubjectListPage implements OnInit {
  errorMsg: any;
  subjects =[];
  
  course_id:string;
  constructor(private app:App,public navCtrl: NavController, public navParams: NavParams, private eduservice:EduserviceProvider, private loadingCtrl:LoadingController) {
 // this.pk_course_id = navParams.get('pk_course_id');
  console.log(navParams.data);
 this.course_id= JSON.stringify(navParams.data.pk_course_id);
 
  }
    ngOnInit(){
      let loading=this.loadingCtrl.create({
        content: 'please wait..'
      });
      loading.present();
      let user = JSON.parse(localStorage.getItem('currentUser'));
      this.eduservice.getSubjectList(user.instituteId,user.branchId,this.course_id)
    .subscribe(result => {
     console.log(result);
      this.subjects = result.Items
    },
      Error => this.errorMsg = Error
    );
  loading.dismiss();  
  }


  subjectSelected(subject_name,fees,pk_subject_id){
   const root=this.app.getRootNav();

    root.push(SubjectDetailsPage, {
      subject_name: subject_name,
      fees:fees,
      pk_subject_id:pk_subject_id,
      
    });
  }
  

}
