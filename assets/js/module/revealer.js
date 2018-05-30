import $ from 'jquery';

/* 
 * @license    https://opensource.org/licenses/BSD-3-Clause New BSD License
 * @copyright  (c) 2017-2018, jailgreen jukka@jahlgren.eu
 */

const Revealer = (($) => {
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */
  const NAME    = 'revealer';
  const VERSION = '1.0.0';
  
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */
  class Alert {
    constructor(element) {
      this._element = element;
    }
    
    // Getters

    static get VERSION() {
      return VERSION;
    }

    // Public
    reveal(element) {
      $(element).hide();
  $('<input type="button" class="btn btn-primary btn-sm revealer" ' +
          'value="Tell Me!"/>').
    insertBefore(element);
  /* eslint-disable func-names */
  $('.revealer').click(function() {
    /* eslint-disable no-invalid-this */
    $(this).hide();
    $(this).next().
      fadeIn();
  });
    }
  }
  
  return Revealer;
})($);

export default Revealer;
