class App.Views.Widgets extends App.Views.Base
	template: -> JST["backbone/templates/partials/_widgets"]
  onShow: (v,r,o) ->
    @unWrap(r)