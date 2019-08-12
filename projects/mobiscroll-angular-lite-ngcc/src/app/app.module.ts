import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MbscModule } from '@mobiscroll/angular-lite';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MbscModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
