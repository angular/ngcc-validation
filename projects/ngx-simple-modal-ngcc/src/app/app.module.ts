import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SimpleModalModule } from 'ngx-simple-modal';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SimpleModalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
