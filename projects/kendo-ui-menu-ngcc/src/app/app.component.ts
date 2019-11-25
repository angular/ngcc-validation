import { Component } from '@angular/core';

export const items: any[] = [{
    text: 'Item1',
    items: [{ text: 'Item1.1' }, { text: 'Item1.2', items: [{ text: 'Item1.2.1' }, { text: 'Item1.2.2' }] }]
}, {
    text: 'Item2',
    items: [{ text: 'Item2.1' }, { text: 'Item2.2' }, { text: 'Item2.3' }]
}, {
    text: 'Item3'
}];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    public items: any[] = items;
}
