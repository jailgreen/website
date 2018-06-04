/* 
 * @license    https://opensource.org/licenses/BSD-3-Clause New BSD License
 * @copyright  (c) 2017-2018, jailgreen jukka@jahlgren.eu
 */
import { existsSync, readFileSync, statSync } from 'fs';
import { join } from 'path';
import { sync } from 'glob';

const regExpQuote = (str) => str.replace(/[-\\^$*+?.()|[\]{}]/g, '\\$&');

const isDirectory = (dir) => existsSync(dir) && statSync(dir).isDirectory();

const findUnusedVars = (dir) => {
  if (!isDirectory(dir)) {
    throw new Error(`"${dir}": Not a valid directory!`);
  }
  // eslint-disable-next-line no-console
  console.log(`Finding unused variables in "${dir}"...`);
  
  // Array of all Sass files' content
  const sassFiles = sync(join(dir, '**/*.scss'));
  // String of all Sass files' content
  let sassFilesString = '';

  // eslint-disable-next-line no-return-assign
  sassFiles.forEach((file) => sassFilesString += readFileSync(file, 'utf8'));
  
  // Array of all Sass variables
  const variables = sassFilesString.match(/(^\$[a-zA-Z0-9_-]+[^:])/gm) || [];

  // eslint-disable-next-line no-console
  console.log(`Found ${variables.length} total variables.`);
  
  // Loop through each variable
  variables.forEach((variable) => {
    const re = new RegExp(regExpQuote(variable), 'g');
    const count = (sassFilesString.match(re) || []).length;

    if (count === 1) {
      // eslint-disable-next-line no-console
      console.log(`Variable "${variable}" is not being used.`);
    }
  });
};

const lint = (dirs) => {
  if (dirs.length < 1) {
    throw new Error('Usage: lint-vars.js folder [, folder2...]');
  }
  
  dirs.forEach((arg) => findUnusedVars(arg));
};

export default lint;
