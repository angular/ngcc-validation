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
