(function() {
  var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  App.Models.User = (function(superClass) {
    extend(User, superClass);

    function User() {
      return User.__super__.constructor.apply(this, arguments);
    }

    User.prototype.paramRoot = 'users';

    User.prototype.urlRoot = '/users';

    return User;

  })(Backbone.Model);

  App.Collections.UsersCollection = (function(superClass) {
    extend(UsersCollection, superClass);

    function UsersCollection() {
      return UsersCollection.__super__.constructor.apply(this, arguments);
    }

    UsersCollection.prototype.model = App.Models.User;

    UsersCollection.prototype.url = '/users';

    return UsersCollection;

  })(Backbone.Collection);

}).call(this);
