import { Component } from '@angular/core';
import { ChartConfiguration } from 'chart.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'ng2-charts-ngcc';

  lineChartType = 'line';
  lineChartData: ChartConfiguration['data'] = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Series A',
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: 'rgba(255, 0, 0, 0.3)',
        borderColor: 'black',
        borderWidth: 1,
      },
    ],
  };
  lineChartOptions: ChartConfiguration['options'] = {
    responsive: false,
    maintainAspectRatio: false,
    plugins: {
      legend: {display: true},
    },
  };
}
