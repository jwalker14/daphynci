(function() {
  var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  App.Views.About = (function(superClass) {
    extend(About, superClass);

    function About() {
      return About.__super__.constructor.apply(this, arguments);
    }

    About.prototype.template = function() {
      return JST["backbone/templates/about"];
    };

    About.prototype.el = '#pagewrapper';

    About.prototype.initialize = function() {
      return this.render();
    };

    About.prototype.render = function() {
      return this.$el.html(this.template);
    };

    return About;

  })(App.Views.Base);

}).call(this);
