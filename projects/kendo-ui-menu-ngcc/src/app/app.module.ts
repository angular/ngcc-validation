import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenusModule } from '@progress/kendo-angular-menu';

import { AppComponent } from './app.component';

@NgModule({
  imports: [ BrowserModule, BrowserAnimationsModule, MenusModule ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
