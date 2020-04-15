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
    'ng6-breadcrumbs': {
      entryPoints: {
        '.': {
        },
      },
    },

    // Enables the `@angular/cdk/coercion` and `@angular/cdk/testing` entry-points as Angular
    // packages, such that they participate in the dependency graph and ordering computation.
    // As these entry-points do not have Angular metadata they would otherwise not be considered,
    // causing their dependencies on `@angular/core` not to be included as transitive dependency
    // of entry-points that depend on these CDK entry-points.
    '@angular/cdk': {
      entryPoints: {
        'coercion': {
        },
        'testing': {
        },
      }
    }
  },
};
