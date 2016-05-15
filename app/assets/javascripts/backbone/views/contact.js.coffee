class App.Views.Contact extends App.Views.Base
  template: -> JST["backbone/templates/contact"]
  el: '#pagewrapper'

  initialize: ->
    @render();

  render: ->
    @$el.html @template