import { writeFileSync, readFileSync } from "fs";

export function updateDeps(projectName: string) {
  const overrideDeps: {[name: string]: string} = {
    "@angular/animations": "angular/animations-builds#master",
    "@angular/common": "angular/common-builds#master",
    "@angular/compiler": "angular/compiler-builds#master",
    "@angular/core": "angular/core-builds#master",
    "@angular/forms": "angular/forms-builds#master",
    "@angular/platform-browser": "angular/platform-browser-builds#master",
    "@angular/platform-browser-dynamic": "angular/platform-browser-dynamic-builds#master",
    "@angular/router": "angular/router-builds#master"
  };

  const overrideDevDeps: {[name: string]: string} = {
    "@angular-devkit/build-angular": "angular/angular-devkit-build-angular-builds#master",
    "@angular/cli": "angular/cli-builds#master",
    "@angular/compiler-cli": "angular/compiler-cli-builds#master",
    "@angular/language-service": "angular/language-service-builds#master"
  };

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
