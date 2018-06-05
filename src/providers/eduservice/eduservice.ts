import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map'
import { GlobalVariable } from '../global';
import { LoadingController } from 'ionic-angular';

/*
  Generated class for the EduserviceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class EduserviceProvider {
  private baseurl = GlobalVariable.Baseurl;
  private apikey = GlobalVariable.ApiKey;
  private headers = new Headers({ 'Content-Type': 'application/json', 'api_key': this.apikey });
  private options = new RequestOptions({ headers: this.headers });
  constructor(public http: Http, private loadingCtrl: LoadingController) {
    console.log('Hello EduserviceProvider Provider');
  }

  // onLogin(user){
  //   let headers = this.headers;
  //   let options = new RequestOptions({ headers: headers });
  //   let url = this.baseurl +'/api/Login';

  //   return this.http.post(url, user,)
  //     .map((resp: Response) => {

  //      console.log(resp.json());
  //       return resp.json();
  //     });
  // }


  getStudentProfile(id): Observable<any> {
    console.log('Fetch student record for ID: ' + id);
    let loading = this.loadingCtrl.create({
      content: 'please wait..'
    });
    loading.present();
    let url = this.baseurl + '/api/Student/' + id;
    return this.http.get(url, this.options)
      .map((response: Response) => {
        console.log('API responded');

        let resp = response.json();
        console.log(resp);
        loading.dismiss();
        return resp;
      })
      .catch(this._errorHandler);
  }

  _errorHandler(error: Response) {
    console.error(error);
    return Observable.throw(error || "Server Error");
  }
  getCourseList(iid, bid): Observable<any> {
    console.log('Fetch course list for ID: ' + bid);
    let loading = this.loadingCtrl.create({
      content: 'please wait..'
    });
    loading.present();
    let url = this.baseurl + '/api/Course?institute_id=' + iid + '&branch_id=' + bid;
    return this.http.get(url, this.options)
      .map((response: Response) => {
        console.log('API responded');

        let resp = response.json();
        console.log(resp);
        loading.dismiss();
        return resp;
      })
      .catch(this._errorHandler);
  }


  getCourseDetails(cid): Observable<any> {
    console.log('Fetch course detail for ID: ' + cid);
    let loading = this.loadingCtrl.create({
      content: 'please wait..'
    });
    loading.present();
    let url = this.baseurl + '/api/Course/' + cid;
    return this.http.get(url, this.options)
      .map((response: Response) => {
        console.log('API responded');

        let resp = response.json();
        console.log(resp);
        loading.dismiss();
        return resp;
      })
      .catch(this._errorHandler);
  }



  getSubjectList(iid, bid, cid): Observable<any> {
    console.log('Fetch subject list for ID: ' + cid);
    let loading = this.loadingCtrl.create({
      content: 'please wait..'
    });
    loading.present();
    let url = this.baseurl + '/api/Subject?institute_id=' + iid + '&branch_id=' + bid + '&course_id=' + cid;
    return this.http.get(url, this.options)
      .map((response: Response) => {
        console.log('API responded');

        let resp = response.json();
        console.log(resp);
        loading.dismiss();
        return resp;
      })
      .catch(this._errorHandler);
  }


  getFacultyList(iid, bid): Observable<any> {
    console.log('Fetch faculty list for ID: ' + bid);
    let loading = this.loadingCtrl.create({
      content: 'please wait..'
    });
    loading.present();
    let url = this.baseurl + '/api/Faculty?institute_id=' + iid + '&branch_id=' + bid;
    return this.http.get(url, this.options)
      .map((response: Response) => {
        console.log('API responded');

        let resp = response.json();
        console.log(resp);
        loading.dismiss();
        return resp;
      })
      .catch(this._errorHandler);
  }


  getFacultyProfile(fid): Observable<any> {
    console.log('Fetch faculty profile for ID: ' + fid);
    let loading = this.loadingCtrl.create({
      content: 'please wait..'
    });
    loading.present();
    let url = this.baseurl + '/api/Faculty/' + fid;
    return this.http.get(url, this.options)
      .map((response: Response) => {
        console.log('API responded');

        let resp = response.json();
        console.log(resp);
        loading.dismiss();
        return resp;
      })
      .catch(this._errorHandler);
  }


  getStudentList(iid, bid): Observable<any> {
    console.log('Fetch student list for ID: ' + bid);
    let loading = this.loadingCtrl.create({
      content: 'please wait..'
    });
    loading.present();
    let url = this.baseurl + '/api/Student?institute_id=' + iid + '&branch_id=' + bid;
    return this.http.get(url, this.options)
      .map((response: Response) => {
        console.log('API responded');
        let resp = response.json();
        console.log(resp);
        loading.dismiss();
        return resp;
      })
      .catch(this._errorHandler);
  }

  getPaymentHistory(aid): Observable<any> {
    console.log('Fetch payment history for ID: ' + aid);
    let loading = this.loadingCtrl.create({
      content: 'please wait..'
    });
    loading.present();
    let url = this.baseurl + '/api/StudentPaymentHistory/' + aid;
    return this.http.get(url, this.options)
      .map((response: Response) => {
        console.log('API responded');
        let resp = response.json();
        console.log(resp);
        loading.dismiss();
        return resp;
      })
      .catch(this._errorHandler);
  }
  getStudentNotification(id): Observable<any> {
    console.log('Fetch student notification for ID: ' + id);
    let loading = this.loadingCtrl.create({
      content: 'please wait..'
    });
    loading.present();
    let url = this.baseurl + '/api/StudentNotification?student_id=' + id;
    return this.http.get(url, this.options)
      .map((response: Response) => {
        console.log('API responded');
        let resp = response.json();
        console.log(resp);
        loading.dismiss();
        return resp;
      })
      .catch(this._errorHandler);
  }
  getDateSheet(iid, bid): Observable<any> {
    console.log('Fetch datesheet for ID: ' + iid);
    let loading = this.loadingCtrl.create({
      content: 'please wait..'
    });
    loading.present();
    let url = this.baseurl + '/api/DateSheet?institute_id=' + iid + '&branch_id=' + bid;
    return this.http.get(url, this.options)
      .map((response: Response) => {
        console.log('API responded');
        let resp = response.json();
        console.log(resp);
        loading.dismiss();
        return resp;
      })
      .catch(this._errorHandler);
  }
  getDateSheetDetails(eid): Observable<any> {
    console.log('Fetch datesheet details for ID: ' + eid);
    let loading = this.loadingCtrl.create({
      content: 'please wait..'
    });
    loading.present();
    let url = this.baseurl + '/api/DateSheet/' + eid;
    return this.http.get(url, this.options)
      .map((response: Response) => {
        console.log('API responded');
        let resp = response.json();
        console.log(resp);
        loading.dismiss();
        return resp;
      })
      .catch(this._errorHandler);
  }
  onEditDetails(value: any):Observable<any> {
    let updateValue=JSON.stringify(value);
    let url = this.baseurl + "/api/Student/"
    return this.http.put(url, updateValue,this.options)
    .map((response: Response) => {
      console.log('API responded');

      let resp = response.json();
      console.log(resp);
      return resp;
    })
    .catch(this._errorHandler);
  }
}







