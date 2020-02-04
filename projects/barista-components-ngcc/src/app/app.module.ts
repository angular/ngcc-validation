import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DtButtonModule } from '@dynatrace/barista-components/button';
import { DtCardModule } from '@dynatrace/barista-components/card';
import { DtIconModule } from '@dynatrace/barista-components/icon';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DtCardModule,
    DtButtonModule,
    DtIconModule.forRoot({ svgIconLocation: "/assets/icons/{{name}}.svg" })
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
