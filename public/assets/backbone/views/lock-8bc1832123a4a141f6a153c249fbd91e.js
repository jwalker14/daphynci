(function() {
  var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  App.Views.Lock = (function(superClass) {
    extend(Lock, superClass);

    function Lock() {
      return Lock.__super__.constructor.apply(this, arguments);
    }

    Lock.prototype.template = function(model) {
      return Mustache.render(JST['backbone/templates/lockscreen'](), model);
    };

    Lock.prototype.el = 'body';

    Lock.prototype.className = 'account separate-inputs';

    Lock.prototype.events = {
      'click .somethingspecial': 'doesSomething'
    };

    Lock.prototype.initialize = function(model) {
      var circle;
      this.model = model;
      this.render();
      $.backstretch(['/assets/gallery/login4-d424bb6f8ff2960018a0d22024c88c2f.jpg', '/assets/gallery/login3-2c04c7fb3b1235c22ad4c75b1b570815.jpg', '/assets/gallery/login2-6c9f0fd1ab2502b2c2191394491732c2.jpg', '/assets/gallery/login-26ffa86860093fbf13ba0934975043e5.jpg'], {
        fade: 600,
        duration: 4000
      });

      /* Creation of the Circle Progress */
      return circle = new ProgressBar.Circle('#loader', {
        color: '#aaa',
        strokeWidth: 3,
        trailWidth: 3,
        trailColor: 'rgba(255,255,255,0.1)',
        easing: 'easeInOut',
        duration: 2000,
        from: {
          color: '#319DB5',
          width: 3
        },
        to: {
          color: '#319DB5',
          width: 3
        },
        step: function(state, circle) {
          circle.path.setAttribute('stroke', state.color);
          circle.path.setAttribute('stroke-width', state.width);
        }
      });
    };

    Lock.prototype.render = function() {
      this.$el.html(this.template(this.model.toJSON()));
      this.$el.addClass(this.className);
      window.loaderView = new App.Views.Loader();
      return this.hideLoader();
    };

    Lock.prototype.doesSomething = function() {
      return alert('Im doing something');
    };

    Lock.prototype.onShow = function(v, r, o) {
      return this.unWrap();
    };

    return Lock;

  })(App.Views.Base);

}).call(this);
