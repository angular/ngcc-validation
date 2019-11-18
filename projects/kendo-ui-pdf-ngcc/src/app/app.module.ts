import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PDFExportModule } from '@progress/kendo-angular-pdf-export';

import { AppComponent } from './app.component';

@NgModule({
  imports:      [
    BrowserModule,
    PDFExportModule
  ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }