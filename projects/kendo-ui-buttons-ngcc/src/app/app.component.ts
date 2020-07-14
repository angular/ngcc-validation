import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'kendo-ui-misc-ngcc';
  chips = ['Chips', 'Snack', 'Smack'];
  dropDownButtonItems = [
    {text: 'My Profile'},
    {text: 'Friend Requests'},
    {text: 'Account Settings'},
    {text: 'Support'},
    {text: 'Log Out'},
  ];
  splitButtonItems = [
    {text: 'Keep Text Only'},
    {text: 'Paste as HTML'},
    {text: 'Paste Markdown'},
    {text: 'Set Default Paste'},
  ];

  onButtonClick() {}
  onSplitButtonClick() {}
  onSplitButtonItemClick(evt: any) {}
}
