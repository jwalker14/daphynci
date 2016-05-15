class App.Views.HeaderLeft extends App.Views.Base
  template: -> JST["backbone/templates/partials/_header-left"]

  onShow: (v,r,o) ->
    @unWrap(r)