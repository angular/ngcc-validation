import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GaugesModule } from '@progress/kendo-angular-gauges';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    GaugesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
