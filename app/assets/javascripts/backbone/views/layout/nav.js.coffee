class App.Views.Nav extends App.Views.Base
  template: -> JST["backbone/templates/partials/_nav"]
  hoverTimeout: null
  events:
    'click .nav-parent': 'toggleMenu'
    'mouseenter li': 'hoverOn_li'
    'mouseleave li': 'hoverOff_li'
    'mouseenter: li .children': 'childHoverOn'
    'mouseleave: li .children': 'childHoverOff'
  initialize: ->
    console.log "Rendering Nav"

  onShow: (v,r,o) ->
    @unWrap(r)

  hoverOn_li: (ev)->
    clearTimeout @hoverTimeout
    $(ev.currentTarget).siblings().removeClass 'nav-hover'
    $(ev.currentTarget).addClass "nav-hover"

  hoverOff_li: (ev) ->
    $self = $(ev.currentTarget)
    @hoverTimeout = setTimeout((->
      $self.removeClass 'nav-hover'
    ), 200)

  childHoverOn: (ev)->
    clearTimeout @hoverTimeout
    $(ev.currentTarget).closest('.nav-parent').siblings().removeClass 'nav-hover'
    $(ev.currentTarget).closest('.nav-parent').addClass 'nav-hover'

  childHoverOff: (ev)->
    $self = $(ev.currentTarget)
    @hoverTimeout = setTimeout((->
      $(ev.currentTarget).closest('.nav-parent').removeClass 'nav-hover'
    ), 200)
  toggleMenu: (e) ->
    $('li.nav-parent').removeClass("nav-active active")
    $(e.currentTarget).addClass("nav-active active")

