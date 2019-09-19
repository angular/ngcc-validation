import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ApolloModule } from 'apollo-angular';
import { HttpBatchLinkModule } from 'apollo-angular-link-http-batch';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ApolloModule,
    HttpBatchLinkModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
