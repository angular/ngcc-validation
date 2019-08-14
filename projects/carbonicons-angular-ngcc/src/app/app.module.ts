import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Download20Module } from '@carbon/icons-angular/lib/download/20';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    Download20Module,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
