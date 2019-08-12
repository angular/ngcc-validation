import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import 'angulartics2';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
