(function() {
  var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  App.Views.UserHeader = (function(superClass) {
    extend(UserHeader, superClass);

    function UserHeader() {
      return UserHeader.__super__.constructor.apply(this, arguments);
    }

    UserHeader.prototype.template = function(model) {
      return Mustache.render(JST["backbone/templates/partials/_user-header"](), model);
    };

    UserHeader.prototype.events = {
      'mouseenter': 'toggle_lbox',
      'mouseleave': 'toggle_lbox'
    };

    UserHeader.prototype.initialize = function(model) {
      return this.model = model;
    };

    UserHeader.prototype.toggle_lbox = function(e) {
      return $(e.currentTarget).find('.dropdown-menu').toggle();
    };

    UserHeader.prototype.onShow = function(v, r, o) {
      this.unWrap(r);
      return this.topbar = $('.topbar');
    };

    return UserHeader;

  })(App.Views.Base);

}).call(this);
