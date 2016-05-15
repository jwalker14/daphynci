class App.Views.NotificationHeader extends App.Views.Base
  template: -> JST["backbone/templates/partials/_notification-header"]
  events:
  	'mouseenter': 'toggle_nbox'
  	'mouseleave': 'toggle_nbox'
  toggle_nbox: (e) ->
  	$(e.currentTarget).find('.dropdown-menu').toggle();

  onShow: (v,r,o) ->
    @unWrap(r)