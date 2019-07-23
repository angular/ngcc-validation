import { readdirSync, statSync } from "fs";
import { execSync } from "child_process";

const ignore = new Set(['infra', 'node_modules', '.git', '.', '..']);

const all = readdirSync('.').filter((dir: string) => !ignore.has(dir) && statSync(dir).isDirectory());

all.forEach(dir => {
  execSync(`cd ${dir} && ./node_modules/.bin/ng build`, {
    stdio: 'inherit'
  });
});
