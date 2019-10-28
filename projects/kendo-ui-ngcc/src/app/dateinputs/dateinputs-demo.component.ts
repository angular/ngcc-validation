import { Component } from '@angular/core';


const errorLog = `
vendor.js:17488 ERROR Error: Uncaught (in promise): TypeError: el.setAttribute is not a function
TypeError: el.setAttribute is not a function
    at DefaultDomRenderer2.push.../../node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js.DefaultDomRenderer2.setAttribute (vendor.js:53332)
    at BaseAnimationRenderer.push.../../node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/animations.js.BaseAnimationRenderer.setAttribute (vendor.js:52225)
    at elementAttributeInternal (vendor.js:22527)
    at i18nAttributesFirstPass (vendor.js:36451)
    at Module.ɵɵi18nAttributes (vendor.js:36421)
    at DateInputComponent_Template (vendor.js:80692)
    at executeTemplate (vendor.js:21789)
    at renderView (vendor.js:21634)
    at renderComponent (vendor.js:22689)
    at renderChildComponents (vendor.js:21498)
    at resolvePromise (polyfills.js:1000)
    at resolvePromise (polyfills.js:959)
    at polyfills.js:1061
    at ZoneDelegate.invokeTask (polyfills.js:595)
    at Object.onInvokeTask (vendor.js:40033)
    at ZoneDelegate.invokeTask (polyfills.js:594)
    at Zone.runTask (polyfills.js:362)
    at drainMicroTaskQueue (polyfills.js:775)
    at ZoneTask.invokeTask [as invoke] (polyfills.js:681)
    at invokeTask (polyfills.js:1835)
`;

@Component({
    selector: 'app-dateinputs',
    template: `
      <p>Uncomment the section below to see the following error:</p>
      <pre>{{ error }}</pre>
      <div class="row example-wrapper" style="min-height: 450px;">
          <div class="col-xs-12 col-md-6 example-col">
              <p>DateInput</p>
              <kendo-dateinput [value]="value"></kendo-dateinput>
              <p>(use <code>←</code> and <code>→</code> to navigate, <code>↑</code> and <code>↓</code> to update)</p>

              <p>DatePicker</p>
              <kendo-datepicker [value]="value"></kendo-datepicker>
              <p>(use <code>Alt</code>+<code>↓</code> to open the Calendar)</p>

              <p>TimePicker</p>
              <kendo-timepicker
                  [value]="value"
              ></kendo-timepicker>
              <p>(use Alt+↓ to open the time list, Tab to move to the next time section in the popup, ↑ to increment and ↓ to decrement the value)</p>
          </div>
          <div class="col-xs-12 col-md-6 example-col">
              <p>Calendar</p>
              <kendo-calendar [value]="value"></kendo-calendar>
          </div>
      </div>
    `
})
export class DateInputsDemoComponent {
    public error = errorLog;
    public value: Date = new Date();
}
