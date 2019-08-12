import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import '@ngrx/effects';

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
