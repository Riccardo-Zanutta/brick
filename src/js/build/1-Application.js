const Application = (function () {
  'use strict';

  const init = function() {
    document.documentElement.className = 'js';
  };

  return {
    start: init,
  };
}());

Application.start();
