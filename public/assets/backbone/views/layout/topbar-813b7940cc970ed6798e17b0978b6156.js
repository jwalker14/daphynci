(function() {
  var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  App.Views.Topbar = (function(superClass) {
    extend(Topbar, superClass);

    function Topbar() {
      return Topbar.__super__.constructor.apply(this, arguments);
    }

    Topbar.prototype.template = function() {
      return JST["backbone/templates/partials/_topbar"];
    };

    Topbar.prototype.initialize = function(model) {
      return this.model = model;
    };

    Topbar.prototype.regions = {
      "headerLeft": "#header-left",
      "UserDropdown": "#language-header",
      "NotifHeader": "#notifications-header",
      "MessageHeader": "#messages-header",
      "UserHeader": "#user-header"
    };

    Topbar.prototype.onShow = function(v, r, o) {
      this.headerLeft.show(new App.Views.HeaderLeft());
      this.UserDropdown.show(new App.Views.UserDropdown());
      this.NotifHeader.show(new App.Views.NotificationHeader());
      this.MessageHeader.show(new App.Views.MessagesHeader());
      return this.UserHeader.show(new App.Views.UserHeader(this.model));
    };

    return Topbar;

  })(App.Views.Base);

}).call(this);
