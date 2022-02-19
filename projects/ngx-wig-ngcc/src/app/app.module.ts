import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { NgxWigModule } from 'ngx-wig';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxWigModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
