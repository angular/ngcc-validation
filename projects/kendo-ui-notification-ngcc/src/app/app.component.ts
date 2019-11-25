import { Component, ViewChild, TemplateRef } from '@angular/core';

import { NotificationService, Type } from '@progress/kendo-angular-notification';

@Component({
  selector: 'app-root',
  template: `
    <!-- Basic config -->
    <button class="k-button" (click)="show()">Save data</button>

    <!-- Notification types -->
    <ng-template #template>Hi! I am notification.</ng-template>

    <button class="k-button" (click)="showDefault()">Show default</button>
    <button class="k-button" (click)="showSuccess()">Show success</button>
    <button class="k-button" (click)="showWarning()">Show warning</button>
    <button class="k-button" (click)="showInfo()">Show info</button>
    <button class="k-button" (click)="showError()">Show error</button>
  `
})
export class AppComponent {
  @ViewChild('template', { read: TemplateRef })
  public notificationTemplate: TemplateRef<any>;

  // public type: Type;

  constructor(
    private notificationService: NotificationService
  ) { }

  public show(): void {
    this.notificationService.show({
      content: 'Your data has been saved. Time for tea!',
      cssClass: 'button-notification',
      animation: { type: 'slide', duration: 400 },
      position: { horizontal: 'center', vertical: 'bottom' },
      type: { style: 'success', icon: true },
      closable: true
    });
  }

  public showDefault(): void {
    this.notificationService.show({
      content: this.notificationTemplate,
      hideAfter: 600,
      position: { horizontal: 'right', vertical: 'top' },
      animation: { type: 'fade', duration: 400 },
      type: { style: 'none', icon: false }
    });
  }

  public showSuccess(): void {
    this.notificationService.show({
      content: 'Success notification',
      hideAfter: 600,
      position: { horizontal: 'center', vertical: 'top' },
      animation: { type: 'fade', duration: 400 },
      type: { style: 'success', icon: true }
    });
  }

  public showWarning(): void {
    this.notificationService.show({
      content: 'Warning notification',
      hideAfter: 600,
      position: { horizontal: 'left', vertical: 'bottom' },
      animation: { type: 'fade', duration: 400 },
      type: { style: 'warning', icon: true }
    });
  }

  public showInfo(): void {
    this.notificationService.show({
      content: 'Info notification',
      hideAfter: 600,
      position: { horizontal: 'center', vertical: 'bottom' },
      animation: { type: 'fade', duration: 400 },
      type: { style: 'info', icon: true }
    });
  }
  public showError(): void {
    this.notificationService.show({
      content: 'Error notification',
      hideAfter: 600,
      position: { horizontal: 'right', vertical: 'bottom' },
      animation: { type: 'fade', duration: 400 },
      type: { style: 'error', icon: true }
    });
  }
}

