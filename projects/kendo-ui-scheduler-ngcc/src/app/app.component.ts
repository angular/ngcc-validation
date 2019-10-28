import { Component } from '@angular/core';
import { SchedulerEvent } from '@progress/kendo-angular-scheduler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  public selectedDate: Date = new Date('2018-10-22T00:00:00');
  public events: SchedulerEvent[] = [{
    id: 1,
    title: 'Breakfast',
    start: new Date('2018-10-22T09:00:00'),
    end: new Date('2018-10-22T09:30:00'),
    recurrenceRule: 'FREQ=DAILY;COUNT=5;'
  }];
}

