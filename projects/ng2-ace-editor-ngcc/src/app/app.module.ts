import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AceEditorModule } from 'ng2-ace-editor';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AceEditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
