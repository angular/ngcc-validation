import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { ToolBarModule } from '@progress/kendo-angular-toolbar';
import { DropDownListModule } from '@progress/kendo-angular-dropdowns';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { DialogModule } from '@progress/kendo-angular-dialog';

import { CustomToolComponent } from './custom-tool.component';
import { AppComponent } from './app.component';

@NgModule({
    declarations: [
      AppComponent,
      CustomToolComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        ToolBarModule,
        ButtonsModule,
        DialogModule,
        DropDownListModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
