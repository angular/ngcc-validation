import { Component } from '@angular/core';
import {IAngularMyDpOptions, IMyDateModel} from 'angular-mydatepicker';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myDpOptions: IAngularMyDpOptions = {
    dateRange: false,
    dateFormat: 'd.m.yyyy'
    // other options are here...
  };

  model: IMyDateModel = null;

  constructor() { }

  onDateChanged(event: IMyDateModel): void {
    // date selected
  }
}
