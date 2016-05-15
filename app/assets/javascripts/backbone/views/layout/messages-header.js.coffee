class App.Views.MessagesHeader extends App.Views.Base
  template: -> JST['backbone/templates/partials/_messages-header']
  events:
  	'mouseenter': 'toggle_mbox'
  	'mouseleave': 'toggle_mbox'
  initialize: ->
    @render()
  render: ->
    console.log "message header"
    @$el.html @template()
  toggle_mbox: (e) ->
  	$(e.currentTarget).find('.dropdown-menu').toggle();

  onShow: (v,r,o) ->
    @unWrap(r)