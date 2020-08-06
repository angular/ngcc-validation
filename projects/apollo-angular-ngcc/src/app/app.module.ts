import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { InMemoryCache } from '@apollo/client/core';
import { APOLLO_OPTIONS } from 'apollo-angular';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      deps: [],
      useFactory: () => ({
        cache: new InMemoryCache(),
      }),
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
