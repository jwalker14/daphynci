(function() {
  var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  App.Views.MorphSearch = (function(superClass) {
    extend(MorphSearch, superClass);

    function MorphSearch() {
      return MorphSearch.__super__.constructor.apply(this, arguments);
    }

    MorphSearch.prototype.template = function() {
      return JST['backbone/templates/partials/_morphsearch'];
    };

    MorphSearch.prototype.initialize = function() {
      return console.log("morphsearch");
    };

    MorphSearch.prototype.onShow = function(v, r, o) {
      return this.unWrap(r);
    };

    return MorphSearch;

  })(App.Views.Base);

}).call(this);
