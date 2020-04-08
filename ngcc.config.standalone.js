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
