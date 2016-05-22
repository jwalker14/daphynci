(function() {
  $(window).load(function() {
    'use strict';
    setTimeout((function() {
      $('.loader-overlay').addClass('loaded');
      $('body > section').animate({
        opacity: 1
      }, 400);
    }), 500);
  });

}).call(this);
