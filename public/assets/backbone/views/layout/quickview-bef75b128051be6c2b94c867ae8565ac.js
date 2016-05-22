(function() {
  var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  App.Views.Quickview = (function(superClass) {
    extend(Quickview, superClass);

    function Quickview() {
      return Quickview.__super__.constructor.apply(this, arguments);
    }

    Quickview.prototype.template = function() {
      return JST["backbone/templates/partials/_quickview-sidebar"];
    };

    Quickview.prototype.initialize = function() {
      return console.log("quickview");
    };

    Quickview.prototype.onShow = function(v, r, o) {
      var othis;
      this.unWrap(r);
      this.quickviewSidebar();
      this.quickviewHeight;
      othis = this;
      return $(window).resize(function() {
        othis.quickviewHeight();
      });
    };

    return Quickview;

  })(App.Views.Base);

}).call(this);
