import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ExcelExportModule } from '@progress/kendo-angular-excel-export';
import { AppComponent } from './app.component';

@NgModule({
  imports:      [ BrowserModule, ExcelExportModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }