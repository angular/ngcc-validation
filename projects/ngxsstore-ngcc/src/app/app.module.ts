import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgxsModule } from '@ngxs/store';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxsModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
