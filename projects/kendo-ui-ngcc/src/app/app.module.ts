import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartsModule } from '@progress/kendo-angular-charts';
import { GridModule } from '@progress/kendo-angular-grid';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';

/* Uncomment and import into AppModule to see error in browser:
vendor.js:154678 Uncaught TypeError: Cannot set property 'ngBaseDef' of undefined
    at vendor.js:154678
    at Module.../../node_modules/@progress/kendo-angular-scheduler/__ivy_ngcc__/dist/fesm5/index.js (vendor.js:154680)
    at __webpack_require__ (runtime.js:80)
    at Module../src/app/app.module.ts (main.js:181)
    at __webpack_require__ (runtime.js:80)
    at Module../src/main.ts (main.js:486)
    at __webpack_require__ (runtime.js:80)
    at Object.0 (main.js:509)
    at __webpack_require__ (runtime.js:80)
    at checkDeferredModules (runtime.js:46)
*/
// import { SchedulerModule } from '@progress/kendo-angular-scheduler';

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
    //SchedulerModule,
    DateInputsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
