class App.Views.UserHeader extends App.Views.Base
  template: (model) ->
    return Mustache.render(JST["backbone/templates/partials/_user-header"](), model) #That was easy...
  events:
  	'mouseenter': 'toggle_lbox'
  	'mouseleave': 'toggle_lbox'


  initialize: (model) ->
    @model = model

  toggle_lbox: (e) ->
  	$(e.currentTarget).find('.dropdown-menu').toggle();
  onShow: (v,r,o) ->
    @unWrap(r)
    @topbar = $('.topbar')