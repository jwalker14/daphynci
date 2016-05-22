(function() {
  var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  App.Views.NotificationHeader = (function(superClass) {
    extend(NotificationHeader, superClass);

    function NotificationHeader() {
      return NotificationHeader.__super__.constructor.apply(this, arguments);
    }

    NotificationHeader.prototype.template = function() {
      return JST["backbone/templates/partials/_notification-header"];
    };

    NotificationHeader.prototype.events = {
      'mouseenter': 'toggle_nbox',
      'mouseleave': 'toggle_nbox'
    };

    NotificationHeader.prototype.toggle_nbox = function(e) {
      return $(e.currentTarget).find('.dropdown-menu').toggle();
    };

    NotificationHeader.prototype.onShow = function(v, r, o) {
      return this.unWrap(r);
    };

    return NotificationHeader;

  })(App.Views.Base);

}).call(this);
