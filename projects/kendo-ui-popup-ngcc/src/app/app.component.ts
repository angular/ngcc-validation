import { Component, TemplateRef } from '@angular/core';
import {
  PopupService,
  PopupRef
} from '@progress/kendo-angular-popup';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    public toggleText: string = "Show";
    public show: boolean = false;
    public popupRef: PopupRef;

    constructor(private popupService: PopupService) {}

    public togglePopup(template: TemplateRef<any>) {
        this.show = !this.show;
        this.toggleText = this.show ? "Hidе" : "Show";

        if (this.popupRef) {
            this.popupRef.close();
            this.popupRef = null;
        } else {
            this.popupRef = this.popupService.open({
                content: template,
                offset: { top: 100, left: 100 }
            });
        }
    }
}
