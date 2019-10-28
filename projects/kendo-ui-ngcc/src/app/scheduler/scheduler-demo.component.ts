import { Component } from '@angular/core';

@Component({
    selector: 'app-scheduler',
    template: `
      <p>Uncomment the SchedulerModule import in app.module.ts to see the following error:</p>
      <pre>{{ error }}</pre>
      <kendo-scheduler>
      </kendo-scheduler>
    `
})
export class SchedulerDemoComponent {
}
