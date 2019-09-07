import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GridDemoComponent } from './grid/grid-demo.component';
import { ChartDemoComponent } from './chart/chart-demo.component';
import { SchedulerDemoComponent } from './scheduler/scheduler-demo.component';
import { DateInputsDemoComponent } from './dateinputs/dateinputs-demo.component';

const routes: Routes = [
  { path: 'grid', component: GridDemoComponent },
  { path: 'chart', component: ChartDemoComponent },
  { path: 'scheduler', component: SchedulerDemoComponent },
  { path: 'dateinputs', component: DateInputsDemoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
