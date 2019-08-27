import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { FormGroup, FormBuilder } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-filters',
  templateUrl: 'filters.html',
})
export class FiltersPage {

  filterForm: FormGroup;
  ifscList: any;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public formBuilder: FormBuilder) {
    let filters = navParams.get("filters")
    if (filters) {
      this.filterForm = formBuilder.group({
        name: [filters.name],
        branch: [filters.branch]
      });
      this.ifscList = filters.ifscList;
    }
    else {
      this.filterForm = formBuilder.group({
        name: [''],
        branch: ['']
      })

      this.ifscList = [];
    }
  }

  apply() {
    let filterParams: any = {};

    filterParams = this.filterForm.value;
    filterParams.ifscList = this.ifscList;

    this.dismiss(filterParams);
  }

  dismiss(params?) {
    this.viewCtrl.dismiss({ params: params });
  }
}
