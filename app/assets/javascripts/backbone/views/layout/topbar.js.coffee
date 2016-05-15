class App.Views.Topbar extends App.Views.Base
  template: -> JST["backbone/templates/partials/_topbar"]
  initialize: (model) ->
    @model = model
  regions:
    "headerLeft": "#header-left"
    "UserDropdown": "#language-header"
    "NotifHeader": "#notifications-header"
    "MessageHeader": "#messages-header"
    "UserHeader": "#user-header"

  onShow: (v,r,o)->
    @.headerLeft.show(new App.Views.HeaderLeft())
    @.UserDropdown.show(new App.Views.UserDropdown())
    @.NotifHeader.show(new App.Views.NotificationHeader())
    @.MessageHeader.show(new App.Views.MessagesHeader())
    @.UserHeader.show(new App.Views.UserHeader(@model))
