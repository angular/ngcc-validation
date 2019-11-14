import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ToolBarModule } from '@progress/kendo-angular-toolbar';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ToolBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
