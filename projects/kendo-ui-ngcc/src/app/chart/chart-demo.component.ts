import { Component } from '@angular/core';

const errorLog = `
ERROR in TypeError: Cannot read property 'getStart' of undefined
  at Object.makeTemplateDiagnostic (/repos/ngcc-validation/node_modules/@angular/compiler-cli/src/ngtsc/typecheck/src/diagnostics.js:166:45)
  at RegistryDomSchemaChecker.checkElement (/repos/ngcc-validation/node_modules/@angular/compiler-cli/src/ngtsc/typecheck/src/dom.js:41:42)
  at TcbDomSchemaCheckerOp.execute (/repos/ngcc-validation/node_modules/@angular/compiler-cli/src/ngtsc/typecheck/src/type_check_block.js:347:43)
  at Scope.executeOp (/repos/ngcc-validation/node_modules/@angular/compiler-cli/src/ngtsc/typecheck/src/type_check_block.js:710:26)
  at Scope.render (/repos/ngcc-validation/node_modules/@angular/compiler-cli/src/ngtsc/typecheck/src/type_check_block.js:649:22)
  at Object.generateTypeCheckBlock (/repos/ngcc-validation/node_modules/@angular/compiler-cli/src/ngtsc/typecheck/src/type_check_block.js:44:37)
  at TypeCheckFile.addTypeCheckBlock (/repos/ngcc-validation/node_modules/@angular/compiler-cli/src/ngtsc/typecheck/src/type_check_file.js:45:41)
  at TypeCheckContext.addTemplate (/repos/ngcc-validation/node_modules/@angular/compiler-cli/src/ngtsc/typecheck/src/context.js:105:36)
  at ComponentDecoratorHandler.typeCheck (/repos/ngcc-validation/node_modules/@angular/compiler-cli/src/ngtsc/annotations/src/component.js:407:17)
  at /repos/ngcc-validation/node_modules/@angular/compiler-cli/src/ngtsc/transform/src/compilation.js:354:43
  at Map.forEach (<anonymous>)
  at IvyCompilation.typeCheck (/repos/ngcc-validation/node_modules/@angular/compiler-cli/src/ngtsc/transform/src/compilation.js:347:29)
  at NgtscProgram.getTemplateDiagnostics (/repos/ngcc-validation/node_modules/@angular/compiler-cli/src/ngtsc/program.js:371:25)
  at NgtscProgram.getNgSemanticDiagnostics (/repos/ngcc-validation/node_modules/@angular/compiler-cli/src/ngtsc/program.js:168:78)
  at checkDiagnostics (/repos/ngcc-validation/node_modules/@ngtools/webpack/src/gather_diagnostics.js:38:27)
  at Object.gatherDiagnostics (/repos/ngcc-validation/node_modules/@ngtools/webpack/src/gather_diagnostics.js:77:13)
  at AngularCompilerPlugin._emit (/repos/ngcc-validation/node_modules/@ngtools/webpack/src/angular_compiler_plugin.js:1036:61)
  at AngularCompilerPlugin._update (/repos/ngcc-validation/node_modules/@ngtools/webpack/src/angular_compiler_plugin.js:806:50)
  at process._tickCallback (internal/process/next_tick.js:68:7)
`;

const runtimeErrorLog = `
  ERROR in projects/kendo-ui-ngcc/src/app/chart/chart-demo.component.ts(32,38): error TS8002: 'pannable' is not a valid property of <kendo-chart>.
  projects/kendo-ui-ngcc/src/app/chart/chart-demo.component.ts(32,56): error TS8002: 'zoomable' is not a valid property of <kendo-chart>.
  projects/kendo-ui-ngcc/src/app/chart/chart-demo.component.ts(34,36): error TS8002: 'data' is not a valid property of <kendo-chart-series-item>.
  projects/kendo-ui-ngcc/src/app/chart/chart-demo.component.ts(38,43): error TS8002: 'max' is not a valid property of <kendo-chart-category-axis-item>.
  projects/kendo-ui-ngcc/src/app/chart/chart-demo.component.ts(38,59): error TS8002: 'maxDivisions' is not a valid property of <kendo-chart-category-axis-item>.
  projects/kendo-ui-ngcc/src/app/chart/chart-demo.component.ts(42,40): error TS8002: 'labels' is not a valid property of <kendo-chart-value-axis-item>.
`;

@Component({
    selector: 'app-chart',
    template: `
      <p>Remove the HTML comment in the template to see error:</p>
      <pre>{{ error }}</pre>
      <p>It's interesting to note that removing the comment it while 'ng serve kendo-ui-ngcc' is yields a different error:</p>
      <pre>{{ runtimeError }}</pre>
      <p>These are all inputs that are declared on base components, with the possible culprit being
        <a href="https://github.com/angular/angular/issues/30080">angular/angular#30080</a>
      </p>
      <!--
      <kendo-chart renderAs="canvas" [pannable]="true" [zoomable]="true">
        <kendo-chart-series>
          <kendo-chart-series-item [data]="data" field="value" categoryField="category">
          </kendo-chart-series-item>
        </kendo-chart-series>
        <kendo-chart-category-axis>
          <kendo-chart-category-axis-item [max]="maxDate" [maxDivisions]="10">
          </kendo-chart-category-axis-item>
        </kendo-chart-category-axis>
        <kendo-chart-value-axis>
          <kendo-chart-value-axis-item [labels]="{ format: '#.00' }">
          </kendo-chart-value-axis-item>
        </kendo-chart-value-axis>
      </kendo-chart>
      -->
  `
})
export class ChartDemoComponent {
  public data: any[];
  public maxDate: Date = new Date(2019, 9, 1);
  public error = errorLog;
  public runtimeError = runtimeErrorLog;

  constructor() {
    const data = this.data = [];
    for (let idx = 0; idx < 10000; idx++) {
      data.push({
        value: Math.floor(Math.random() * 100) + 1,
        category: new Date(2019, 8, idx)
      });
    }
  }
}
