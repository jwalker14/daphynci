(function() {
  var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  App.Views.SidebarTop = (function(superClass) {
    extend(SidebarTop, superClass);

    function SidebarTop() {
      return SidebarTop.__super__.constructor.apply(this, arguments);
    }

    SidebarTop.prototype.template = function(model) {
      return Mustache.render(JST["backbone/templates/partials/_sidebar_top"](), model);
    };

    SidebarTop.prototype.initialize = function(model) {
      return this.model = model;
    };

    SidebarTop.prototype.onShow = function(v, r, o) {
      return this.unWrap(r);
    };

    return SidebarTop;

  })(App.Views.Base);

}).call(this);
