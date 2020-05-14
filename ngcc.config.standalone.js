const baseConfig = require(`${__dirname}/ngcc.config.base`);

module.exports = {
  ...baseConfig,
  packages: {
    ...baseConfig.packages,

    // `@alfresco/adf-core` is currently failing with ngcc.
    // Remove this when `@alfresco/adf-core` is removed from `infra/failing-projects.json`.
    '@alfresco/adf-core': {
      entryPoints: {
        '.': {
          ignore: true,
        },
      },
    },

    // `@carbon/icons-angular` v11 (currently v11.0.0 and v11.0.1) has incorrect values for
    // `package.json > main`, pointing to a non-existent file
    // (`bundles/carbon-components-angular.js`) instead of the correct one:
    // `bundles/carbon-icons-angular.umd.js`
    //
    // TODO: Remove this once https://github.com/carbon-design-system/carbon-icons-angular/issues/15
    //       has been fixed.
    '@carbon/icons-angular@>=11.0.0': {
      entryPoints: {
        '.': {
          override: {
            main: './bundles/carbon-icons-angular.umd.js',
          },
        },
      },
    },

    // `angular-draggable-droppable` uses Rollup with the
    // [rollup-commonjs](https://github.com/rollup/plugins/tree/master/packages/commonjs) plugin,
    // which results in UMD format that ngcc cannot understand. The Angular code is not contained
    // directly in the UMD factory function, but is wrapped into some IIFEs wrapped in other
    // functions, which are in turn invoked through a `createCommonjsModule()` helper.
    //
    // Since ngcc does not know to statically evaluate that format, we ignore the UMD bundles of
    // `angular-draggable-droppable`.
    //
    // Example of the resulting UMD code:
    // ```js
    // (function (global, factory) {
    //   typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('rxjs'), require('@angular/common'), require('@angular/core'), require('rxjs/operators')) :
    //     typeof define === 'function' && define.amd ? define(['rxjs', '@angular/common', '@angular/core', 'rxjs/operators'], factory) :
    //       (global = global || self, global['angular-draggable-droppable'] = factory(global.rxjs, global.ng.common, global.ng.core, global.rxjs.operators));
    // }(this, function (rxjs, common, core, operators) {
    //   'use strict';
    //
    //   function createCommonjsModule(fn, module) {
    //     return module = {exports: {}}, fn(module, module.exports), module.exports;
    //   }
    //
    //   // ...
    //
    //   var angularDraggableDroppable_umd = createCommonjsModule(function (module, exports) {
    //     (function (global, factory) {
    //       factory(exports, rxjs, common, bundle$5, core, operators);
    //     }(commonjsGlobal, function (exports, rxjs, common, autoScroll, i0, operators) {
    //       // ...
    //       var DragAndDropModule = /** @class */ (function () {
    //         // ...
    //       }());
    //
    //       exports.DragAndDropModule = DragAndDropModule;
    //     }));
    //   });
    //
    //   return angularDraggableDroppable_umd;
    // }));
    // ```
    'angular-draggable-droppable': {
      entryPoints: {
        '.': {
          override: {
            main: undefined,
          },
        },
      },
    },
  },
};
