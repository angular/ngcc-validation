import { Component } from '@angular/core';

@Component({
    selector: 'app-chart',
    template: `
      <p>These are all inputs that are declared on base components, with the possible culprit being
        <a href="https://github.com/angular/angular/issues/30080">angular/angular#30080</a>
      </p>
      <kendo-chart renderAs="canvas" [pannable]="true" [zoomable]="true">
        <kendo-chart-series>
          <kendo-chart-series-item [data]="data" field="value" categoryField="category">
          </kendo-chart-series-item>
        </kendo-chart-series>
        <kendo-chart-category-axis>
          <kendo-chart-category-axis-item [max]="maxDate" [maxDivisions]="10">
          </kendo-chart-category-axis-item>
        </kendo-chart-category-axis>
        <kendo-chart-value-axis>
          <kendo-chart-value-axis-item [labels]="{ format: '#.00' }">
          </kendo-chart-value-axis-item>
        </kendo-chart-value-axis>
      </kendo-chart>
  `
})
export class ChartDemoComponent {
  public data: any[];
  public maxDate: Date = new Date(2019, 9, 1);

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
