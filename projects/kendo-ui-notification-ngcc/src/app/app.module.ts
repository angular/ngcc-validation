import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotificationModule } from '@progress/kendo-angular-notification';
import { AppComponent } from './app.component';

@NgModule({
    bootstrap:    [AppComponent],
    declarations: [AppComponent],
    imports:      [BrowserModule, BrowserAnimationsModule, NotificationModule]
})
export class AppModule { }
