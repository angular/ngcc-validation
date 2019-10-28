import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartsModule } from '@progress/kendo-angular-charts';
import { GridModule } from '@progress/kendo-angular-grid';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { SchedulerModule } from '@progress/kendo-angular-scheduler';

import 'hammerjs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GridDemoComponent } from './grid/grid-demo.component';
import { ChartDemoComponent } from './chart/chart-demo.component';
import { SchedulerDemoComponent } from './scheduler/scheduler-demo.component';
import { DateInputsDemoComponent } from './dateinputs/dateinputs-demo.component';


@NgModule({
  declarations: [
    AppComponent,
    AppRoutingModule,
    GridDemoComponent,
    ChartDemoComponent,
    SchedulerDemoComponent,
    DateInputsDemoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    GridModule,
    ChartsModule,
    SchedulerModule,
    DateInputsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
