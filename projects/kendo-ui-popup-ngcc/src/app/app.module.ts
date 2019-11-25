import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { PopupModule } from '@progress/kendo-angular-popup';

@NgModule({
    bootstrap: [ AppComponent ],
    declarations: [ AppComponent ],
    imports: [
      PopupModule,

      BrowserModule,
      BrowserAnimationsModule
    ]
})
export class AppModule {}