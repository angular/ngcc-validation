import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {AgGridModule} from 'ag-grid-angular';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AgGridModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
