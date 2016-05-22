(function() {
  var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  App.Views.MessagesHeader = (function(superClass) {
    extend(MessagesHeader, superClass);

    function MessagesHeader() {
      return MessagesHeader.__super__.constructor.apply(this, arguments);
    }

    MessagesHeader.prototype.template = function() {
      return JST['backbone/templates/partials/_messages-header'];
    };

    MessagesHeader.prototype.events = {
      'mouseenter': 'toggle_mbox',
      'mouseleave': 'toggle_mbox'
    };

    MessagesHeader.prototype.initialize = function() {
      return this.render();
    };

    MessagesHeader.prototype.render = function() {
      console.log("message header");
      return this.$el.html(this.template());
    };

    MessagesHeader.prototype.toggle_mbox = function(e) {
      return $(e.currentTarget).find('.dropdown-menu').toggle();
    };

    MessagesHeader.prototype.onShow = function(v, r, o) {
      return this.unWrap(r);
    };

    return MessagesHeader;

  })(App.Views.Base);

}).call(this);
