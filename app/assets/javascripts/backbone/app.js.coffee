#= require_self
#= require_tree ./templates
#= require_tree ./models
#= require views/base.js.coffee.erb
#= require_tree ./views
#= require_tree ./routers
class window.Application extends Marionette.Application
  Models: {}
  Collections: {}
  Routers: {}
  Views: {}

  redirectHashBang: ->
    window.location = window.location.hash.substring(2)

  initialize: (options) ->
    console.log('My container:', options.container);
    @RM = new Marionette.RegionManager()
    @regions = @RM.addRegions({
      body:"body"
    })


window.App = new Application({container: 'body'});

App.on 'start', (options) ->
  if Backbone.history
    @router = new @Routers.Main()
    Backbone.history.start pushState: true
  return

$ ->

  for f in $("form")
    if f.method == 'post' or f.method == 'delete'
      $(f).prepend("<input type='hidden' name='authenticity_token' value='" + $('meta[name=csrf-token]').attr('content') + "'>")
  if window.location.hash.indexOf('!') > -1
    return App.redirectHashBang()





