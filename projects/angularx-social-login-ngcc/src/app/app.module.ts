import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SocialLoginModule, AuthServiceConfig, GoogleLoginProvider } from 'angularx-social-login';
import { AppComponent } from './app.component';

const config = new AuthServiceConfig([]);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SocialLoginModule,
  ],
  providers: [{
    provide: AuthServiceConfig, useFactory: () => config,
  }],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {}
}
