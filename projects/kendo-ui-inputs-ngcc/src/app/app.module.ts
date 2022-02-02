import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FloatingLabelModule } from "@progress/kendo-angular-label";
import { InputsModule } from '@progress/kendo-angular-inputs';
import { AppComponent } from './app.component';

@NgModule({
    bootstrap:    [AppComponent],
    declarations: [AppComponent],
    imports:      [BrowserModule, BrowserAnimationsModule, FloatingLabelModule, FormsModule, InputsModule]
})
export class AppModule { }
