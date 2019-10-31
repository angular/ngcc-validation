import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'devextreme-angular-ngcc';

  fruits = [
    { fruit: 'Oranges', yield: 10, consumed: 7 },
    { fruit: 'Apples', yield: 15, consumed: 14 },
    { fruit: 'Bananas', yield: 9, consumed: 9 }
  ];
}
