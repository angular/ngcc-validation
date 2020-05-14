import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BugsnagErrorHandler } from '@bugsnag/plugin-angular';
import Bugsnag from '@bugsnag/js';

import { AppComponent } from './app.component';

export function errorHandlerFactory() {
  // The API key must be a string of 32 hexadecimal characters.
  Bugsnag.start('0123456789ABCDEF0123456789ABCDEF');
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
