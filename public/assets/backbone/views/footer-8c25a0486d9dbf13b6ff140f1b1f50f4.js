(function() {
  var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  App.Views.Footer = (function(superClass) {
    extend(Footer, superClass);

    function Footer() {
      return Footer.__super__.constructor.apply(this, arguments);
    }

    Footer.prototype.template = function() {
      return $('#footer').html();
    };

    Footer.prototype.el = '#footer';

    Footer.prototype.events = {
      'click .something': 'footer'
    };

    Footer.prototype.initialize = function() {
      return this.render();
    };

    Footer.prototype.render = function() {
      return this.$el.html(this.template);
    };

    Footer.prototype.footer = function() {
      return alert('Something in the Footer');
    };

    return Footer;

  })(App.Views.Base);

}).call(this);
