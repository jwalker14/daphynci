class App.Views.SidebarTop extends App.Views.Base
  template: (model) ->
    return Mustache.render(JST["backbone/templates/partials/_sidebar_top"](), model)
  initialize: (model) ->
    @model = model
  onShow: (v,r,o) ->
    @unWrap(r)