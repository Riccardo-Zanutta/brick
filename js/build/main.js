const Application = (function ($) {
  'use strict';

  const _toggleMenu = function _toggleMenu() {
    $(document).on('click', '.menu-toggle', function() {
      $(this).toggleClass('is-open');
    });
  };

  const init = function init() {
    document.documentElement.className = 'js';

    _toggleMenu();
  };

  return {
    start: init,
  };

}(jQuery));

Application.start();
