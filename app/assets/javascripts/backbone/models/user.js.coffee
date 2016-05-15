class App.Models.User extends Backbone.Model
  paramRoot: 'users'
  urlRoot: '/users'
  
class App.Collections.UsersCollection extends Backbone.Collection
  model: App.Models.User
  url: '/users'
