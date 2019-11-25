import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TooltipModule } from '@progress/kendo-angular-tooltip';
import { AppComponent } from './app.component';

@NgModule({
    bootstrap:    [AppComponent],
    declarations: [AppComponent],
    imports:      [BrowserModule, BrowserAnimationsModule, TooltipModule]
})
export class AppModule { }
