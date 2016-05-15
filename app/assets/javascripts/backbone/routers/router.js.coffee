class App.Routers.Main extends Marionette.AppRouter
    routes:
      '': 'home',
      'lock': 'lock',
      'dashboard': 'dashboard'
      'profile': 'profile'
      'users/sign_up': 'signup'
    regions:
      "body": "body"
    initialize: ->
      console.log "routing"
      @usermodel = new App.Models.User({id:$('meta[name=current_user]').attr("content")})
      window.dashboardView = new App.Views.Dashboard()
    home: ->
      console.log "Rendering Home"
      window.homeview = new App.Views.Home()
    signup: ->
      console.log "Rendering Sign Up"
      window.homeview = new App.Views.SignUp()
    dashboard: ->
      console.log "Rendering Dashboard"
      window.dashboardView = new App.Views.Dashboard()
    profile: ->
      console.log "Rendering Profile"
      othis = this
      @usermodel.fetch
        success: () ->
          dashboardView.pageContent.show(new App.Views.Profile(othis.usermodel))
    lock: ->
      console.log "Lock Out"
      othis = this
      @usermodel.fetch
        success: () ->
          window.lock = new App.Views.Lock(othis.usermodel)