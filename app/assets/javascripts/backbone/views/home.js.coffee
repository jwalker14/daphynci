class App.Views.Home extends Backbone.View
  template: -> JST['backbone/templates/partials/_login'];
  el: 'body'
  events:
    'click .somethingspecial': 'doesSomething'

  initialize: ->
    console.log @template()
    @render();

  render: ->
    @$el.html @template()

  doesSomething: ->
    alert('Im doing something')

