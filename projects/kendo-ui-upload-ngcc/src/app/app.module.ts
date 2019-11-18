import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { UploadModule } from '@progress/kendo-angular-upload';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    UploadModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
