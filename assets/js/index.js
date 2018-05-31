import '../scss/base.scss';
import $ from 'jquery';
import Alert from './module/alert';

/* 
 * @license    https://opensource.org/licenses/BSD-3-Clause New BSD License
 * @copyright  (c) 2017-2018, jailgreen jukka@jahlgren.eu
 */

$(() => {
  Alert('The DOM is now loaded and can be manipulated.');
});