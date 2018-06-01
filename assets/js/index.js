import '../scss/base.scss';
import $ from 'jquery';
import Alert from './module/alert';

/* 
 * @license    https://opensource.org/licenses/BSD-3-Clause New BSD License
 * @copyright  (c) 2017-2018, jailgreen jukka@jahlgren.eu
 */
let message = 'Welcome to StarTrackr! Now no longer under police ...';

if (BUILD !== 'production') {
  message = 'Welcome to StarTrackr! Now in development mode';
  // Enable LiveReload
  document.write(`<script src="http://${(location.host || 'localhost').
    split(':')[0]}:35729/livereload.js?snipver=1"></script>`);
}

$(() => {
  Alert(message);
});