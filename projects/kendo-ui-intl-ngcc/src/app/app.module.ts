import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { IntlModule } from '@progress/kendo-angular-intl';

import { AppComponent } from './app.component';

import '@progress/kendo-angular-intl/locales/en/all';
import '@progress/kendo-angular-intl/locales/bg/all';
import '@progress/kendo-angular-intl/locales/de/all';

@NgModule({
  imports:      [ BrowserModule, IntlModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ],
  providers: [{
      provide: LOCALE_ID,
      useValue: 'bg-BG'
  }]
})

export class AppModule { }
