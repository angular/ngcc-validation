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

    // Some `@angular/fire` secondary entry-points on v5.4.2 seem to bundle `@angular/router`(!).
    // For example, see https://unpkg.com/browse/@angular/fire@5.4.2/bundles/analytics.umd.js.
    //
    // This causes the following error:
    // ```
    // There is no typings path for RouterOutlet in .../@angular/fire/bundles/analytics.umd.js.
    // We need to add an export for this class to a .d.ts typings file because Angular compiler
    // needs to be able to reference this class in compiled code, such as templates.
    // ```
    //
    // Note:
    // The error is fixed in v6.x (e.g.
    // https://unpkg.com/browse/@angular/fire@6.0.0-rc.1/bundles/angular-fire-analytics.umd.js).
    '@angular/fire@<=5.4.2': {
      entryPoints: {
        './analytics': {
          override: {
            main: undefined,
          },
        },
        './auth-guard': {
          override: {
            main: undefined,
          },
        },
      },
    },

    // The UMD bundle of the primary entry-point of `@angular/flex-layout` includes all secondary
    // entry-points (`core`, `extended`, `flex`, and `grid`), resulting in trying to process the
    // typings twice (once when processing each secondary entry-point and once when processing the
    // primary one).
    //
    // Skip processing the UMD format for the primary entry-point to avoid the error. The code will
    // be processed anyway as part of the secondary entry-points.
    '@angular/flex-layout': {
      entryPoints: {
        '.': {
          override: {
            main: undefined,
          },
        },
      },
    },

    // `ng-zorro-antd/core/addon` has its own `package.json` and is detected as an independent
    // entry-point, but it is also part of the `ng-zorro-antd/core` entry-point (as are all other
    // `ng-zorro-antd/core/` subdirectories). Ignore the `core/addon` entry-point, since it will be
    // compiled as part of `core`.
    //
    // Note 1: It seems like an oversight that `core/addon` has its own `package.json`.
    // Note 2: In version 9.x the layout is different and there is no `core/addon/` directory.
    'ng-zorro-antd': {
      entryPoints: {
        './core/addon': {
          ignore: true,
        },
      },
    },
  },
};
