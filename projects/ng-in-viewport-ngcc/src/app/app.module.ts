import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { InViewportModule } from 'ng-in-viewport';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    InViewportModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
