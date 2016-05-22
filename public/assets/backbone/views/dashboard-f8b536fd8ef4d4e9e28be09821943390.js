(function() {
  var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  App.Views.Dashboard = (function(superClass) {
    extend(Dashboard, superClass);

    function Dashboard() {
      return Dashboard.__super__.constructor.apply(this, arguments);
    }

    Dashboard.prototype.template = function() {
      return Mustache.render(JST['backbone/templates/layout']());
    };

    Dashboard.prototype.el = 'body';

    Dashboard.prototype.className = 'fixed-topbar fixed-sidebar color-default dashboard theme-sdtd bg-light-dark';

    Dashboard.prototype.model = new App.Models.User({
      id: $('meta[name=current_user]').attr("content")
    });

    Dashboard.prototype.regions = {
      "sidebar": ".sidebar",
      "topbar": ".topbar",
      "quickview": "#quickview",
      "morphsearch": "#morphsearch",
      "pageContent": ".page-content"
    };

    Dashboard.prototype.events = {
      'click .lockout': 'lockout'
    };

    Dashboard.prototype.initialize = function() {
      var othis;
      this.render();
      othis = this;
      return this.model.fetch({
        success: function() {
          console.log("Success");
          window.sidebar = new App.Views.Sidebar(othis.model);
          othis.topbar.show(new App.Views.Topbar(othis.model));
          othis.quickview.show(new App.Views.Quickview());
          return othis.morphsearch.show(new App.Views.MorphSearch());
        },
        error: function() {
          return console.log("Error");
        }
      });
    };

    Dashboard.prototype.render = function() {
      this.$el.html(this.template());
      this.$el.addClass(this.className);
      return window.loaderView = new App.Views.Loader();
    };

    Dashboard.prototype.onShow = function(v, r, o) {
      return this.hideLoader();
    };

    Dashboard.prototype.onSwap = function() {
      return this.hideLoader();
    };

    Dashboard.prototype.doesSomething = function() {
      return alert('Im doing something');
    };

    Dashboard.prototype.lockout = function() {
      return App.router.navigate('lock', {
        trigger: true
      });
    };

    return Dashboard;

  })(App.Views.Base);

}).call(this);
