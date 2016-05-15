class App.Views.SidebarFooter extends App.Views.Base
  template: ->
    return Mustache.render(JST["backbone/templates/partials/_sidebar-footer"]())
  events:
    'click .toggle_fullscreen':'toggle_fullscreen'
    'click #sign_out': 'sign_out'
  render: ->
    super
  onShow: (v,r,o) ->
    @unWrap(r)
  sign_out: ->
    alert("signing out");
  toggle_fullscreen: ->
    doc = document
    docEl = document.documentElement

    if !doc.fullscreenElement and !doc.msFullscreenElement and !doc.webkitIsFullScreen and !doc.mozFullScreenElement
      if docEl.requestFullscreen
        docEl.requestFullscreen()
      else if docEl.webkitRequestFullScreen
        docEl.webkitRequestFullscreen()
      else if docEl.webkitRequestFullScreen
        docEl.webkitRequestFullScreen()
      else if docEl.msRequestFullscreen
        docEl.msRequestFullscreen()
      else if docEl.mozRequestFullScreen
        docEl.mozRequestFullScreen()
    else
      if doc.exitFullscreen
        doc.exitFullscreen()
      else if doc.webkitExitFullscreen
        doc.webkitExitFullscreen()
      else if doc.webkitCancelFullScreen
        doc.webkitCancelFullScreen()
      else if doc.msExitFullscreen
        doc.msExitFullscreen()
      else if doc.mozCancelFullScreen
        doc.mozCancelFullScreen()
    return