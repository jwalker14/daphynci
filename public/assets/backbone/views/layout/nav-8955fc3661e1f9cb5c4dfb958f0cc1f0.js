(function() {
  var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  App.Views.Nav = (function(superClass) {
    extend(Nav, superClass);

    function Nav() {
      return Nav.__super__.constructor.apply(this, arguments);
    }

    Nav.prototype.template = function() {
      return JST["backbone/templates/partials/_nav"];
    };

    Nav.prototype.hoverTimeout = null;

    Nav.prototype.events = {
      'click .nav-parent': 'toggleMenu',
      'mouseenter li': 'hoverOn_li',
      'mouseleave li': 'hoverOff_li',
      'mouseenter: li .children': 'childHoverOn',
      'mouseleave: li .children': 'childHoverOff'
    };

    Nav.prototype.initialize = function() {
      return console.log("Rendering Nav");
    };

    Nav.prototype.onShow = function(v, r, o) {
      return this.unWrap(r);
    };

    Nav.prototype.hoverOn_li = function(ev) {
      clearTimeout(this.hoverTimeout);
      $(ev.currentTarget).siblings().removeClass('nav-hover');
      return $(ev.currentTarget).addClass("nav-hover");
    };

    Nav.prototype.hoverOff_li = function(ev) {
      var $self;
      $self = $(ev.currentTarget);
      return this.hoverTimeout = setTimeout((function() {
        return $self.removeClass('nav-hover');
      }), 200);
    };

    Nav.prototype.childHoverOn = function(ev) {
      clearTimeout(this.hoverTimeout);
      $(ev.currentTarget).closest('.nav-parent').siblings().removeClass('nav-hover');
      return $(ev.currentTarget).closest('.nav-parent').addClass('nav-hover');
    };

    Nav.prototype.childHoverOff = function(ev) {
      var $self;
      $self = $(ev.currentTarget);
      return this.hoverTimeout = setTimeout((function() {
        return $(ev.currentTarget).closest('.nav-parent').removeClass('nav-hover');
      }), 200);
    };

    Nav.prototype.toggleMenu = function(e) {
      $('li.nav-parent').removeClass("nav-active active");
      return $(e.currentTarget).addClass("nav-active active");
    };

    return Nav;

  })(App.Views.Base);

}).call(this);
