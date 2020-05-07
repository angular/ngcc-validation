import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { DownloadModule } from '@carbon/icons-angular';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DownloadModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
