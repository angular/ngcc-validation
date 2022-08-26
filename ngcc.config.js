module.exports = {
  packages: {
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
