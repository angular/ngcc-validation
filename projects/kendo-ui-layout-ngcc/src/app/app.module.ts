import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { AppComponent } from './app.component';
import { ContentComponent } from './content.component';

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        LayoutModule,
        ButtonsModule
    ],
    declarations: [ AppComponent, ContentComponent ],
    bootstrap:    [ AppComponent ]
})
export class AppModule {}
