import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { EduserviceProvider } from '../../providers/eduservice/eduservice';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { Platform } from 'ionic-angular';
import { GlobalVariable } from "../../providers/global";
import { ToastController } from 'ionic-angular';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { FileOpener } from '@ionic-native/file-opener';

declare var cordova: any;

/**
 * Generated class for the ExaminationDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-examination-details',
  templateUrl: 'examination-details.html',
})

export class ExaminationDetailsPage implements OnInit {
  errorMsg: any;
  pk_datesheet_id: number;
  details = [];
  path: any;



  constructor(public navCtrl: NavController, public navParams: NavParams,private fileOpener: FileOpener ,
    private localNotifications: LocalNotifications, public toastCtrl: ToastController, private plaform: Platform, 
    private file: File, private transfer: FileTransfer, private eduservice: EduserviceProvider, private loadingCtrl: LoadingController) {
    
    
      this.pk_datesheet_id = navParams.get('pk_datesheet_id');
    this.plaform.ready().then(() => {
      // make sure this is on a device, not an emulation (e.g. chrome tools device mode)
      if (!this.plaform.is('cordova')) {
        return false;
      }

      if (this.plaform.is('ios')) {
        this.path = this.file.documentsDirectory;
      }
      else if (this.plaform.is('android')) {
        this.path = this.file.dataDirectory;
      }
    });
  }

  ngOnInit() {
    this.localNotifications.schedule({
      id: 1,
      title: 'File DOwnloaded',
      text: 'Datesheet downloaded',
    });

    this.eduservice.getDateSheetDetails(this.pk_datesheet_id)
      .subscribe(result => {
        console.log(result);
        this.details = result.Item;
      },
        Error => this.errorMsg = Error
      );

  }
  download(url: string) {
    let newurl = GlobalVariable.Downloadurl + url;
      const fileTransfer = this.transfer.create();

      fileTransfer.download(newurl, this.file.dataDirectory + "File111.pdf").then((entery) => {
        alert(entery);
  //       this.localNotifications.schedule({
  //         id: 1,
  //         title: 'File DOwnloaded',
  //         text: 'Datesheet downloaded',
  //       });

  //       this.localNotifications.on('click').subscribe(n=> {
        
  //         this.fileOpener.open(this.path+'File.pdf', 'application/pdf')
  // .then(() => console.log('File is opened'))
  // .catch(e => console.log('Error opening file', e));

  //       });
     
      },(error) => {
        this.errorMsg=error;
      });


  }
}
