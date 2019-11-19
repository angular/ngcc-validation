import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    public splitButtonData: Array<any> = [{
        text: 'Option 1'
    }, {
        text: 'Option 2',
    }, {
        text: 'Option 3',
    }];

    public dropdownButtonData: Array<any> = [{
        text: 'Option 1'
    }, {
        text: 'Option 2',
    }, {
        text: 'Option 3',
    }];
}
