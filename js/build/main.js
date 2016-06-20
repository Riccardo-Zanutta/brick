var Application = (function ($) {
  'use strict';

  var _toggleMenu = function _toggleMenu() {
    $(document).on('click', '.menu-toggle', function() {
      $(this).toggleClass('is-open');
    });
  };

  var _animateBricks = function() {
    $('.hero').on('mousemove',function(e){
      var width= $(window).width(),
          height= $(window).height(),
          offsetX=0.5-e.pageX/width,
          offsetY=0.5-e.pageY/height,
          $parallaxItem=$('.hero-brick-pattern');

      $parallaxItem.each(function(i, el) {
        var offset= parseInt($(el).data('offset')),
        translate="translate3d("+Math.round(offsetX*offset)+"px,"+Math.round(offsetY*offset)+"px,0px)";
        $(el).css({
          '-webkit-transform':translate,
          'transform':translate,
          '-moz-transform':translate
        });
      });
    });
  };

  var init = function init() {
    document.documentElement.className = 'js';
    smoothScroll.init({
      updateURL: false,
      speed: 800,
      callback: function ( anchor, toggle ) {
        if(anchor === '#styleguide') {
          console.log('aprirò menu con setTimeout');
        }
      }
    });
    _toggleMenu();
    _animateBricks();
  };

  return {
    start: init,
  };

}(jQuery));

Application.start();
