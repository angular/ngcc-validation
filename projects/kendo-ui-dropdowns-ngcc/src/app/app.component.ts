import { Component } from '@angular/core';
import { groupBy } from '@progress/kendo-data-query';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public primitiveData: string[] = [
    'ena',
    'dyo',
    'tria',
    'tessera',
    'pente'
  ];

  public objectData: { value: number, text: string }[] = this.primitiveData.map((item, index) => ({ value: index + 1, text: item }));

  public largeListData: string[] = new Array(1000).fill(null).map(() => Math.random().toString());

  public groupedData = groupBy(this.objectData, [{ field: 'value' }]);
}
