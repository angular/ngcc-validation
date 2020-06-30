import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { GoogleApiModule, NG_GAPI_CONFIG } from 'ng-gapi/lib/src';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    GoogleApiModule.forRoot({ provide: NG_GAPI_CONFIG, useValue: { /* ... */ } }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
