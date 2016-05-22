(function() {
  var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  App.Views.SidebarFooter = (function(superClass) {
    extend(SidebarFooter, superClass);

    function SidebarFooter() {
      return SidebarFooter.__super__.constructor.apply(this, arguments);
    }

    SidebarFooter.prototype.template = function() {
      return Mustache.render(JST["backbone/templates/partials/_sidebar-footer"]());
    };

    SidebarFooter.prototype.events = {
      'click .toggle_fullscreen': 'toggle_fullscreen',
      'click #sign_out': 'sign_out'
    };

    SidebarFooter.prototype.render = function() {
      return SidebarFooter.__super__.render.apply(this, arguments);
    };

    SidebarFooter.prototype.onShow = function(v, r, o) {
      return this.unWrap(r);
    };

    SidebarFooter.prototype.sign_out = function() {
      return alert("signing out");
    };

    SidebarFooter.prototype.toggle_fullscreen = function() {
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

    return SidebarFooter;

  })(App.Views.Base);

}).call(this);
