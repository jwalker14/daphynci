class App.Views.Sidebar extends App.Views.Base
  template: (model)->
    return Mustache.render(JST["backbone/templates/partials/_sidebar"](), model)
  el: '.sidebar'
  events:
    'click .toggle_fullscreen':'toggle_fullscreen'
    'click #sign_out': 'sign_out'
  initialize: (model) ->
    @rm = new Marionette.RegionManager({
      regions: {
        "sidebarTop": "#sidebar-top"
        "navSideBar": ".nav-sidebar"
        "sideBarWidgets": ".sidebar-widgets"
        "sideBarFooter": ".sidebar-footer"
        'click .toggle_fullscreen': 'toggle_fullscreen'
        'click #sign_out': 'sign_out'
      }
    })
    @model = model
    @render(@model)
  render: (@model) ->
    $(@el).html(@template(@model))
    @rm.get('sidebarTop').show(new App.Views.SidebarTop(@model))
    @rm.get('navSideBar').show(new App.Views.Nav())
    @rm.get('sideBarWidgets').show(new App.Views.Widgets())
    @rm.get('sideBarFooter').show(new App.Views.SidebarFooter())
  sign_out: ->
    $.ajax({
      url: '/users/sign_out',
      type: 'DELETE',
      success: (resp)->
        App.router.navigate('', { trigger : true });
    });
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
