class App.Views.Footer extends App.Views.Base
  template: -> $('#footer').html();
  el: '#footer'
  events:
    'click .something': 'footer'

  initialize: ->
    @render();

  render: ->
    @$el.html @template

  footer: ->
    alert('Something in the Footer')