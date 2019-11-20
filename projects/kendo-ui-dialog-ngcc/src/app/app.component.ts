import { Component } from '@angular/core';
import {
  DialogService,
  WindowService,
  WindowRef,
  WindowCloseResult
} from '@progress/kendo-angular-dialog';
import { UserInfoComponent } from './user-info.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private dialogService: DialogService, private windowService: WindowService) { }
  public windowOpened = true;

  public openDialogForm() {
    const dialogRef = this.dialogService.open({
      content: UserInfoComponent,
    });

    const userInfo = dialogRef.content.instance;
    userInfo.name = 'admin';
    userInfo.age = 42;

    dialogRef.result.subscribe((r: any) => {
      if (r.primary) {
        console.log(`Form: ${JSON.stringify(userInfo.formGroup.value)}`);
      }
    });
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

  public close(component) {
    this[component + 'Opened'] = false;
  }
}
