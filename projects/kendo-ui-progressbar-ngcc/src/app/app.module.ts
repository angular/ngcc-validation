import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ProgressBarModule } from '@progress/kendo-angular-progressbar';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ProgressBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
