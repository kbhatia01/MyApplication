import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { EduserviceProvider } from '../../providers/eduservice/eduservice';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { Platform } from 'ionic-angular';
import { GlobalVariable } from "../../providers/global";



/**
 * Generated class for the ExaminationDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-examination-details',
  templateUrl: 'examination-details.html',
})
export class ExaminationDetailsPage implements OnInit {
  errorMsg: any;
pk_datesheet_id:number;
details=[];
  constructor(public navCtrl: NavController, public navParams: NavParams,private plaform:Platform,private file:File,private transfer:FileTransfer, private eduservice:EduserviceProvider,private loadingCtrl:LoadingController) {
   this.pk_datesheet_id = navParams.get('pk_datesheet_id');
  }

  ngOnInit(){
   
    this.eduservice.getDateSheetDetails(this.pk_datesheet_id)
  .subscribe(result => {
   console.log(result);
    this.details=result.Item;
  },
    Error => this.errorMsg = Error
  );

  }
  download(url:string){
    let newurl=GlobalVariable.Downloadurl+url;
   let path=null;
   if (this.plaform.is('ios')) {
    path = this.file.documentsDirectory;
   }
   else{
    path = this.file.externalDataDirectory;
   }
   const transfer=this.transfer.create();
 transfer.download(newurl,path+"datesheet.pdf");
}
}
