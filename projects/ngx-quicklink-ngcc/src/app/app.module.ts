import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { QuicklinkModule } from 'ngx-quicklink';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    QuicklinkModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
