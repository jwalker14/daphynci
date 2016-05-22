(function() {
  var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  App.Views.HeaderLeft = (function(superClass) {
    extend(HeaderLeft, superClass);

    function HeaderLeft() {
      return HeaderLeft.__super__.constructor.apply(this, arguments);
    }

    HeaderLeft.prototype.template = function() {
      return JST["backbone/templates/partials/_header-left"];
    };

    HeaderLeft.prototype.onShow = function(v, r, o) {
      return this.unWrap(r);
    };

    return HeaderLeft;

  })(App.Views.Base);

}).call(this);
