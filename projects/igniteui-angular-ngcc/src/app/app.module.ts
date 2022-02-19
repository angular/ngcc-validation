import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { IgxGridModule } from 'igniteui-angular';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    IgxGridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
