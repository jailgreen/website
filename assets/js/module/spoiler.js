/* 
 * @license    https://opensource.org/licenses/BSD-3-Clause New BSD License
 * @copyright  (c) 2017-2018, jailgreen jukka@jahlgren.eu
 */
import $ from 'jquery';

const spoiler = element => {
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
};

export default spoiler;