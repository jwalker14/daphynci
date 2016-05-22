(function() {
  var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  App.Views.Contact = (function(superClass) {
    extend(Contact, superClass);

    function Contact() {
      return Contact.__super__.constructor.apply(this, arguments);
    }

    Contact.prototype.template = function() {
      return JST["backbone/templates/contact"];
    };

    Contact.prototype.el = '#pagewrapper';

    Contact.prototype.initialize = function() {
      return this.render();
    };

    Contact.prototype.render = function() {
      return this.$el.html(this.template);
    };

    return Contact;

  })(App.Views.Base);

}).call(this);
