import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FiltersPage } from './filters';
import {IonTagsInputModule} from "ionic-tags-input";

@NgModule({
  declarations: [
    FiltersPage,
  ],
  imports: [
    IonicPageModule.forChild(FiltersPage),
    IonTagsInputModule
  ],
})
export class FiltersPageModule {}
