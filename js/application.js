'use strict';

var Application = function ($) {
  'use strict';

  var _toggleMenu = function _toggleMenu() {
    $(document).on('click', '.menu-toggle', function () {
      $(this).toggleClass('is-open');
    });
  };

  var init = function init() {
    document.documentElement.className = 'js';

    _toggleMenu();
  };

  return {
    start: init
  };
}(jQuery);

Application.start();
//# sourceMappingURL=application.js.map
