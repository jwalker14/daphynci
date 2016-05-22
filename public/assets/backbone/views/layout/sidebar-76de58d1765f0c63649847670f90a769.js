(function() {
  var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  App.Views.Sidebar = (function(superClass) {
    extend(Sidebar, superClass);

    function Sidebar() {
      return Sidebar.__super__.constructor.apply(this, arguments);
    }

    Sidebar.prototype.template = function(model) {
      return Mustache.render(JST["backbone/templates/partials/_sidebar"](), model);
    };

    Sidebar.prototype.el = '.sidebar';

    Sidebar.prototype.events = {
      'click .toggle_fullscreen': 'toggle_fullscreen',
      'click #sign_out': 'sign_out'
    };

    Sidebar.prototype.initialize = function(model) {
      this.rm = new Marionette.RegionManager({
        regions: {
          "sidebarTop": "#sidebar-top",
          "navSideBar": ".nav-sidebar",
          "sideBarWidgets": ".sidebar-widgets",
          "sideBarFooter": ".sidebar-footer",
          'click .toggle_fullscreen': 'toggle_fullscreen',
          'click #sign_out': 'sign_out'
        }
      });
      this.model = model;
      return this.render(this.model);
    };

    Sidebar.prototype.render = function(model1) {
      this.model = model1;
      $(this.el).html(this.template(this.model));
      this.rm.get('sidebarTop').show(new App.Views.SidebarTop(this.model));
      this.rm.get('navSideBar').show(new App.Views.Nav());
      this.rm.get('sideBarWidgets').show(new App.Views.Widgets());
      return this.rm.get('sideBarFooter').show(new App.Views.SidebarFooter());
    };

    Sidebar.prototype.sign_out = function() {
      return $.ajax({
        url: '/users/sign_out',
        type: 'DELETE',
        success: function(resp) {
          return App.router.navigate('', {
            trigger: true
          });
        }
      });
    };

    Sidebar.prototype.toggle_fullscreen = function() {
      var doc, docEl;
      doc = document;
      docEl = document.documentElement;
      if (!doc.fullscreenElement && !doc.msFullscreenElement && !doc.webkitIsFullScreen && !doc.mozFullScreenElement) {
        if (docEl.requestFullscreen) {
          docEl.requestFullscreen();
        } else if (docEl.webkitRequestFullScreen) {
          docEl.webkitRequestFullscreen();
        } else if (docEl.webkitRequestFullScreen) {
          docEl.webkitRequestFullScreen();
        } else if (docEl.msRequestFullscreen) {
          docEl.msRequestFullscreen();
        } else if (docEl.mozRequestFullScreen) {
          docEl.mozRequestFullScreen();
        }
      } else {
        if (doc.exitFullscreen) {
          doc.exitFullscreen();
        } else if (doc.webkitExitFullscreen) {
          doc.webkitExitFullscreen();
        } else if (doc.webkitCancelFullScreen) {
          doc.webkitCancelFullScreen();
        } else if (doc.msExitFullscreen) {
          doc.msExitFullscreen();
        } else if (doc.mozCancelFullScreen) {
          doc.mozCancelFullScreen();
        }
      }
    };

    return Sidebar;

  })(App.Views.Base);

}).call(this);
