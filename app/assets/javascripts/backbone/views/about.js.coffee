class App.Views.About extends App.Views.Base
    template: -> JST["backbone/templates/about"]
    el: '#pagewrapper'
    initialize: ->
      @render()

    render: ->
      @$el.html @template
