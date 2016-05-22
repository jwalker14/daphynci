(function() {
  var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  App.Views.Widgets = (function(superClass) {
    extend(Widgets, superClass);

    function Widgets() {
      return Widgets.__super__.constructor.apply(this, arguments);
    }

    Widgets.prototype.template = function() {
      return JST["backbone/templates/partials/_widgets"]({
        onShow: function(v, r, o) {
          return this.unWrap(r);
        }
      });
    };

    return Widgets;

  })(App.Views.Base);

}).call(this);
