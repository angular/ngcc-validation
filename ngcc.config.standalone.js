const baseConfig = require(`${__dirname}/ngcc.config.base`);

module.exports = {
  ...baseConfig,
  packages: {
    ...baseConfig.packages,

    // `ngcc` is currently unable to process exported non-const enums in UMD bundles. See
    // https://github.com/angular/ngcc-validation/pull/3189#issuecomment-844951349 for more details.
    //
    // For now, disable UMD processing for `@swimlane/ngx-charts`, which is the only known package
    // that is affected by this issue.
    '@swimlane/ngx-charts': {
      entryPoints: {
        '.': {
          override: {
            main: undefined,
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

    // The UMD bundles of some packages are generated with Rollup v2.57.0 or newer, which uses
    // element access (i.e. `exports['foo']`) instead of property access (i.e. `exports.foo`) for
    // certain exports. Since `ngcc` is not capable of correctly processing such exports, this
    // results in errors.
    //
    // Temporarily ignore UMD bundles for the affected entry-points.
    //
    // This change can be reverted once the problem is addressed (either by fixing this in Rollup,
    // reverting to an older version of Rollup in NgPackagr or fixing this in ngcc with something
    // like https://github.com/angular/angular/pull/43938).
    ...Object.fromEntries(
      Object.entries({
        '@delon/abc': ['date-picker'],
        '@delon/theme': ['.'],
        '@delon/util': ['pipes/currency'],
        'ng-zorro-antd': [
          'avatar',
          'badge',
          'core/transition-patch',
          'date-picker',
          'layout',
          'result',
          'slider',
          'tabs',
          'tree',
          'tree-view',
        ],
      }).map(([pkgName, entryPoints]) => [
        pkgName,
        {
          entryPoints: Object.fromEntries(entryPoints.map(entryPoint => [
            entryPoint,
            { override: { main: undefined } },
          ])),
        },
      ]),
    ),
  },
};
