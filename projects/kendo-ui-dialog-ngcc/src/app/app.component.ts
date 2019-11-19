import { Component } from '@angular/core';
import {
  DialogService,
  DialogRef,
  DialogCloseResult,
  WindowService,
  WindowRef,
  WindowCloseResult
} from '@progress/kendo-angular-dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public dialogOpened = true;
  public windowOpened = true;
  public result;

  constructor(
    private dialogService: DialogService,
    private windowService: WindowService
  ) { }

  public close(component) {
    this[component + 'Opened'] = false;
  }

  public open(component) {
    this[component + 'Opened'] = true;
  }

  public action(status) {
    console.log(`Dialog result: ${status}`);
    this.dialogOpened = false;
  }

  public openWindow() {
    const window: WindowRef = this.windowService.open({
        title: 'My Window',
        content: 'My Content!',
        width: 450,
        height: 200
    });

    window.result.subscribe((result) => {
        if (result instanceof WindowCloseResult) {
            console.log('Window was closed!');
        }
    });
  }

  public openDialog() {
    const dialog: DialogRef = this.dialogService.open({
        title: 'Please confirm',
        content: 'Are you sure?',
        actions: [
            { text: 'No' },
            { text: 'Yes', primary: true }
        ],
        width: 450,
        height: 200,
        minWidth: 250
    });

    dialog.result.subscribe((result) => {
        if (result instanceof DialogCloseResult) {
            console.log('close');
        } else {
            console.log('action', result);
        }

        this.result = JSON.stringify(result);
    });
  }
}
