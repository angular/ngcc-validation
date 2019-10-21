import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BreadcrumbsModule } from 'ng6-breadcrumbs';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BreadcrumbsModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
