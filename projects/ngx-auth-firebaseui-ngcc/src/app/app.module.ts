import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgxAuthFirebaseUIModule } from 'ngx-auth-firebaseui';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxAuthFirebaseUIModule.forRoot({
      apiKey: 'dummy-api-key',
      projectId: 'dummy-project-id',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
