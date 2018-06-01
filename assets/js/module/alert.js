import $ from 'jquery';

/* 
 * @license    https://opensource.org/licenses/BSD-3-Clause New BSD License
 * @copyright  (c) 2017-2018, jailgreen jukka@jahlgren.eu
 */
/*
 * TODO:
 * 1. Make a customAlert function
 */
const Alert = message => {
  const div = '<div class="text-center alert alert-primary alert-dismissible fade show" ' +
    'id="alert" role="alert"></div>';
  const button = '<button type="button" class="close" data-dismiss="alert"' +
    'aria-label="Close">' +
    '<span aria-hidden="true">&times;</span></button>';

  $('body').prepend(div);
  $('#alert').text(message);
  $('#alert').prepend(button);
};

export default Alert;
