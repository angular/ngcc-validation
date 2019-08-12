import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import '@alfresco/adf-core';

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
