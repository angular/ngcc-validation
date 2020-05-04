import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BugsnagErrorHandler } from '@bugsnag/plugin-angular';
import Bugsnag from '@bugsnag/js';

import { AppComponent } from './app.component';

export function errorHandlerFactory() {
  Bugsnag.start('API_KEY');
  return new BugsnagErrorHandler();
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    { provide: ErrorHandler, useFactory: errorHandlerFactory },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
