import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SocialLoginModule, SocialAuthServiceConfig, GoogleLoginProvider } from 'angularx-social-login';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SocialLoginModule,
  ],
  providers: [{
    provide: 'SocialAuthServiceConfig', useFactory: () => ({autoLogin: false, providers: []}),
  }],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {}
}
