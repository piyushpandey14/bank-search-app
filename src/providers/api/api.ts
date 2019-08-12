import { Injectable } from '@angular/core';
import { UtilityProvider } from '../utility/utility';

@Injectable()
export class ApiProvider {

  domain: string;

  constructor(private utils: UtilityProvider) {
    this.domain = "https://vast-shore-74260.herokuapp.com/";
  }

  getBanks(city, requestHeaders) {
    return new Promise((resolve, reject) => {
      let endPoint = this.domain + "banks?city=" + city;
      this.utils.makeGetRequest(endPoint, requestHeaders)
        .then((resp: any) => {
          resolve(resp);
        })
        .catch((err) => {
          reject(err);
        })
    })
  }
}
