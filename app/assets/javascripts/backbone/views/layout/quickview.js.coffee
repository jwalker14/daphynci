class App.Views.Quickview extends App.Views.Base
  template: -> JST["backbone/templates/partials/_quickview-sidebar"]
  initialize: ->
    console.log "quickview"
#    @render()

#  render: ->
#    console.log "quickview"
#    @$el.html @template()
#    @quickviewSidebar()
#    @quickviewHeight
#    othis = this
#    $(window).resize ->
##      noteTextarea()
#      othis.quickviewHeight()
#      return

  onShow: (v,r,o) ->
    @unWrap(r)
    @quickviewSidebar()
    @quickviewHeight
    othis = this
    $(window).resize ->
#      noteTextarea()
      othis.quickviewHeight()
      return