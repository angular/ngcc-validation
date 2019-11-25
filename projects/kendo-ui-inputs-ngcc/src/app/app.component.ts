import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    public maskedValue: string;
    public sliderValue = 5;
    public numericValue = 5;
    public switchValue = false;
    public min = 0;
    public max = 10;
    public smallStep = 1;
}
