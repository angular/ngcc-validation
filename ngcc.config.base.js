module.exports = {
  packages: {
    // This is not strictly necessary, because `ngcc`'s `CommonJsReflectionHost` (that ends up
    // handling the `main` property here) inherits from `Esm5ReflectionHost`, which can handle the
    // files (that are in ESM5 format), but this might break in the future, if for example `ngcc`
    // needs to add re-exports (which will be in CommonJS format and break webpack bundling, due to
    // mixing ES module exports and CommonJS exports in the same file).
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

    // `ng6-breadcrumbs` does not have a `.metadata.json` on the top level (next to its entry-point,
    // `./ng6-breadcrumbs.js`). The `.metadata.json` files are inside `./lib/`, next to the
    // components/services/modules source code files.
    //
    // The following config solves this issue, but it does not address another problem:
    // The entry-point file, `./ng6-breadcrumbs.js` is in ESM5 format and it re-exports stuff from
    // files inside `./lib/`, which are in CommonJS format. Having different formats causes ngcc to
    // fail to correctly reflect on the CommonJS files (which contain the
    // modules/components/services), because it expects ESM5 format.
    'ng6-breadcrumbs': {
      entryPoints: {
        '.': {
        },
      },
    },
  },
};
