import { execSync } from "child_process";
import { writeFileSync, readFileSync, existsSync } from "fs";

const { devDependencies: overrideDevDeps, dependencies: overrideDeps } = require('./package.json');
const packages = require('./packages.json');

interface Package {
  name: string;
  version: string;
  deps: Package[]
}

const getProjectName = (name: string) => {
  return `${name}-ngcc`.replace(/\-\d+\-/, '2').replace(/[^A-Za-z0-9-]/, '').replace(/\//, '');
};

const setup = (pkg: Package) => {
  // Validate project names;
  const projectName = getProjectName(pkg.name);
  if (existsSync(projectName)) {
    console.log(`${projectName} already exists`);
    return;
  }
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
const Max = packages.length;

for (let i = Min; i < Max; i += 1) {
  const pkg = packages[i];
  setup(pkg);
}
