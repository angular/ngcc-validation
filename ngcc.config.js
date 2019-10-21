module.exports = {
  packages: {
    // This is not strictly necessary, because `ngcc`'s `CommonJsReflectionHost` (which ends up
    // handiling the `main` property here) inherits from `Esm5ReflectionHost` can handle the files
    // (which are in ESM5 format), but this might break in the future, if for example `ngcc` needs
    // to add re-exports (which will be in CommonJS format and break webpack bundling, due to mixing
    // ES module exports and CommonJS exports in the same file).
    'ng-gapi': {
      entryPoints: {
        '.': {
          override: {
            main: undefined,
            module: './lib/index.js',
          },
        },
      },
    },
    'ng6-breadcrumbs': {
      entryPoints: {
        '.': {
        },
      },
    },
  },
};
