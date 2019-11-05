import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ColorPickerModule } from 'ngx-color-picker';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ColorPickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
