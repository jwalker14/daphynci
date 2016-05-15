class App.Views.UserDropdown extends App.Views.Base
  template: -> JST["backbone/templates/partials/_user-dropdown"]
  events:
  	'mouseenter': 'toggle_lbox'
  	'mouseleave': 'toggle_lbox'
  toggle_lbox: (e) ->
  	$(e.currentTarget).find('.dropdown-menu').toggle();

  onShow: (v,r,o) ->
    @unWrap(r)