import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import 'angular-font-awesome';

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
