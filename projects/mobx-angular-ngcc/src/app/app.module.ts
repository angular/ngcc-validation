import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MobxAngularModule } from 'mobx-angular';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MobxAngularModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
