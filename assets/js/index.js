import '../scss/base.scss';

/* eslint-disable no-unused-vars */
import $ from 'jquery';
import Info from './module/jquery.plugin.info';
import menu from './module/jquery.menu';
/* eslint-enable no-unused-vars */

/* 
 * @license    https://opensource.org/licenses/BSD-3-Clause New BSD License
 * @copyright  (c) 2017-2018, jailgreen jukka@jahlgren.eu
 */
let message = 'Welcome to StarTrackr! Now in live production ...';

if (BUILD !== 'production') {
  message = 'Welcome to StarTrackr! Now in development mode...';
  // Enable LiveReload
  document.write(`<script src="http://${(location.host || 'localhost')
    .split(':')[0]}:35729/livereload.js?snipver=1"></script>`);
}

(($) => {
  if (typeof $ === 'undefined') {
    throw new TypeError('Website\'s JavaScript requires jQuery. ' +
            'jQuery must be included before Website\'s JavaScript.');
  }
  
  const version = $.fn.jquery.split(' ')[0].split('.');
  const maxMajor = 4;
  const minMajor = 3;

  if ( version[0] < minMajor || version[0] >= maxMajor ) {
    throw new Error('Website\'s JavaScript requires at least jQuery v3.0.0');
  }
})($);

$('body').info(message);
$('.app-menu li').menu();
