(function() {
  var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  App.Views.Header = (function(superClass) {
    extend(Header, superClass);

    function Header() {
      return Header.__super__.constructor.apply(this, arguments);
    }

    Header.prototype.template = function() {
      return $('header').html();
    };

    Header.prototype.el = 'header';

    Header.prototype.events = {
      'click .logo': 'logo'
    };

    Header.prototype.initialize = function() {
      return this.render();
    };

    Header.prototype.render = function() {
      return this.$el.html(this.template);
    };

    Header.prototype.logo = function() {
      return alert('Logo');
    };

    return Header;

  })(App.Views.Base);

}).call(this);
