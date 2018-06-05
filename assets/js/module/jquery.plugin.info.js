/* eslint-disable no-unused-vars */
import $ from 'jquery';
/* eslint-enable no-unused-vars */

const Info = ( ($) => {
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */
  const NAME = 'info';
  const template =
    '<div class="alert alert-info alert-dismissible fade show" role="alert">' +
    '<button type="button" class="close" data-dismiss="alert" aria-label="Close">' +
    '<span aria-hidden="true">&times;</span></button></div>';

  /**
   * ------------------------------------------------------------------------
   * Private Info Helpers
   * ------------------------------------------------------------------------
   */
  const Info = {
    jQueryInterface(content) {
      // Plugin code
      const $this = $(this);

      $this.prepend(template);

      const element = $this.find('.alert')[0];

      $(element).prepend(content);
      $(element).addClass('text-center');
      
      return this;
    }
  };
  
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME] = Info.jQueryInterface;
 
})(jQuery);

export default Info;