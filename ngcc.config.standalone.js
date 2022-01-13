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
  },
};
