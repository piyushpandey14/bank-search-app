import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UtilityProvider } from '../../providers/utility/utility';
import { ApiProvider } from '../../providers/api/api';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  banks: any = [];
  city: any = "MUMBAI";
  cities: any = [];
  searchText: any = "";

  constructor(public navCtrl: NavController,
    public api: ApiProvider,
    public utils: UtilityProvider,
    public navParams: NavParams) {
    this.cities = [
      "BANGALORE",
      "CHENNAI",
      "DELHI",
      "MUMBAI"
    ];
  }

  ionViewDidLoad() {
    this.getBanks();
  }

  onCityChange() {
    this.getBanks();
  }

  getBanks() {
    let requestHeaders: any = {};
    this.utils.showLoading();
    this.api.getBanks(this.city, requestHeaders).then((res: any) => {
      this.banks = res;
      this.utils.hideLoading();
    }).catch(err => {
      console.log(err);
      this.utils.hideLoading();
    })
  }

  onSearch(event) {
    this.searchText = event;
  }
}
