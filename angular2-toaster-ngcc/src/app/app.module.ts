import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import 'angular2-toaster';

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
