import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {Basic} from './basic';
import { LibStarterModule } from 'stuff-lib';
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";

import { 
  MdButtonModule, 
  MdAutocompleteModule,
  MdCheckboxModule,
  MdDatepickerModule,
  MdCardModule,
  MdRadioModule,
  MdChipsModule,
  MdListModule,
  MdSnackBarModule,
  MdSliderModule,
  MdDialogModule,
  MdMenuModule,
  MdSidenavModule
} from '@angular/material';

class Stuff {
  static stuff(x: string) {
    console.log('stuff' + x);
  }
}

function stuff(x: string) {
  Stuff.stuff(x);
}

stuff('Hallo Welt!');

@NgModule({
  declarations: [Basic],
  bootstrap: [Basic],
  imports: [
    BrowserModule, 
    HttpModule, 
    FormsModule, 
    MdButtonModule, 
    MdAutocompleteModule,
    MdCheckboxModule,
    MdDatepickerModule,
    MdCardModule,
    MdRadioModule,
    MdChipsModule,
    MdListModule,
    MdSnackBarModule,
    MdSliderModule,
    MdDialogModule,
    MdMenuModule,
    MdSidenavModule
    // LibStarterModule.forRoot()
  ],
})
export class AppModule {
}
