class App.Views.MorphSearch extends App.Views.Base
  template: -> JST['backbone/templates/partials/_morphsearch']
  initialize: ->
    console.log "morphsearch"
  onShow: (v,r,o) ->
    @unWrap(r)