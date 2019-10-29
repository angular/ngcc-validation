import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'kendo-ui-charts-ngcc';
  data: any[];
  maxDate: Date = new Date(2019, 9, 1);

  constructor() {
    const data = this.data = [];
    for (let idx = 0; idx < 10000; idx++) {
      data.push({
        value: Math.floor(Math.random() * 100) + 1,
        category: new Date(2019, 8, idx)
      });
    }
  }
}
