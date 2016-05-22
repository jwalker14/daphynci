(function() {
  var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  App.Views.UserDropdown = (function(superClass) {
    extend(UserDropdown, superClass);

    function UserDropdown() {
      return UserDropdown.__super__.constructor.apply(this, arguments);
    }

    UserDropdown.prototype.template = function() {
      return JST["backbone/templates/partials/_user-dropdown"];
    };

    UserDropdown.prototype.events = {
      'mouseenter': 'toggle_lbox',
      'mouseleave': 'toggle_lbox'
    };

    UserDropdown.prototype.toggle_lbox = function(e) {
      return $(e.currentTarget).find('.dropdown-menu').toggle();
    };

    UserDropdown.prototype.onShow = function(v, r, o) {
      return this.unWrap(r);
    };

    return UserDropdown;

  })(App.Views.Base);

}).call(this);
