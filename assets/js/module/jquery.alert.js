/* eslint-disable no-unused-vars */
import $ from 'jquery';
/* eslint-enable no-unused-vars */

/* 
 * @license    https://opensource.org/licenses/BSD-3-Clause New BSD License
 * @copyright  (c) 2017-2018, jailgreen jukka@jahlgren.eu
 */

export default (function info ($) {
  // Shell for your plugin code
  const template =
    '<div class="alert alert-info alert-dismissible fade show" role="alert">' +
    '<button type="button" class="close" data-dismiss="alert" aria-label="Close">' +
    '<span aria-hidden="true">&times;</span></button></div>';

  $.fn.info = function info(content) {
    // Plugin code
    const $this = $(this);

    $this.prepend(template);

    const element = $this.find('.alert')[0];

    $(element).prepend(content);
    $(element).addClass('text-center');
    
    return this;
  };
}(jQuery));
