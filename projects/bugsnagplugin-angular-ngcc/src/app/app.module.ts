import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BugsnagErrorHandler } from '@bugsnag/plugin-angular';
import bugsnag from '@bugsnag/js';

import { AppComponent } from './app.component';

export function errorHandlerFactory() {
  return new BugsnagErrorHandler(bugsnag('API_KEY'));
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
