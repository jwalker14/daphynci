(function() {
  var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  App.Views.Home = (function(superClass) {
    extend(Home, superClass);

    function Home() {
      return Home.__super__.constructor.apply(this, arguments);
    }

    Home.prototype.template = function() {
      return JST['backbone/templates/partials/_login'];
    };

    Home.prototype.el = 'body';

    Home.prototype.className = 'account2';

    Home.prototype.events = {
      'click .somethingspecial': 'doesSomething'
    };

    Home.prototype.initialize = function() {
      console.log(this.template());
      this.render();
      this.$el.addClass(this.className);
      $('form').prepend("<input type='hidden' name='authenticity_token' value='" + $('meta[name=csrf-token]').attr('content') + "'>");
      $.backstretch(['/assets/gallery/login-26ffa86860093fbf13ba0934975043e5.jpg'], {
        fade: 600,
        duration: 4000
      });
      return $(window).resize(function() {
        this.copyrightPos();
      });
    };

    Home.prototype.render = function() {
      return this.$el.html(this.template());
    };

    Home.prototype.doesSomething = function() {
      return alert('Im doing something');
    };

    return Home;

  })(App.Views.Base);

}).call(this);
