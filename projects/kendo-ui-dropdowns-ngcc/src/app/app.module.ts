import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { DropDownsModule } from '@progress/kendo-angular-dropdowns';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DropDownsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
