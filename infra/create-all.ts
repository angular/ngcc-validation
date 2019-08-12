import { execSync } from "child_process";
import { writeFileSync, readFileSync, existsSync } from "fs";

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
  execSync(`./node_modules/.bin/ng g app ${projectName} --enable-ivy --defaults --skip-install`, {
    stdio: 'inherit'
  });
  const packagePath = `./package.json`;
  const workspacePackage = JSON.parse(readFileSync(packagePath).toString());
  const deps = workspacePackage.dependencies;
  deps[pkg.name] = pkg.version;
  pkg.deps.forEach(p => deps[p.name] = p.version);

  writeFileSync(packagePath, JSON.stringify(workspacePackage, null, 2));
  const appModulePath = `${projectName}/src/app/app.module.ts`;
  const appModule = readFileSync(appModulePath).toString();
  const module = appModule.replace(/@angular\/core';/, `@angular/core';\n\nimport '${pkg.name}';`);
  writeFileSync(appModulePath, module);
};

const Min = 0;
const Max = packages.length;

for (let i = Min; i < Max; i += 1) {
  const pkg = packages[i];
  setup(pkg);
}
