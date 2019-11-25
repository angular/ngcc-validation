import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public data: any[] = [
    {
      text: 'Furniture', items: [
        { text: 'Tables & Chairs' },
        { text: 'Sofas' },
        { text: 'Occasional Furniture' }
      ]
    },
    {
      text: 'Decor', items: [
        { text: 'Bed Linen' },
        { text: 'Curtains & Blinds' },
        { text: 'Carpets' }
      ]
    }
  ];

  public expandedKeys: string[] = ['0', '1'];
  public checkedKeys: string[] = ['0_0', '1_2'];
}
