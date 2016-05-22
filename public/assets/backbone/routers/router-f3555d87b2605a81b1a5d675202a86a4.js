(function() {
  var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  App.Routers.Main = (function(superClass) {
    extend(Main, superClass);

    function Main() {
      return Main.__super__.constructor.apply(this, arguments);
    }

    Main.prototype.routes = {
      '': 'home',
      'lock': 'lock',
      'dashboard': 'dashboard',
      'profile': 'profile',
      'users/sign_up': 'signup'
    };

    Main.prototype.regions = {
      "body": "body"
    };

    Main.prototype.initialize = function() {
      console.log("routing");
      this.usermodel = new App.Models.User({
        id: $('meta[name=current_user]').attr("content")
      });
      return window.dashboardView = new App.Views.Dashboard();
    };

    Main.prototype.home = function() {
      console.log("Rendering Home");
      return window.homeview = new App.Views.Home();
    };

    Main.prototype.signup = function() {
      console.log("Rendering Sign Up");
      return window.homeview = new App.Views.SignUp();
    };

    Main.prototype.dashboard = function() {
      console.log("Rendering Dashboard");
      return window.dashboardView = new App.Views.Dashboard();
    };

    Main.prototype.profile = function() {
      var othis;
      console.log("Rendering Profile");
      othis = this;
      return this.usermodel.fetch({
        success: function() {
          return dashboardView.pageContent.show(new App.Views.Profile(othis.usermodel));
        }
      });
    };

    Main.prototype.lock = function() {
      var othis;
      console.log("Lock Out");
      othis = this;
      return this.usermodel.fetch({
        success: function() {
          return window.lock = new App.Views.Lock(othis.usermodel);
        }
      });
    };

    return Main;

  })(Marionette.AppRouter);

}).call(this);
