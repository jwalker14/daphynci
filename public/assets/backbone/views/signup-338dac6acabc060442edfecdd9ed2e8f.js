(function() {
  var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  App.Views.SignUp = (function(superClass) {
    extend(SignUp, superClass);

    function SignUp() {
      return SignUp.__super__.constructor.apply(this, arguments);
    }

    SignUp.prototype.template = function() {
      return JST['backbone/templates/partials/_signup'];
    };

    SignUp.prototype.el = 'body';

    SignUp.prototype.className = 'account2 signup';

    SignUp.prototype.events = {
      'click .somethingspecial': 'doesSomething',
      'click #submit-form': 'doSignUp',
      'click #facebook': 'sign_in_with_facebook'
    };

    SignUp.prototype.initialize = function() {
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

    SignUp.prototype.render = function() {
      return this.$el.html(this.template());
    };

    SignUp.prototype.doesSomething = function() {
      return alert('Im doing something');
    };

    SignUp.prototype.doSignUp = function(e) {
      return alert("BOOM");
    };

    return SignUp;

  })(App.Views.Base);

}).call(this);
