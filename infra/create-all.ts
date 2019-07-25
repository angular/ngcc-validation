import { execSync } from "child_process";
import { writeFileSync, readFileSync, readFile, writeFile } from "fs";

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
  "@angular/compiler-cli": "angular/compiler-cli-builds#master",
  "@angular/language-service": "angular/language-service-builds#master"
};

const packages = require('./packages.json');

interface Package {
  name: string;
  version: string;
  deps: Package[]
}

const setup = (pkg: Package) => {
  // Validate project names;
  const projectName = `${pkg.name}-ngcc`.replace(/\-\d+\-/, '2').replace(/[^A-Za-z0-9-]/, '');
  execSync(`./node_modules/.bin/ng new ${projectName} --enable-ivy --defaults=true`, {
    stdio: 'inherit'
  });
  const packagePath = `./${projectName}/package.json`;
  const workspacePackage = JSON.parse(readFileSync(packagePath).toString());
  const deps = workspacePackage.dependencies;
  Object.keys(deps).forEach((dep: string) => {
    if (overrideDeps[dep]) {
      deps[dep] = overrideDeps[dep];
    }
  });
  deps[pkg.name] = pkg.version;
  pkg.deps.forEach(p => deps[p.name] = p.version);
  const devDeps = workspacePackage.devDependencies;
  Object.keys(devDeps).forEach((dep: string) => {
    if (overrideDevDeps[dep]) {
      devDeps[dep] = overrideDevDeps[dep];
    }
  });
  writeFileSync(packagePath, JSON.stringify(workspacePackage, null, 2));
  const appModulePath = `${projectName}/src/app/app.module.ts`;
  const appModule = readFileSync(appModulePath).toString();
  const module = appModule.replace(/@angular\/core';/, `@angular/core';\n\nimport '${pkg.name}';`);
  writeFileSync(appModulePath, module);
  execSync(`cd ${projectName} && rm -rf .git && npm i`, {
    stdio: 'inherit'
  });

  // Disable differential loading for faster builds
  const packageJsonPath = `${projectName}/tsconfig.json`;
  const tsconfig = JSON.parse(readFileSync(packageJsonPath).toString());
  tsconfig.compilerOptions.target = 'es5';
  writeFileSync(packageJsonPath, JSON.stringify(tsconfig, null, 2));
};

const Min = 0;
const Max = 91;

for (let i = Min; i < Max; i += 1) {
  const pkg = packages[i];
  setup(pkg);
}
