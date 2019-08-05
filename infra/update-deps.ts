import { writeFileSync, readFileSync } from "fs";

const { devDependencies: overrideDevDeps, dependencies: overrideDeps } = require('./package.json');

export function updateDeps(projectName: string) {
  console.log(` - Loading package.json for ${projectName}`);
  const packagePath = `./${projectName}/package.json`;
  const workspacePackage = JSON.parse(readFileSync(packagePath).toString());
  console.log(' - Updating deps property...');
  const deps = workspacePackage.dependencies;
  Object.keys(deps).forEach((dep: string) => {
    if (overrideDeps[dep]) {
      deps[dep] = overrideDeps[dep];
    }
  });
  console.log('- Updating devDeps property...');
  const devDeps = workspacePackage.devDependencies;
  Object.keys(devDeps).forEach((dep: string) => {
    if (overrideDevDeps[dep]) {
      devDeps[dep] = overrideDevDeps[dep];
    }
  });
  writeFileSync(packagePath, JSON.stringify(workspacePackage, null, 2));
  console.log(`- Written updated package.json to ${packagePath}`);
}

if (require.main === module) {
  const projectName = process.argv.pop();
  if (!projectName) {
    throw new Error('Missing project name.');
  }
  updateDeps(projectName);
}
