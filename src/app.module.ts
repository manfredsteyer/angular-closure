import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {Basic} from './basic';
import { LibStarterModule } from 'stuff-lib';
import { MaterialModule } from '@angular/material';

@NgModule({
  declarations: [Basic],
  bootstrap: [Basic],
  imports: [BrowserModule, MaterialModule, LibStarterModule.forRoot()],
})
export class AppModule {
}
