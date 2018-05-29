/* 
 * @license    https://opensource.org/licenses/BSD-3-Clause New BSD License
 * @copyright  (c) 2017-2018, jailgreen jukka@jahlgren.eu
 */
import lint from './module/lint.js';
import { argv } from 'process';

try {
  lint(argv.slice(2));
} catch (e) {
  // eslint-disable-next-line no-console
  console.log(e.message);
}

