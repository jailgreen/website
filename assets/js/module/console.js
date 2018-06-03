import $ from 'jquery';

/* 
 * @license    https://opensource.org/licenses/BSD-3-Clause New BSD License
 * @copyright  (c) 2017-2018, jailgreen jukka@jahlgren.eu
 */

const Console = ( ($) => {

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  const div = '<div class="text-center alert alert-info alert-dismissible ' +
    'fade show" id="info" role="alert"></div>';
  const button = '<button type="button" class="close" data-dismiss="alert"' +
    'aria-label="Close">' +
    '<span aria-hidden="true">&times;</span></button>';

  /**
   * --------------------------------------------------------------------------
   * Public Console Api
   * --------------------------------------------------------------------------
   */
  
  const Console = {
    log(message) {
      $('body').prepend(div);
      $('#info').text(message);
      $('#info').prepend(button);
    }
  };

  return Console;
})($);

export default Console;
