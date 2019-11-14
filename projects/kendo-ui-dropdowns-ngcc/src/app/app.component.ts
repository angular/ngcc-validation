import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public data: string[] = [
    'ena',
    'dyo',
    'tria',
    'tessera',
    'pente'
  ];
}
