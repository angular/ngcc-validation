import { Component } from '@angular/core';
import { SelectionRange } from '@progress/kendo-angular-dateinputs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  public min: Date = new Date(2019, 3, 3);
  public max: Date = new Date(2019, 5, 10);

  public value: Date = new Date(2019, 5, 4);
  public focusedDate: Date = new Date(2019, 5, 7);

  public range: SelectionRange = {
    start: new Date(2019, 1, 4),
    end: new Date(2019, 1, 10)
  };

  public dateTimeFormat = 'dd-MMM-yyyy HH:mm:ss';
  public timeFormat = 'HH:mm:ss';
}
