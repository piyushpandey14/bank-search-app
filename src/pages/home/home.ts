import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
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
  nameFilter: any = "";
  branchFilter: any = "";
  ifscFilter: any = "";
  filters;

  constructor(public navCtrl: NavController,
    public api: ApiProvider,
    public utils: UtilityProvider,
    public navParams: NavParams,
    public modalCtrl: ModalController) {
    this.cities = [
      "BANGALORE",
      "CHENNAI",
      "DELHI",
      "KOLKATA",
      "MUMBAI",
      "PUNE"
    ];
  }

  ionViewDidLoad() {
    this.getBanks();
  }

  onCityChange() {
    this.getBanks();
    this.nameFilter = "";
    this.branchFilter = "";
    this.ifscFilter = [];
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

  openFilters() {
    let modal = this.modalCtrl.create('FiltersPage', {filters: this.filters}, {
      showBackdrop: true,
      enableBackdropDismiss: true
    });
    modal.onDidDismiss(data => {
      if (data && data.params) {
        this.nameFilter = data.params.name;
        this.branchFilter = data.params.branch;
        this.ifscFilter = data.params.ifscList.length > 0 ? data.params.ifscList : "";
        this.filters = data.params;
      }
    });
    modal.present();
  }

  // onSearch(event) {
  //   this.searchText = event;
  // }
}
