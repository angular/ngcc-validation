import { Component } from '@angular/core';

const errorLog = `
vendor.js:154678 Uncaught TypeError: Cannot set property 'ngBaseDef' of undefined
    at vendor.js:154678
    at Module.../../node_modules/@progress/kendo-angular-scheduler/__ivy_ngcc__/dist/fesm5/index.js (vendor.js:154680)
    at __webpack_require__ (runtime.js:80)
    at Module../src/app/app.module.ts (main.js:181)
    at __webpack_require__ (runtime.js:80)
    at Module../src/main.ts (main.js:489)
    at __webpack_require__ (runtime.js:80)
    at Object.0 (main.js:512)
    at __webpack_require__ (runtime.js:80)
    at checkDeferredModules (runtime.js:46)
`;

@Component({
    selector: 'app-scheduler',
    template: `
      <p>Uncomment the SchedulerModule import in app.module.ts to see the following error:</p>
      <pre>{{ error }}</pre>
      <!--
      <kendo-scheduler>
      </kendo-scheduler>
      -->
    `
})
export class SchedulerDemoComponent {
  public error = errorLog;
}
