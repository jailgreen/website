/* eslint-disable no-unused-vars */
import $ from 'jquery';
/* eslint-enable no-unused-vars */

/* 
 * @license    https://opensource.org/licenses/BSD-3-Clause New BSD License
 * @copyright  (c) 2017-2018, jailgreen jukka@jahlgren.eu
 *
 */

export default (function menu ($) {
  // Shell for your plugin code
  $.fn.menu = function menu() {
    // Plugin code
    return this.each(function() {
      // Do something to each item
      $(this)
        .hover(function() {
          $(this).animate({ 'paddingLeft': '+15px' }, 'slow');
        }, function() {
          $(this).animate({ 'paddingLeft': '-15px' }, 'slow');
        });
    });
  };
}(jQuery));  
