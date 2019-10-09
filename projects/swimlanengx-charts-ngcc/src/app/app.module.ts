import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AreaChartModule } from '@swimlane/ngx-charts';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AreaChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
