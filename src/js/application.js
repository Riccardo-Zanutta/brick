'use strict';

var Application = function () {
  'use strict';

  var bootstrap = function bootstrap() {
    document.documentElement.className = 'js';
  };

  return {
    start: bootstrap
  };
}();

Application.start();
//# sourceMappingURL=application.js.map
