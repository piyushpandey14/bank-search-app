import { Injectable } from '@angular/core';
import { Headers, RequestOptions, Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { AlertController, ToastController, LoadingController, App } from 'ionic-angular';

@Injectable()
export class UtilityProvider {
  loader;

  constructor(private http: Http,
    public alertCtrl: AlertController,
    public toastCtrl: ToastController,
    public loadingCtrl: LoadingController,
    public app: App) {
  }

  showAlert(title: string, subTitle: string): void {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: subTitle,
      buttons: ['OK']
    });
    alert.present();
  }

  showLoading(message?: string) {
    if (!message) {
      message = "Please Wait...";
    }
    this.loader = this.loadingCtrl.create({
      content: message,
    });
    this.loader.present();
  }

  hideLoading() {
    this.loader.dismiss();
  }

  makeGetRequest(url, requestHeaders?) {
    return new Promise((resolve, reject) => {
      let headers: any = new Headers();
      if (requestHeaders.token) {
        headers.append('Authorization', 'Token ' + requestHeaders.token);
      }
      let requestOptions = (headers == undefined) ? undefined : new RequestOptions({ headers: headers });
      this.http.get(url, requestOptions)
        .subscribe((res: Response) => {
          if (res.status === 200 || res.status === 201) {
            resolve(res.json());
          }
        }, error => {
          if (error.status == 400) {
            resolve(error.json());
          } else {
            reject(error);
          }
        });
    })
  }

  makePostRequest(url, params?, requestHeaders?, isMultipart?) {
    return new Promise((resolve, reject) => {
      let headers: any = new Headers();
      if (requestHeaders.msisdn) {
        headers.append('msisdn', requestHeaders.msisdn);
      } else if (requestHeaders.token) {
        headers.append('Authorization', 'Token ' + requestHeaders.token);
      }
      if (!isMultipart) {
        headers.append('Content-Type', 'application/json; charset=utf-8');
      }
      let requestOptions = (headers == undefined) ? undefined : new RequestOptions({ headers: headers });
      this.http.post(url, params, requestOptions)
        .subscribe((res: Response) => {
          if (res.status === 200 || res.status === 201) {
            resolve(res.json());
          }
        }, error => {
          if (error.status == 400) {
            resolve(error.json());
          } else {
            reject(error);
          }
        });
    })
  }

  makePutRequest(url, params?, requestHeaders?, isMultipart?) {
    return new Promise((resolve, reject) => {
      let headers: any = new Headers();
      if (requestHeaders.msisdn) {
        headers.append('msisdn', requestHeaders.msisdn);
      } else {
        headers.append('Authorization', 'Token ' + requestHeaders.token);
      }
      if (!isMultipart) {
        headers.append('Content-Type', 'application/json; charset=utf-8');
      }
      let requestOptions = (headers == undefined) ? undefined : new RequestOptions({ headers: headers });
      this.http.put(url, params, requestOptions)
        .subscribe((res: Response) => {
          if (res.status === 200 || res.status === 201) {
            resolve(res.json());
          }
        }, error => {
          if (error.status == 400) {
            resolve(error.json());
          } else {
            reject(error);
          }
        });
    })
  }

  makeDeleteRequest(url, requestHeaders?) {
    return new Promise((resolve, reject) => {
      let headers: any = new Headers();
      if (requestHeaders.msisdn) {
        headers.append('msisdn', requestHeaders.msisdn);
      } else {
        headers.append('Authorization', 'Token ' + requestHeaders.token);
      }
      headers.append('content-type', 'application/json; charset=utf-8');
      let requestOptions = (headers == undefined) ? undefined : new RequestOptions({ headers: headers });
      this.http.delete(url, requestOptions)
        .subscribe((res: Response) => {
          if (res.status === 200 || res.status === 201) {
            resolve(res.json());
          }
        }, error => {
          if (error.status == 400) {
            resolve(error.json());
          } else {
            reject(error);
          }
        });
    })
  }
}
