import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NoticePage } from '../notice/notice';
import { CourseListPage } from '../course-list/course-list';
import { ExaminationListPage } from '../examination-list/examination-list';
import { TestsPage } from '../tests/tests';
import { FeePaymentPage } from '../fee-payment/fee-payment';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  onView(){
    this.navCtrl.push(NoticePage);
  }
  onClick(){
    this.navCtrl.push(CourseListPage);
  }
  onOpen(){
    this.navCtrl.push(ExaminationListPage);
  }
  onLoad(){
    this.navCtrl.push(TestsPage);
  }
  payments(){
    this.navCtrl.push(FeePaymentPage);
  }
}
