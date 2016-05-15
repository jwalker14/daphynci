class App.Views.Header extends App.Views.Base
  template: -> $('header').html();
  el: 'header'
  events:
    'click .logo': 'logo'

  initialize: ->
    @render();

  render: ->
    @$el.html @template
  logo: ->
    alert('Logo')