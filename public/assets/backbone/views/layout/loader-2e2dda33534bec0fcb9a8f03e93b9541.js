(function() {
  var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  App.Views.Loader = (function(superClass) {
    extend(Loader, superClass);

    function Loader() {
      return Loader.__super__.constructor.apply(this, arguments);
    }

    Loader.prototype.template = function() {
      return JST["backbone/templates/partials/_loader"];
    };

    Loader.prototype.el = '.loader-overlay';

    Loader.prototype.initialize = function() {
      Loader.__super__.initialize.apply(this, arguments);
      return this.render();
    };

    Loader.prototype.render = function() {
      console.log('loader');
      return this.$el.html(this.template());
    };

    return Loader;

  })(App.Views.Base);

}).call(this);
