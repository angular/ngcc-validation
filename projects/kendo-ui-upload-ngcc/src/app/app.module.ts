import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { UploadModule } from '@progress/kendo-angular-upload';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent, UploadInterceptor } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    UploadModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UploadInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
