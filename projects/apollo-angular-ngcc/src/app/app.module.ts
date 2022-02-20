import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { InMemoryCache } from '@apollo/client/core';
import { ApolloModule, APOLLO_OPTIONS } from 'apollo-angular';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    ApolloModule,
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
