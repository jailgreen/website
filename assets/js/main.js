/* 
 * @license    https://opensource.org/licenses/BSD-3-Clause New BSD License
 * @copyright  (c) 2017-2018, jailgreen jukka@jahlgren.eu
 */
import { argv } from 'process';
import lint from './module/lint.js';

try {
  // eslint-disable-next-line no-magic-numbers
  lint(argv.slice(2));
} catch (e) {
  // eslint-disable-next-line no-console
  console.log(e.message);
}

