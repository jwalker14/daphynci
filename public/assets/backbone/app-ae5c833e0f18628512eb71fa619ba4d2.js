(function() {
  var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  window.Application = (function(superClass) {
    extend(Application, superClass);

    function Application() {
      return Application.__super__.constructor.apply(this, arguments);
    }

    Application.prototype.Models = {};

    Application.prototype.Collections = {};

    Application.prototype.Routers = {};

    Application.prototype.Views = {};

    Application.prototype.redirectHashBang = function() {
      return window.location = window.location.hash.substring(2);
    };

    Application.prototype.initialize = function(options) {
      console.log('My container:', options.container);
      this.RM = new Marionette.RegionManager();
      return this.regions = this.RM.addRegions({
        body: "body"
      });
    };

    return Application;

  })(Marionette.Application);

  window.App = new Application({
    container: 'body'
  });

  App.on('start', function(options) {
    if (Backbone.history) {
      this.router = new this.Routers.Main();
      Backbone.history.start({
        pushState: true
      });
    }
  });

  $(function() {
    var f, i, len, ref;
    ref = $("form");
    for (i = 0, len = ref.length; i < len; i++) {
      f = ref[i];
      if (f.method === 'post' || f.method === 'delete') {
        $(f).prepend("<input type='hidden' name='authenticity_token' value='" + $('meta[name=csrf-token]').attr('content') + "'>");
      }
    }
    if (window.location.hash.indexOf('!') > -1) {
      return App.redirectHashBang();
    }
  });

}).call(this);
(function() { this.JST || (this.JST = {}); this.JST["backbone/templates/about"] = function(obj){var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('About Page Template JST\n');}return __p.join('');};
}).call(this);
(function() { this.JST || (this.JST = {}); this.JST["backbone/templates/blank_page"] = function(obj){var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('<div class="header">\n  <h2><strong>Blank</strong> Page</h2>\n  <div class="breadcrumb-wrapper">\n    <ol class="breadcrumb">\n      <li><a href="dashboard.html">Make</a>\n      </li>\n      <li><a href="#">Pages</a>\n      </li>\n      <li class="active">Dashboard</li>\n    </ol>\n  </div>\n</div>\n<div class="row">\n  <div class="col-lg-12" style="height:720px">\n    <!-- HERE COMES YOUR CONTENT -->\n  </div>\n</div>\n<div class="footer">\n  <div class="copyright">\n    <p class="pull-left sm-pull-reset">\n      <span>Copyright <span class="copyright">©</span> 2015 </span>\n      <span>THEMES LAB</span>.\n      <span>All rights reserved. </span>\n    </p>\n    <p class="pull-right sm-pull-reset">\n      <span><a href="#" class="m-r-10">Support</a> | <a href="#" class="m-l-10 m-r-10">Terms of use</a> | <a href="#" class="m-l-10">Privacy Policy</a></span>\n    </p>\n  </div>\n</div>\n');}return __p.join('');};
}).call(this);
(function() { this.JST || (this.JST = {}); this.JST["backbone/templates/contact"] = function(obj){var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('Contact Page From JST\n');}return __p.join('');};
}).call(this);
(function() { this.JST || (this.JST = {}); this.JST["backbone/templates/layout"] = function(obj){var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('<!--[if lt IE 7]>\n    <p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>\n    <![endif]-->\n    <section>\n      <!-- BEGIN SIDEBAR -->\n      <div class="sidebar">\n        <!-- WILL BE RENDERED BY BACKBONE -->\n\n      </div>\n      <!-- END SIDEBAR -->\n      <div class="main-content">\n        <!-- BEGIN TOPBAR -->\n        <div class="topbar">\n\n        </div>\n        <!-- END TOPBAR -->\n        <!-- BEGIN PAGE CONTENT -->\n        <div class="page-content">\n          <!-- WILL BE RENDERED BY BACKBONE IMPORTANT BLOCK!!!!! -->\n        </div>\n        <!-- END PAGE CONTENT -->\n      </div>\n      <!-- END MAIN CONTENT -->\n    <!-- THIS WAS WHERE THE BUILDER WAS -->\n    </section>\n    <!-- BEGIN QUICKVIEW SIDEBAR -->\n    <div id="quickview-sidebar">\n      <div class="quickview-header">\n        <ul class="nav nav-tabs">\n          <li class="active"><a href="#chat" data-toggle="tab">Chat</a></li>\n          <li><a href="#notes" data-toggle="tab">Notes</a></li>\n          <li><a href="#settings" data-toggle="tab" class="settings-tab">Settings</a></li>\n        </ul>\n      </div>\n      <div id="quickview" class="quickview">\n\n      </div>\n    </div>\n    <!-- END QUICKVIEW SIDEBAR -->\n    <!-- BEGIN SEARCH -->\n    <div id="morphsearch" class="morphsearch">\n\n    </div>\n    <!-- END QUICKVIEW SIDEBAR -->\n    <!-- BEGIN PRELOADER -->\n    <div class="loader-overlay">\n\n    </div>\n    <!-- END PRELOADER -->\n    <a href="#" class="scrollup"><i class="fa fa-angle-up"></i></a>\n');}return __p.join('');};
}).call(this);
(function() { this.JST || (this.JST = {}); this.JST["backbone/templates/lockscreen"] = function(obj){var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('<!-- BEGIN LOGIN BOX -->\n<div class="container" id="lockscreen-block">\n    <div class="row">\n        <div class="col-md-8 col-md-offset-1">\n            <div class="account-wall">\n                <div class="user-image">\n                    <img src="/assets/profil_page/friend8-5c529e3d6b32609c9a080e7d35e9d5c1.jpg" class="img-responsive img-circle" alt="friend 8">\n                    <div id="loader"></div>\n                </div>\n                <form class="form-signin" role="form" action="/users/sign_in" method="post">\n                    <h2>Welcome back, <strong>{{firstname}}</strong>!</h2>\n                    <p>Enter your password to go to dashboard.</p>\n                    <div class="input-group">\n                        <input type="hidden" name="user[email]" value="{{email}}">\n                        <input type="password" class="form-control" name="user[password]" id="password" placeholder="Password">\n                                <span class="input-group-btn"> \n                                <button type="submit" class="btn btn-primary">Log In</button>\n                                </span>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>\n<div class="loader-overlay">\n    <div class="loader-inner">\n        <div class="loader2"></div>\n    </div>\n</div>\n<div class="backstretch" style="left: 0px; top: 0px; overflow: hidden; margin: 0px; padding: 0px; height: 769px; width: 1042px; z-index: -999999; position: fixed;"><img src="/assets/gallery/login-26ffa86860093fbf13ba0934975043e5.jpg" style="position: absolute; margin: 0px; padding: 0px; border: none; width: 1153.2px; height: 769px; max-height: none; max-width: none; z-index: -999999; left: -55.5983px; top: 0px;"></div>\n');}return __p.join('');};
}).call(this);
(function() { this.JST || (this.JST = {}); this.JST["backbone/templates/partials/_header-left"] = function(obj){var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('<div class="topnav">\n  <a class="menutoggle" href="#" data-toggle="sidebar-collapsed"><span class="menu__handle"><span>Menu</span></span></a>\n  <ul class="nav nav-icons">\n    <li><a href="#" class="toggle-sidebar-top"><span class="icon-user-following"></span></a></li>\n    <li><a href="mailbox.html"><span class="octicon octicon-mail-read"></span></a></li>\n    <li><a href="#"><span class="octicon octicon-flame"></span></a></li>\n    <li><a href="builder-page.html"><span class="octicon octicon-rocket"></span></a></li>\n  </ul>\n</div>\n');}return __p.join('');};
}).call(this);
(function() { this.JST || (this.JST = {}); this.JST["backbone/templates/partials/_loader"] = function(obj){var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('<div class="spinner">\n  <div class="bounce1"></div>\n  <div class="bounce2"></div>\n  <div class="bounce3"></div>\n</div>\n');}return __p.join('');};
}).call(this);
(function() { this.JST || (this.JST = {}); this.JST["backbone/templates/partials/_login"] = function(obj){var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('<!-- BEGIN LOGIN BOX -->\n<div class="container" id="login-block">\n    <i class="user-img icons-faces-users-03"></i>\n    <div class="account-info">\n        <a href="dashboard.html" class="logo"></a>\n        <h3>Modular &amp; Flexible Admin.</h3>\n        <ul>\n            <li><i class="icon-magic-wand"></i> Fully customizable</li>\n            <li><i class="icon-layers"></i> Various sibebars look</li>\n            <li><i class="icon-arrow-right"></i> RTL direction support</li>\n            <li><i class="icon-drop"></i> Colors options</li>\n        </ul>\n    </div>\n    <div class="account-form">\n        <form class="form-signin" role="form" method="post" action="/users/sign_in">\n            <h3><strong>Sign in</strong> to your account</h3>\n            <div class="append-icon">\n                <input type="text" name="user[email]" id="name" class="form-control form-white username" placeholder="Email" required>\n                <i class="icon-user"></i>\n            </div>\n            <div class="append-icon m-b-20">\n                <input type="password" name="user[password]" class="form-control form-white password" placeholder="Password" required>\n                <i class="icon-lock"></i>\n            </div>\n            <button type="submit" id="submit-form" class="btn btn-lg btn-dark btn-rounded ladda-button" data-style="expand-left">Sign In</button>\n            <span class="forgot-password"><a id="password" href="account-forgot-password.html">Forgot password?</a></span>\n        </form>\n            <div class="form-footer">\n                <div class="social-btn">\n                    <form method="get" action="/users/auth/facebook">\n                        <button type="submit" class="btn-fb btn btn-lg btn-block btn-square"><i class="fa fa-facebook pull-left"></i>Connect with Facebook</button>\n                    </form>\n                    <button type="button" class="btn btn-lg btn-block btn-blue btn-square"><i class="fa fa-twitter pull-left"></i>Login with Twitter</button>\n                </div>\n                <div class="clearfix">\n                    <p class="new-here"><a href="/users/sign_up">New here? Sign up</a></p>\n                </div>\n            </div>\n\n        <form class="form-password" role="form">\n            <h3><strong>Reset</strong> your password</h3>\n            <div class="append-icon m-b-20">\n                <input type="password" name="password" class="form-control form-white password" placeholder="Password" required>\n                <i class="icon-lock"></i>\n            </div>\n            <button type="submit" id="submit-password" class="btn btn-lg btn-danger btn-block ladda-button" data-style="expand-left">Send Password Reset Link</button>\n            <div class="clearfix m-t-60">\n                <p class="pull-left m-t-20 m-b-0"><a id="login" href="#">Have an account? Sign In</a></p>\n                <p class="pull-right m-t-20 m-b-0"><a href="/users/sign_up">New here? Sign up</a></p>\n            </div>\n        </form>\n    </div>\n</div>\n');}return __p.join('');};
}).call(this);
(function() { this.JST || (this.JST = {}); this.JST["backbone/templates/partials/_messages-header"] = function(obj){var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('<a href="#" data-toggle="dropdown" data-hover="dropdown" data-close-others="true">\n<i class="icon-paper-plane"></i>\n<span class="badge badge-primary badge-header">\n8\n</span>\n</a>\n<ul class="dropdown-menu">\n  <li class="dropdown-header clearfix">\n    <p class="pull-left">\n      You have 8 Messages\n    </p>\n  </li>\n  <li class="dropdown-body">\n    <ul class="dropdown-menu-list withScroll" data-height="220">\n      <li class="clearfix">\n        <span class="pull-left p-r-5">\n        <img src="/assets/avatars/avatar3-20e9d488ec45d5430c7f92b864ba27b6.png" alt="avatar 3">\n        </span>\n        <div class="clearfix">\n          <div>\n            <strong>Alexa Johnson</strong>\n            <small class="pull-right text-muted">\n            <span class="glyphicon glyphicon-time p-r-5"></span>12 mins ago\n            </small>\n          </div>\n          <p>Lorem ipsum dolor sit amet, consectetur...</p>\n        </div>\n      </li>\n      <li class="clearfix">\n        <span class="pull-left p-r-5">\n        <img src="/assets/avatars/avatar4-5c71c0202671bf8b1c99e9785c97b179.png" alt="avatar 4">\n        </span>\n        <div class="clearfix">\n          <div>\n            <strong>John Smith</strong>\n            <small class="pull-right text-muted">\n            <span class="glyphicon glyphicon-time p-r-5"></span>47 mins ago\n            </small>\n          </div>\n          <p>Lorem ipsum dolor sit amet, consectetur...</p>\n        </div>\n      </li>\n      <li class="clearfix">\n        <span class="pull-left p-r-5">\n        <img src="/assets/avatars/avatar5-9e3d9107969090f322da07234181ef8a.png" alt="avatar 5">\n        </span>\n        <div class="clearfix">\n          <div>\n            <strong>Bobby Brown</strong>\n            <small class="pull-right text-muted">\n            <span class="glyphicon glyphicon-time p-r-5"></span>1 hour ago\n            </small>\n          </div>\n          <p>Lorem ipsum dolor sit amet, consectetur...</p>\n        </div>\n      </li>\n      <li class="clearfix">\n        <span class="pull-left p-r-5">\n        <img src="/assets/avatars/avatar6-e1c2d98e0fdecf5373869fcbc7781aee.png" alt="avatar 6">\n        </span>\n        <div class="clearfix">\n          <div>\n            <strong>James Miller</strong>\n            <small class="pull-right text-muted">\n            <span class="glyphicon glyphicon-time p-r-5"></span>2 days ago\n            </small>\n          </div>\n          <p>Lorem ipsum dolor sit amet, consectetur...</p>\n        </div>\n      </li>\n    </ul>\n  </li>\n  <li class="dropdown-footer clearfix">\n    <a href="mailbox.html" class="pull-left">See all messages</a>\n    <a href="#" class="pull-right">\n    <i class="icon-settings"></i>\n    </a>\n  </li>\n</ul>\n');}return __p.join('');};
}).call(this);
(function() { this.JST || (this.JST = {}); this.JST["backbone/templates/partials/_morphsearch"] = function(obj){var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('<form class="morphsearch-form">\n  <input class="morphsearch-input" type="search" placeholder="Search..."/>\n  <button class="morphsearch-submit" type="submit">Search</button>\n</form>\n<div class="morphsearch-content withScroll">\n  <div class="dummy-column user-column">\n    <h2>Users</h2>\n    <a class="dummy-media-object" href="#">\n      <img src="/assets/avatars/avatar1_big-5bcbcb4db10d5117b17cf669895a285f.png" alt="Avatar 1"/>\n      <h3>John Smith</h3>\n    </a>\n    <a class="dummy-media-object" href="#">\n      <img src="/assets/avatars/avatar2_big-62782db85ba0fdf09639fab2d3bf6338.png" alt="Avatar 2"/>\n      <h3>Bod Dylan</h3>\n    </a>\n    <a class="dummy-media-object" href="#">\n      <img src="/assets/avatars/avatar3_big-55fd0e552d2eb9badfee492125bf77c0.png" alt="Avatar 3"/>\n      <h3>Jenny Finlan</h3>\n    </a>\n    <a class="dummy-media-object" href="#">\n      <img src="/assets/avatars/avatar4_big-76b5be657f816e08654b6c51740d5d71.png" alt="Avatar 4"/>\n      <h3>Harold Fox</h3>\n    </a>\n    <a class="dummy-media-object" href="#">\n      <img src="/assets/avatars/avatar5_big-5d84ee2691fcc35a9163bc4ab96552a2.png" alt="Avatar 5"/>\n      <h3>Martin Hendrix</h3>\n    </a>\n    <a class="dummy-media-object" href="#">\n      <img src="/assets/avatars/avatar6_big-594030d3595d8f354b9b1737c84b8958.png" alt="Avatar 6"/>\n      <h3>Paul Ferguson</h3>\n    </a>\n  </div>\n  <div class="dummy-column">\n    <h2>Articles</h2>\n    <a class="dummy-media-object" href="#">\n      <img src="/assets/gallery/1-03c6775d003e46246be7265e2dc42d4e.jpg" alt="1"/>\n      <h3>How to change webdesign?</h3>\n    </a>\n    <a class="dummy-media-object" href="#">\n      <img src="/assets/gallery/2-97b5a37e91ea35dfd497ac9b033b9196.jpg" alt="2"/>\n      <h3>News From the sky</h3>\n    </a>\n    <a class="dummy-media-object" href="#">\n      <img src="/assets/gallery/3-574ad898d757296e04ecd42c1a0b3aa7.jpg" alt="3"/>\n      <h3>Where is the cat?</h3>\n    </a>\n    <a class="dummy-media-object" href="#">\n      <img src="/assets/gallery/4-7b016bc7eb1d15db07ea18f76809cd2b.jpg" alt="4"/>\n      <h3>Just another funny story</h3>\n    </a>\n    <a class="dummy-media-object" href="#">\n      <img src="/assets/gallery/5-2a7b3720d28ba0bc1e71f3881c40bd9e.jpg" alt="5"/>\n      <h3>How many water we drink every day?</h3>\n    </a>\n    <a class="dummy-media-object" href="#">\n      <img src="/assets/gallery/6-67cf235a395d9230d819ea1b51c0e74b.jpg" alt="6"/>\n      <h3>Drag and drop tutorials</h3>\n    </a>\n  </div>\n  <div class="dummy-column">\n    <h2>Recent</h2>\n    <a class="dummy-media-object" href="#">\n      <img src="/assets/gallery/7-f1480190f9f73d2e8c1d1b41d0613de2.jpg" alt="7"/>\n      <h3>Design Inspiration</h3>\n    </a>\n    <a class="dummy-media-object" href="#">\n      <img src="/assets/gallery/8-03253502ed0d2b975411a2054768f36a.jpg" alt="8"/>\n      <h3>Animals drawing</h3>\n    </a>\n    <a class="dummy-media-object" href="#">\n      <img src="/assets/gallery/9-7ded80df0c76f45cc88c2a3a44b05751.jpg" alt="9"/>\n      <h3>Cup of tea please</h3>\n    </a>\n    <a class="dummy-media-object" href="#">\n      <img src="/assets/gallery/10-f02a7b7321a4cb3ead91db8bbbfd895f.jpg" alt="10"/>\n      <h3>New application arrive</h3>\n    </a>\n    <a class="dummy-media-object" href="#">\n      <img src="/assets/gallery/11-cce8d6e6ab1614da32bc2f6d816d3f1d.jpg" alt="11"/>\n      <h3>Notification prettify</h3>\n    </a>\n    <a class="dummy-media-object" href="#">\n      <img src="/assets/gallery/12-24d7cb44b6425ec5f4cfe18573653848.jpg" alt="12"/>\n      <h3>My article is the last recent</h3>\n    </a>\n  </div>\n</div>\n<!-- /morphsearch-content -->\n<span class="morphsearch-close"></span>\n');}return __p.join('');};
}).call(this);
(function() { this.JST || (this.JST = {}); this.JST["backbone/templates/partials/_nav"] = function(obj){var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('<li><a href="dashboard.html"><i class="icon-home"></i><span>Dashboard</span></a></li>\n<li class="nav-parent">\n  <a href="#"><i class="icon-puzzle"></i><span>Builder</span> <span class="fa arrow"></span></a>\n  <ul class="children collapse">\n    <li><a target="_blank" href="../../admin-builder/index.html"> Admin</a></li>\n    <li><a href="page-builder/index.html"> Page</a></li>\n    <li><a href="ecommerce-pricing-table.html"> Pricing Table</a></li>\n  </ul>\n</li>\n<li class="nav-parent">\n  <a href="#"><i class="icon-bulb"></i><span>Mailbox</span> <span class="fa arrow"></span></a>\n  <ul class="children collapse">\n    <li><a href="mailbox.html"> Inbox</a></li>\n    <li><a href="mailbox-send.html"> Send Email</a></li>\n  </ul>\n</li>\n<li class="nav-parent">\n  <a href=""><i class="icon-screen-desktop"></i><span>UI Elements</span> <span class="fa arrow"></span></a>\n  <ul class="children collapse">\n    <li><a href="ui-buttons.html" > Buttons</a></li>\n    <li><a href="ui-components.html"> Components</a></li>\n    <li><a href="ui-tabs.html"> Tabs</a></li>\n    <li><a href="ui-animations.html"> Animations CSS3</a></li>\n    <li><a href="ui-icons.html"> Icons</a></li>\n    <li><a href="ui-portlets.html"> Portlets</a></li>\n    <li><a href="ui-nestable-list.html" > Nestable List</a></li>\n    <li><a href="ui-tree-view.html"> Tree View</a></li>\n    <li><a href="ui-modals.html"> Modals</a></li>\n    <li><a href="ui-notifications.html"> Notifications</a></li>\n    <li><a href="ui-typography.html"> Typography</a></li>\n    <li><a href="ui-helper.html"> Helper Classes</a></li>\n  </ul>\n</li>\n<li class="nav-parent">\n  <a href=""><i class="icon-layers"></i><span>Layouts</span><span class="fa arrow"></span></a>\n  <ul class="children collapse">\n    <li><a href="layouts-api.html"> Layout API</a></li>\n    <li><a href="layout-topbar-menu.html"> Topbar Menu</a></li>\n    <li><a href="layout-topbar-mega-menu.html"> Topbar Mega Menu</a></li>\n    <li><a href="layout-topbar-mega-menu-dark.html"> Topbar Mega Dark</a></li>\n    <li><a href="layout-sidebar-hover.html"> Sidebar on Hover</a></li>\n    <li><a href="layout-submenu-hover.html"> Sidebar Submenu Hover</a></li>\n    <li><a href="layout-boxed.html"> Boxed Layout</a></li>\n  </ul>\n</li>\n<li class="nav-parent">\n  <a href=""><i class="icon-note"></i><span>Forms </span><span class="fa arrow"></span></a>\n  <ul class="children collapse">\n    <li><a href="forms.html"> Forms Elements</a></li>\n    <li><a href="forms-validation.html"> Forms Validation</a></li>\n    <li><a href="forms-plugins.html"> Advanced Plugins</a></li>\n    <li><a href="forms-wizard.html"> <span class="pull-right badge badge-danger">low</span> <span>Form Wizard</span></a></li>\n    <li><a href="forms-sliders.html"> Sliders</a></li>\n    <li><a href="forms-editors.html"> Text Editors</a></li>\n    <li><a href="forms-input-masks.html"> Input Masks</a></li>\n  </ul>\n</li>\n<li class="nav-parent">\n  <a href=""><i class="fa fa-table"></i><span>Tables</span><span class="fa arrow"></span></a>\n  <ul class="children collapse">\n    <li><a href="tables.html"> Tables Styling</a></li>\n    <li><a href="tables-dynamic.html"> Tables Dynamic</a></li>\n    <li><a href="tables-filter.html"> Tables Filter</a></li>\n    <li><a href="tables-editable.html"> Tables Editable</a></li>\n  </ul>\n</li>\n<li class="nav-parent">\n  <a href=""><i class="icon-bar-chart"></i><span>Charts </span><span class="fa arrow"></span></a>\n  <ul class="children collapse">\n    <li><a href="charts.html"> Charts</a></li>\n    <li><a href="charts-finance.html"> Financial Charts</a></li>\n  </ul>\n</li>\n<li class="nav-parent">\n  <a href=""><i class="icon-picture"></i><span>Medias</span><span class="fa arrow"></span></a>\n  <ul class="children collapse">\n    <li><a href="medias-image-croping.html"> Images Croping</a></li>\n    <li><a href="medias-gallery-sortable.html"> Gallery Sortable</a></li>\n    <li><a href="medias-hover-effects.html"> <span class="pull-right badge badge-primary">12</span> Hover Effects</a></li>\n  </ul>\n</li>\n<li class="nav-parent nav-active active">\n  <a href=""><i class="icon-docs"></i><span>Pages </span><span class="fa arrow"></span></a>\n  <ul class="children collapse">\n    <li><a href="page-timeline.html"> Timeline</a></li>\n    <li><a href="page-404.html"> Error 404</a></li>\n    <li><a href="page-500.html"> Error 500</a></li>\n    <li class="active"><a href="page-blank.html"> Blank Page</a></li>\n    <li><a href="page-contact.html"> Contact</a></li>\n  </ul>\n</li>\n<li class="nav-parent">\n  <a href=""><i class="icon-user"></i><span>User </span><span class="fa arrow"></span></a>\n  <ul class="children collapse">\n    <li><a href="user-profil.html"> <span class="pull-right badge badge-danger">Hot</span> Profil</a></li>\n    <li><a href="user-lockscreen.html"> Lockscreen</a></li>\n    <li><a href="user-login-v1.html"> Login / Register</a></li>\n    <li><a href="user-login-v2.html"> Login / Register v2</a></li>\n    <li><a href="user-session-timeout.html"> Session Timeout</a></li>\n  </ul>\n</li>\n<li class="nav-parent">\n  <a href=""><i class="icon-basket"></i><span>eCommerce </span><span class="fa arrow"></span></a>\n  <ul class="children collapse">\n    <li><a href="ecommerce-cart.html"> Shopping Cart</a></li>\n    <li><a href="ecommerce-invoice.html"> Invoice</a></li>\n    <li><a href="ecommerce-pricing-table.html"><span class="pull-right badge badge-success">5</span> Pricing Table</a></li>\n  </ul>\n</li>\n<li class="nav-parent">\n  <a href=""><i class="icon-cup"></i><span>Extra </span><span class="fa arrow"></span></a>\n  <ul class="children collapse">\n    <li><a href="extra-fullcalendar.html"><span class="pull-right badge badge-primary">New</span> Fullcalendar</a></li>\n    <li><a href="extra-widgets.html"> Widgets</a></li>\n    <li><a href="page-coming-soon.html"> Coming Soon</a></li>\n    <li><a href="extra-sliders.html"> Sliders</a></li>\n    <li><a href="maps-google.html"> Google Maps</a></li>\n    <li><a href="maps-vector.html"> Vector Maps</a></li>\n    <li><a href="extra-translation.html"> Translation</a></li>\n  </ul>\n</li>\n');}return __p.join('');};
}).call(this);
(function() { this.JST || (this.JST = {}); this.JST["backbone/templates/partials/_notification-header"] = function(obj){var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('<a href="#" data-toggle="dropdown" data-hover="dropdown" data-close-others="true">\n<i class="icon-bell"></i>\n<span class="badge badge-danger badge-header">6</span>\n</a>\n<ul class="dropdown-menu">\n  <li class="dropdown-header clearfix">\n    <p class="pull-left">12 Pending Notifications</p>\n  </li>\n  <li>\n    <ul class="dropdown-menu-list withScroll" data-height="220">\n      <li>\n        <a href="#">\n        <i class="fa fa-star p-r-10 f-18 c-orange"></i>\n        Steve have rated your photo\n        <span class="dropdown-time">Just now</span>\n        </a>\n      </li>\n      <li>\n        <a href="#">\n        <i class="fa fa-heart p-r-10 f-18 c-red"></i>\n        John added you to his favs\n        <span class="dropdown-time">15 mins</span>\n        </a>\n      </li>\n      <li>\n        <a href="#">\n        <i class="fa fa-file-text p-r-10 f-18"></i>\n        New document available\n        <span class="dropdown-time">22 mins</span>\n        </a>\n      </li>\n      <li>\n        <a href="#">\n        <i class="fa fa-picture-o p-r-10 f-18 c-blue"></i>\n        New picture added\n        <span class="dropdown-time">40 mins</span>\n        </a>\n      </li>\n      <li>\n        <a href="#">\n        <i class="fa fa-bell p-r-10 f-18 c-orange"></i>\n        Meeting in 1 hour\n        <span class="dropdown-time">1 hour</span>\n        </a>\n      </li>\n      <li>\n        <a href="#">\n        <i class="fa fa-bell p-r-10 f-18"></i>\n        Server 5 overloaded\n        <span class="dropdown-time">2 hours</span>\n        </a>\n      </li>\n      <li>\n        <a href="#">\n        <i class="fa fa-comment p-r-10 f-18 c-gray"></i>\n        Bill comment your post\n        <span class="dropdown-time">3 hours</span>\n        </a>\n      </li>\n      <li>\n        <a href="#">\n        <i class="fa fa-picture-o p-r-10 f-18 c-blue"></i>\n        New picture added\n        <span class="dropdown-time">2 days</span>\n        </a>\n      </li>\n    </ul>\n  </li>\n  <li class="dropdown-footer clearfix">\n    <a href="#" class="pull-left">See all notifications</a>\n    <a href="#" class="pull-right">\n    <i class="icon-settings"></i>\n    </a>\n  </li>\n</ul>\n');}return __p.join('');};
}).call(this);
(function() { this.JST || (this.JST = {}); this.JST["backbone/templates/partials/_quickview-sidebar"] = function(obj){var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('<div class="tab-content">\n  <div class="tab-pane fade active in" id="chat">\n    <div class="chat-body current">\n      <div class="chat-search">\n        <form class="form-inverse" action="#" role="search">\n          <div class="append-icon">\n            <input type="text" class="form-control" placeholder="Search contact...">\n            <i class="icon-magnifier"></i>\n          </div>\n        </form>\n      </div>\n      <div class="chat-groups">\n        <div class="title">GROUP CHATS</div>\n        <ul>\n          <li><i class="turquoise"></i> Favorites</li>\n          <li><i class="turquoise"></i> Office Work</li>\n          <li><i class="turquoise"></i> Friends</li>\n        </ul>\n      </div>\n      <div class="chat-list">\n        <div class="title">FAVORITES</div>\n        <ul>\n          <li class="clearfix">\n            <div class="user-img">\n              <img src="/assets/avatars/avatar13-b0b01679fba0f604b62540a92d63f4bb.png" alt="avatar" />\n            </div>\n            <div class="user-details">\n              <div class="user-name">Bobby Brown</div>\n              <div class="user-txt">On the road again...</div>\n            </div>\n            <div class="user-status">\n              <i class="online"></i>\n            </div>\n          </li>\n          <li class="clearfix">\n            <div class="user-img">\n              <img src="/assets/avatars/avatar5-9e3d9107969090f322da07234181ef8a.png" alt="avatar" />\n              <div class="pull-right badge badge-danger">3</div>\n            </div>\n            <div class="user-details">\n              <div class="user-name">Alexa Johnson</div>\n              <div class="user-txt">Still at the beach</div>\n            </div>\n            <div class="user-status">\n              <i class="away"></i>\n            </div>\n          </li>\n          <li class="clearfix">\n            <div class="user-img">\n              <img src="/assets/avatars/avatar10-c10893a316c5d15662d3ba06c677d677.png" alt="avatar" />\n            </div>\n            <div class="user-details">\n              <div class="user-name">Bobby Brown</div>\n              <div class="user-txt">On stage...</div>\n            </div>\n            <div class="user-status">\n              <i class="busy"></i>\n            </div>\n          </li>\n        </ul>\n      </div>\n      <div class="chat-list">\n        <div class="title">FRIENDS</div>\n        <ul>\n          <li class="clearfix">\n            <div class="user-img">\n              <img src="/assets/avatars/avatar7-1fd1ef90c27f3feff3bd3e4fb1dfb1fd.png" alt="avatar" />\n              <div class="pull-right badge badge-danger">3</div>\n            </div>\n            <div class="user-details">\n              <div class="user-name">James Miller</div>\n              <div class="user-txt">At work...</div>\n            </div>\n            <div class="user-status">\n              <i class="online"></i>\n            </div>\n          </li>\n          <li class="clearfix">\n            <div class="user-img">\n              <img src="/assets/avatars/avatar11-6e53e137bb94b7033d71d204ff4fb08f.png" alt="avatar" />\n            </div>\n            <div class="user-details">\n              <div class="user-name">Fred Smith</div>\n              <div class="user-txt">Waiting for tonight</div>\n            </div>\n            <div class="user-status">\n              <i class="offline"></i>\n            </div>\n          </li>\n          <li class="clearfix">\n            <div class="user-img">\n              <img src="/assets/avatars/avatar8-35fbdff51d1de5a535e2d24cc11b72af.png" alt="avatar" />\n            </div>\n            <div class="user-details">\n              <div class="user-name">Ben Addams</div>\n              <div class="user-txt">On my way to NYC</div>\n            </div>\n            <div class="user-status">\n              <i class="offline"></i>\n            </div>\n          </li>\n        </ul>\n      </div>\n    </div>\n    <div class="chat-conversation">\n      <div class="conversation-header">\n        <div class="user clearfix">\n          <div class="chat-back">\n            <i class="icon-action-undo"></i>\n          </div>\n          <div class="user-details">\n            <div class="user-name">James Miller</div>\n            <div class="user-txt">On the road again...</div>\n          </div>\n        </div>\n      </div>\n      <div class="conversation-body">\n        <ul>\n          <li class="img">\n            <div class="chat-detail">\n              <span class="chat-date">today, 10:38pm</span>\n              <div class="conversation-img">\n                <img src="/assets/avatars/avatar4-5c71c0202671bf8b1c99e9785c97b179.png" alt="avatar 4"/>\n              </div>\n              <div class="chat-bubble">\n                <span>Hi you!</span>\n              </div>\n            </div>\n          </li>\n          <li class="img">\n            <div class="chat-detail">\n              <span class="chat-date">today, 10:45pm</span>\n              <div class="conversation-img">\n                <img src="/assets/avatars/avatar4-5c71c0202671bf8b1c99e9785c97b179.png" alt="avatar 4"/>\n              </div>\n              <div class="chat-bubble">\n                <span>Are you there?</span>\n              </div>\n            </div>\n          </li>\n          <li class="img">\n            <div class="chat-detail">\n              <span class="chat-date">today, 10:51pm</span>\n              <div class="conversation-img">\n                <img src="/assets/avatars/avatar4-5c71c0202671bf8b1c99e9785c97b179.png" alt="avatar 4"/>\n              </div>\n              <div class="chat-bubble">\n                <span>Send me a message when you come back.</span>\n              </div>\n            </div>\n          </li>\n        </ul>\n      </div>\n      <div class="conversation-message">\n        <input type="text" placeholder="Your message..." class="form-control form-white send-message" />\n        <div class="item-footer clearfix">\n          <div class="footer-actions">\n            <i class="icon-rounded-marker"></i>\n            <i class="icon-rounded-camera"></i>\n            <i class="icon-rounded-paperclip-oblique"></i>\n            <i class="icon-rounded-alarm-clock"></i>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class="tab-pane fade" id="notes">\n    <div class="list-notes current withScroll">\n      <div class="notes ">\n        <div class="row">\n          <div class="col-md-12">\n            <div id="add-note">\n              <i class="fa fa-plus"></i>ADD A NEW NOTE\n            </div>\n          </div>\n        </div>\n        <div id="notes-list">\n          <div class="note-item media current fade in">\n            <button class="close">×</button>\n            <div>\n              <div>\n                <p class="note-name">Reset my account password</p>\n              </div>\n              <p class="note-desc hidden">Break security reasons.</p>\n              <p><small>Tuesday 6 May, 3:52 pm</small></p>\n            </div>\n          </div>\n          <div class="note-item media fade in">\n            <button class="close">×</button>\n            <div>\n              <div>\n                <p class="note-name">Call John</p>\n              </div>\n              <p class="note-desc hidden">He have my laptop!</p>\n              <p><small>Thursday 8 May, 2:28 pm</small></p>\n            </div>\n          </div>\n          <div class="note-item media fade in">\n            <button class="close">×</button>\n            <div>\n              <div>\n                <p class="note-name">Buy a car</p>\n              </div>\n              <p class="note-desc hidden">I\'m done with the bus</p>\n              <p><small>Monday 12 May, 3:43 am</small></p>\n            </div>\n          </div>\n          <div class="note-item media fade in">\n            <button class="close">×</button>\n            <div>\n              <div>\n                <p class="note-name">Don\'t forget my notes</p>\n              </div>\n              <p class="note-desc hidden">I have to read them...</p>\n              <p><small>Wednesday 5 May, 6:15 pm</small></p>\n            </div>\n          </div>\n          <div class="note-item media current fade in">\n            <button class="close">×</button>\n            <div>\n              <div>\n                <p class="note-name">Reset my account password</p>\n              </div>\n              <p class="note-desc hidden">Break security reasons.</p>\n              <p><small>Tuesday 6 May, 3:52 pm</small></p>\n            </div>\n          </div>\n          <div class="note-item media fade in">\n            <button class="close">×</button>\n            <div>\n              <div>\n                <p class="note-name">Call John</p>\n              </div>\n              <p class="note-desc hidden">He have my laptop!</p>\n              <p><small>Thursday 8 May, 2:28 pm</small></p>\n            </div>\n          </div>\n          <div class="note-item media fade in">\n            <button class="close">×</button>\n            <div>\n              <div>\n                <p class="note-name">Buy a car</p>\n              </div>\n              <p class="note-desc hidden">I\'m done with the bus</p>\n              <p><small>Monday 12 May, 3:43 am</small></p>\n            </div>\n          </div>\n          <div class="note-item media fade in">\n            <button class="close">×</button>\n            <div>\n              <div>\n                <p class="note-name">Don\'t forget my notes</p>\n              </div>\n              <p class="note-desc hidden">I have to read them...</p>\n              <p><small>Wednesday 5 May, 6:15 pm</small></p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class="detail-note note-hidden-sm">\n      <div class="note-header clearfix">\n        <div class="note-back">\n          <i class="icon-action-undo"></i>\n        </div>\n        <div class="note-edit">Edit Note</div>\n        <div class="note-subtitle">title on first line</div>\n      </div>\n      <div id="note-detail">\n        <div class="note-write">\n          <textarea class="form-control" placeholder="Type your note here"></textarea>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class="tab-pane fade" id="settings">\n    <div class="settings">\n      <div class="title">ACCOUNT SETTINGS</div>\n      <div class="setting">\n        <span> Show Personal Statut</span>\n        <label class="switch pull-right">\n        <input type="checkbox" class="switch-input" checked>\n        <span class="switch-label" data-on="On" data-off="Off"></span>\n        <span class="switch-handle"></span>\n        </label>\n        <p class="setting-info">Lorem ipsum dolor sit amet consectetuer.</p>\n      </div>\n      <div class="setting">\n        <span> Show my Picture</span>\n        <label class="switch pull-right">\n        <input type="checkbox" class="switch-input" checked>\n        <span class="switch-label" data-on="On" data-off="Off"></span>\n        <span class="switch-handle"></span>\n        </label>\n        <p class="setting-info">Lorem ipsum dolor sit amet consectetuer.</p>\n      </div>\n      <div class="setting">\n        <span> Show my Location</span>\n        <label class="switch pull-right">\n        <input type="checkbox" class="switch-input">\n        <span class="switch-label" data-on="On" data-off="Off"></span>\n        <span class="switch-handle"></span>\n        </label>\n        <p class="setting-info">Lorem ipsum dolor sit amet consectetuer.</p>\n      </div>\n      <div class="title">CHAT</div>\n      <div class="setting">\n        <span> Show User Image</span>\n        <label class="switch pull-right">\n        <input type="checkbox" class="switch-input" checked>\n        <span class="switch-label" data-on="On" data-off="Off"></span>\n        <span class="switch-handle"></span>\n        </label>\n      </div>\n      <div class="setting">\n        <span> Show Fullname</span>\n        <label class="switch pull-right">\n        <input type="checkbox" class="switch-input" checked>\n        <span class="switch-label" data-on="On" data-off="Off"></span>\n        <span class="switch-handle"></span>\n        </label>\n      </div>\n      <div class="setting">\n        <span> Show Location</span>\n        <label class="switch pull-right">\n        <input type="checkbox" class="switch-input">\n        <span class="switch-label" data-on="On" data-off="Off"></span>\n        <span class="switch-handle"></span>\n        </label>\n      </div>\n      <div class="setting">\n        <span> Show Unread Count</span>\n        <label class="switch pull-right">\n        <input type="checkbox" class="switch-input" checked>\n        <span class="switch-label" data-on="On" data-off="Off"></span>\n        <span class="switch-handle"></span>\n        </label>\n      </div>\n      <div class="title">STATISTICS</div>\n      <div class="settings-chart">\n        <div class="clearfix">\n          <div class="chart-title">Stat 1</div>\n          <div class="chart-number">82%</div>\n        </div>\n        <div class="progress">\n          <div class="progress-bar progress-bar-primary setting1" data-transitiongoal="82"></div>\n        </div>\n      </div>\n      <div class="settings-chart">\n        <div class="clearfix">\n          <div class="chart-title">Stat 2</div>\n          <div class="chart-number">43%</div>\n        </div>\n        <div class="progress">\n          <div class="progress-bar progress-bar-primary setting2" data-transitiongoal="43"></div>\n        </div>\n      </div>\n      <div class="m-t-30" style="width:100%">\n        <canvas id="setting-chart" height="300"></canvas>\n      </div>\n    </div>\n  </div>\n</div>\n');}return __p.join('');};
}).call(this);
(function() { this.JST || (this.JST = {}); this.JST["backbone/templates/partials/_sidebar-footer"] = function(obj){var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('<a class="pull-left footer-settings" href="#" data-rel="tooltip" data-placement="top" data-original-title="Settings">\n<i class="icon-settings"></i></a>\n<a class="pull-left toggle_fullscreen" href="#" data-rel="tooltip" data-placement="top" data-original-title="Fullscreen">\n<i class="icon-size-fullscreen"></i></a>\n<a class="pull-left lockout" data-rel="tooltip" data-placement="top" data-original-title="Lockscreen">\n<i class="icon-lock"></i></a>\n<a class="pull-left btn-effect" id="sign_out">\n<i class="icon-power"></i></a>\n');}return __p.join('');};
}).call(this);
(function() { this.JST || (this.JST = {}); this.JST["backbone/templates/partials/_sidebar"] = function(obj){var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('<!-- BEGIN SIDEBAR -->\n<div class="logopanel">\n  <h1>\n    <a href="dashboard.html"></a>\n  </h1>\n</div>\n<div class="sidebar-inner">\n  <div id="sidebar-top">\n\n  </div>\n  <div class="menu-title">\n    Navigation\n    <div class="pull-right menu-settings">\n      <a href="#" class="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-close-others="true" data-delay="300">\n      <i class="icon-settings"></i>\n      </a>\n      <ul class="dropdown-menu">\n        <li><a href="#" id="reorder-menu" class="reorder-menu">Reorder menu</a></li>\n        <li><a href="#" id="remove-menu" class="remove-menu">Remove elements</a></li>\n        <li><a href="#" id="hide-top-sidebar" class="hide-top-sidebar">Hide user &amp; search</a></li>\n      </ul>\n    </div>\n  </div>\n  <ul class="nav nav-sidebar">\n\n  </ul>\n  <!-- SIDEBAR WIDGET FOLDERS -->\n  <div class="sidebar-widgets">\n\n  </div>\n  <div class="sidebar-footer clearfix">\n\n  </div>\n</div>\n<!-- END SIDEBAR -->\n');}return __p.join('');};
}).call(this);
(function() { this.JST || (this.JST = {}); this.JST["backbone/templates/partials/_sidebar_top"] = function(obj){var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('<div class="logopanel">\n  <h1>\n    <a href="dashboard.html"></a>\n  </h1>\n</div>\n<div class="sidebar-inner">\n  <div class="sidebar-top">\n    <form action="search-result.html" method="post" class="searchform" id="search-results">\n      <input type="text" class="form-control" name="keyword" placeholder="Search...">\n    </form>\n    <div class="userlogged clearfix">\n      <i class="icon icons-faces-users-01"></i>\n      <div class="user-details">\n        <h4>{{firstname}} {{lastname}}</h4>\n        <div class="dropdown user-login">\n          <button class="btn btn-xs dropdown-toggle btn-rounded" type="button" data-toggle="dropdown" data-hover="dropdown" data-close-others="true" data-delay="300">\n          <i class="online"></i><span>Available</span><i class="fa fa-angle-down"></i>\n          </button>\n          <ul class="dropdown-menu">\n            <li><a href="#"><i class="busy"></i><span>Busy</span></a></li>\n            <li><a  href="#"><i class="turquoise"></i><span> </span></a></li>\n            <li><a href="#"><i class="away"></i><span>Fuck Off</span></a></li>\n          </ul>\n        </div>\n      </div>\n    </div>\n');}return __p.join('');};
}).call(this);
(function() { this.JST || (this.JST = {}); this.JST["backbone/templates/partials/_signup"] = function(obj){var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('<div class="container" id="login-block">\n    <i class="user-img icons-faces-users-03"></i>\n    <div class="account-info">\n        <a href="dashboard.html" class="logo">\n        </a>\n        <h3>Modular &amp; Flexible Admin.</h3>\n        <ul>\n            <li><i class="icon-magic-wand"></i> Fully customizable</li>\n            <li><i class="icon-layers"></i> Various sibebars look</li>\n            <li><i class="icon-arrow-right"></i> RTL direction support</li>\n            <li><i class="icon-drop"></i> Colors options</li>\n            <li><i class="icon-doc"></i> Page Variations</li>\n            <li><i class="icon-support"></i> Online Support</li>\n            <li><i class="icon-cloud-download"></i> Regular updates</li>\n        </ul>\n    </div>\n    <div class="account-form">\n        <form class="form-signup" action="/users" role="form" method="post">\n            <h3><strong>Create</strong> your account</h3>\n            <div class="row">\n                <div class="col-sm-6">\n                    <div class="append-icon">\n                        <input type="text" name="user[firstname]" id="firstname" class="form-control form-white firstname" placeholder="First Name" required autofocus>\n                        <i class="icon-user"></i>\n                    </div>\n                </div>\n                <div class="col-sm-6">\n                    <div class="append-icon">\n                        <input type="text" name="user[lastname]" id="lastname" class="form-control form-white lastname" placeholder="Last Name" required>\n                        <i class="icon-user"></i>\n                    </div>\n                </div>\n            </div>\n            <div class="append-icon">\n                <input type="email" name="user[email]" id="email" class="form-control form-white email" placeholder="Email" required>\n                <i class="icon-envelope"></i>\n            </div>\n            <div class="append-icon m-b-10">\n                <input type="password" name="user[password]" id="password" class="form-control form-white password" placeholder="Password" required>\n                <i class="icon-lock"></i>\n            </div>\n            <div class="append-icon m-b-20">\n                <input type="password" name="user[password_confirmation]" id="password2" class="form-control form-white password2" placeholder="Repeat Password" required>\n                <i class="icon-lock"></i>\n            </div>\n            <div class="terms option-group">\n                <label  for="terms" class="m-t-10">\n                    <input type="checkbox" name="user[terms]" id="terms" data-checkbox="icheckbox_square-blue" required/>\n                    I agree with terms and conditions\n                </label>\n            </div>\n            <div class="m-t-20">\n                <button type="submit" id="submit-form" class="btn btn-lg btn-dark btn-rounded" data-style="expand-left">Sign In</button>\n            </div>\n        </form>\n        <div class="form-footer">\n            <div class="social-btn">\n                <button type="button" class="btn-fb btn btn-lg btn-block btn-square"><i class="fa fa-facebook pull-left"></i>Connect with Facebook</button>\n                <button type="button" class="btn btn-lg btn-block btn-blue btn-square"><i class="fa fa-twitter pull-left"></i>Login with Twitter</button>\n            </div>\n            <div class="clearfix">\n                <p class="new-here"><a href="/">Already have an account? Sign In</a></p>\n            </div>\n        </div>\n    </div>\n    <p class="account-copyright">\n        <span>Copyright © 2016 </span><span>JSONCODES. </span>.<span>All rights reserved.</span>\n    </p>\n</div>\n');}return __p.join('');};
}).call(this);
(function() { this.JST || (this.JST = {}); this.JST["backbone/templates/partials/_topbar"] = function(obj){var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('<div class="header-left" id="header-left">\n\n</div>\n<div class="header-right">\n  <ul class="header-menu nav navbar-nav">\n    <!-- BEGIN USER DROPDOWN -->\n    <li class="dropdown" id="language-header">\n\n    </li>\n    <!-- END USER DROPDOWN -->\n    <!-- BEGIN NOTIFICATION DROPDOWN -->\n    <li class="dropdown" id="notifications-header">\n\n    </li>\n    <!-- END NOTIFICATION DROPDOWN -->\n    <!-- BEGIN MESSAGES DROPDOWN -->\n    <li class="dropdown" id="messages-header">\n\n    </li>\n    <!-- END MESSAGES DROPDOWN -->\n    <!-- BEGIN USER DROPDOWN -->\n    <li class="dropdown" id="user-header">\n\n    </li>\n    <!-- END USER DROPDOWN -->\n    <!-- CHAT BAR ICON -->\n    <li id="quickview-toggle"><a href="#"><i class="icon-bubbles"></i></a></li>\n  </ul>\n</div>\n<!-- header-right -->\n');}return __p.join('');};
}).call(this);
(function() { this.JST || (this.JST = {}); this.JST["backbone/templates/partials/_user-dropdown"] = function(obj){var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('<a href="#" data-toggle="dropdown" data-hover="dropdown" data-close-others="true">\n<i class="icon-globe"></i>\n<span>Language</span>\n</a>\n<ul class="dropdown-menu">\n  <li>\n    <a href="#" data-lang="en"><img src="/assets/flags/usa-e60b3a73cc381b93cc0e480f9060e37c.png" alt="flag-english"> <span>English</span></a>\n  </li>\n  <li>\n    <a href="#" data-lang="es"><img src="/assets/flags/spanish-93925b16a3d0cfade04a8482a34fb8e9.png" alt="flag-english"> <span>Español</span></a>\n  </li>\n  <li>\n    <a href="#" data-lang="fr"><img src="/assets/flags/french-5a1d1f7306525e1bd73ef62128f4c5e9.png" alt="flag-english"> <span>Français</span></a>\n  </li>\n</ul>\n');}return __p.join('');};
}).call(this);
(function() { this.JST || (this.JST = {}); this.JST["backbone/templates/partials/_user-header"] = function(obj){var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('<a href="/profile" data-toggle="dropdown" data-hover="dropdown" data-close-others="true">\n<img src="{{#user_image}}{{user_image}}?type=square{{/user_image}}{{^user_image}}/assets/avatars/user1-0720ac11186b6f44e5924ad3375dd2d0.png{{/user_image}}" alt="user image">\n<span class="username">Hi, {{ firstname }}</span>\n</a>\n<ul class="dropdown-menu">\n  <li>\n    <a href="/profile"><i class="icon-user"></i><span>My Profile</span></a>\n  </li>\n  <li>\n    <a href="#"><i class="icon-calendar"></i><span>My Calendar</span></a>\n  </li>\n  <li>\n    <a href="#"><i class="icon-settings"></i><span>Account Settings</span></a>\n  </li>\n  <li>\n    <a href="#"><i class="icon-logout"></i><span>Logout</span></a>\n  </li>\n</ul>\n');}return __p.join('');};
}).call(this);
(function() { this.JST || (this.JST = {}); this.JST["backbone/templates/partials/_widgets"] = function(obj){var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('<p class="menu-title widget-title">Folders <span class="pull-right"><a href="#" class="new-folder"> <i class="icon-plus"></i></a></span></p>\n<ul class="folders">\n  <li>\n    <a href="#"><i class="icon-doc c-primary"></i>My documents</a>\n  </li>\n  <li>\n    <a href="#"><i class="icon-picture"></i>My images</a>\n  </li>\n  <li><a href="#"><i class="icon-lock"></i>Secure data</a>\n  </li>\n  <li class="add-folder">\n    <input type="text" placeholder="Folder\'s name..." class="form-control input-sm">\n  </li>\n</ul>\n');}return __p.join('');};
}).call(this);
(function() { this.JST || (this.JST = {}); this.JST["backbone/templates/profile"] = function(obj){var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('<!--<div class="page-content page-app page-profil">-->\n    <div class="col-lg-10 col-md-9">\n        <div class="row profil-header" >\n            <div class="col-lg-9 col-md-12">\n                <div class="row">\n                    <div class="col-xs-4 profil-img">\n                        <img src="/assets/profil_page/profile-img-a3c775f405e2945f68f874ddb6bc258e.jpg" alt="profil">\n                    </div>\n                    <div class="col-xs-8 p-l-0 col-map">\n                        <div class="map" id="profil-map"></div>\n                    </div>\n                </div>\n                <div class="row header-name">\n                    <div class="col-xs-9">\n                        <div class="name">{{firstname}} {{lastname}} <i class="fa fa-check-circle"></i></div>\n                        <div class="profil-info"><i class="icon-present"></i>12 Feb 1986</div>\n                        <div class="profil-info"><i class="icon-call-end"></i>842 6547 2457</div>\n                    </div>\n                    <div class="col-xs-3 moments">\n                        <div class="num-moments c-primary countup" data-from="0" data-to="137" data-delay="2000" data-suffix="+" data-duration="6">0</div>\n                        <div class="text-center">Moments</div>\n                    </div>\n                </div>\n            </div>\n            <div class="col-lg-3 col-md-12 user-friends">\n                <div class="row m-r-0">\n                    <div class="col-sm-4">\n                        <img src="/assets/profil_page/friend1-d38898da0ec9fd787005c99e2aa1b2af.jpg" class="img-responsive" alt="friend 1">\n                    </div>\n                    <div class="col-sm-4">\n                        <img src="/assets/profil_page/friend2-d61cad1df499082431c91f25186317ed.jpg" class="img-responsive" alt="friend 2">\n                    </div>\n                    <div class="col-sm-4">\n                        <img src="/assets/profil_page/friend3-424d10abc0a0700e063dd4806d921b90.jpg" class="img-responsive" alt="friend 3">\n                    </div>\n                </div>\n                <div class="row m-r-0">\n                    <div class="col-sm-4">\n                        <img src="/assets/profil_page/friend4-fc687614f231326db4316f8e65d9931e.jpg" class="img-responsive" alt="friend 4">\n                    </div>\n                    <div class="col-sm-4">\n                        <img src="/assets/profil_page/friend5-c0a73858d5989ea4fabd129dd1ff24f6.jpg" class="img-responsive" alt="friend 5">\n                    </div>\n                    <div class="col-sm-4">\n                        <img src="/assets/profil_page/friend6-33175a03d2bd8f12839aea3263abafff.jpg" class="img-responsive" alt="friend 6">\n                    </div>\n                </div>\n                <div class="row m-r-0">\n                    <div class="col-sm-4">\n                        <img src="/assets/profil_page/friend7-37d9c2b1b6e7efafca04072907394994.jpg" class="img-responsive" alt="friend 7">\n                    </div>\n                    <div class="col-sm-4">\n                        <img src="/assets/profil_page/friend8-5c529e3d6b32609c9a080e7d35e9d5c1.jpg" class="img-responsive" alt="friend 8">\n                    </div>\n                    <div class="col-sm-4 bg-primary more-friends">\n                        <span class="num-friends">42</span>\n                        <p>Friends</p>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class="profil-content">\n            <div class="row">\n                <div class="col-md-7">\n                    <div class="row">\n                        <div class="col-md-12">\n                            <div class="item m-b-30">\n                                <div class="item-textarea">\n                                    <textarea  placeholder="What\'up?..." class="form-control form-white autosize" rows="5"></textarea>\n                                </div>\n                                <div class="item-footer clearfix">\n                                    <div class="footer-actions pull-left">\n                                        <i class="icon-rounded-marker"></i>\n                                        <i class="icon-rounded-camera"></i>\n                                        <i class="icon-rounded-paperclip-oblique"></i>\n                                        <i class="icon-rounded-alarm-clock"></i>\n                                    </div>\n                                    <button type="button" class="pull-right btn btn-primary btn-square">Send</button>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class="row">\n                        <div class="col-sm-5">\n                            <div class="item hover-effect">\n                                <div class="user">\n                                    <img src="/assets/profil_page/pics2-e3ae0b6dd70a33ff73e6823a3270e34b.jpg" class="img-responsive hover-img" alt="">\n                                    <img src="/assets/profil_page/friend8-5c529e3d6b32609c9a080e7d35e9d5c1.jpg" class="img-user" alt="picture 2">\n                                    <div class="info">\n                                        <div class="f-24">Adam Levin</div>\n                                        <div>\n                                            <div class="location"><i class="icon-pointer"></i> Salem, LA</div>\n                                            <div class="date"><i class="icon-clock"></i> 32min ago</div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class="comment">\n                                    Adversity has the effect of eliciting talents which in prosperous circumstances would have lain dormant.\n                                </div>\n                                <div class="more">\n                                    <div class="row">\n                                        <div class="col-sm-4 like liked">\n                                            <i class="fa fa-heart"></i> Like\n                                        </div>\n                                        <div class="col-sm-4 more-comments">\n                                            <div class="comment-number">\n                                                <i class="icon-bubble"></i> Comments <span class="pull-right badge badge-dark">6</span>\n                                            </div>\n                                        </div>\n                                        <div class="col-sm-4 more-share">\n                                            <i class="icon-share"></i> Share\n                                        </div>\n                                    </div>\n                                    <div class="row comments">\n                                        <div class="col-sm-12">\n                                            <ul>\n                                                <li class="clearfix">\n                                  <span class="pull-left">\n                                  <img src="/assets/profil_page/friend1-d38898da0ec9fd787005c99e2aa1b2af.jpg" alt="friend 1">\n                                  </span>\n                                                    <div class="clearfix">\n                                                        <div class="info">\n                                                            <div class="name"><strong class="primary-font">John Smith</strong></div>\n                                                            <div class="date">12 mins ago</div>\n                                                        </div>\n                                                        <p>\n                                                            Wow! Looks great!\n                                                        </p>\n                                                    </div>\n                                                </li>\n                                                <li class="clearfix">\n                                  <span class="pull-left">\n                                  <img src="/assets/profil_page/friend2-d61cad1df499082431c91f25186317ed.jpg" alt="friend 2">\n                                  </span>\n                                                    <div class="clearfix">\n                                                        <div class="info">\n                                                            <div class="name"><strong class="primary-font">John Smith</strong></div>\n                                                            <div class="date">12 mins ago</div>\n                                                        </div>\n                                                        <p>\n                                                            Hey! What\'s up here? Give me a call soon.\n                                                        </p>\n                                                    </div>\n                                                </li>\n                                            </ul>\n                                        </div>\n                                    </div>\n                                    <div class="row share">\n                                        <div class="share-facebook">\n                                            <i class="fa fa-facebook"></i>\n                                        </div>\n                                        <div class="share-twitter">\n                                            <i class="fa fa-twitter"></i>\n                                        </div>\n                                        <div class="share-google">\n                                            <i class="fa fa-google-plus"></i>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class="item hover-effect">\n                                <div class="user">\n                                    <img src="/assets/profil_page/pics3-ba2b20319b74dd9c3bfd691301de3e31.jpg" class="img-responsive hover-img" alt="">\n                                    <img src="/assets/profil_page/friend4-fc687614f231326db4316f8e65d9931e.jpg" class="img-user" alt="picture 2">\n                                    <div class="info">\n                                        <div class="f-24">Sarah Bones</div>\n                                        <div>\n                                            <div class="location"><i class="icon-pointer"></i> New York, NY</div>\n                                            <div class="date"><i class="icon-clock"></i> 14 hours ago</div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class="comment">\n                                    Learn from yesterday, live for today, hope for tomorrow. The important thing is not to stop questioning.\n                                </div>\n                                <div class="more">\n                                    <div class="row">\n                                        <div class="col-sm-4 like">\n                                            <i class="fa fa-heart"></i> Like\n                                        </div>\n                                        <div class="col-sm-4 more-comments">\n                                            <div class="comment-number">\n                                                <i class="icon-bubble"></i> Comments <span class="pull-right badge badge-dark">3</span>\n                                            </div>\n                                        </div>\n                                        <div class="col-sm-4 more-share">\n                                            <i class="icon-share"></i> Share\n                                        </div>\n                                    </div>\n                                    <div class="row comments">\n                                        <div class="col-sm-12">\n                                            <ul>\n                                                <li class="clearfix">\n                                  <span class="pull-left">\n                                  <img src="/assets/profil_page/friend5-c0a73858d5989ea4fabd129dd1ff24f6.jpg" alt="friend 1">\n                                  </span>\n                                                    <div class="clearfix">\n                                                        <div class="info">\n                                                            <div class="name"><strong class="primary-font">Anna Martin</strong></div>\n                                                            <div class="date">12 mins ago</div>\n                                                        </div>\n                                                        <p>\n                                                            Wow! Looks great!\n                                                        </p>\n                                                    </div>\n                                                </li>\n                                                <li class="clearfix">\n                                  <span class="pull-left">\n                                  <img src="/assets/profil_page/friend6-33175a03d2bd8f12839aea3263abafff.jpg" alt="friend 2">\n                                  </span>\n                                                    <div class="clearfix">\n                                                        <div class="info">\n                                                            <div class="name"><strong class="primary-font">John Smith</strong></div>\n                                                            <div class="date">12 mins ago</div>\n                                                        </div>\n                                                        <p>\n                                                            Hey! What\'s up here? Give me a call soon.\n                                                        </p>\n                                                    </div>\n                                                </li>\n                                            </ul>\n                                        </div>\n                                    </div>\n                                    <div class="row share">\n                                        <div class="share-facebook">\n                                            <i class="fa fa-facebook"></i>\n                                        </div>\n                                        <div class="share-twitter">\n                                            <i class="fa fa-twitter"></i>\n                                        </div>\n                                        <div class="share-google">\n                                            <i class="fa fa-google-plus"></i>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class="col-sm-7">\n                            <div class="item item-comment">\n                                <div class="user">\n                                    <img alt="Profile Image" src="/assets/profil_page/friend2-d61cad1df499082431c91f25186317ed.jpg">\n                                    <h5 class="name">Marta Stevens</h5>\n                                    <div class="clearfix">\n                                        <p class="time-icon"><i class="icon-calendar"></i></p>\n                                        <p class="place"><i class="icon-pointer"></i> NYC, New York</p>\n                                        <p class="time">41 min ago</p>\n                                    </div>\n                                    <div class="comment">Some pics of my last summer holydays</div>\n                                </div>\n                                <div class="widget-slider-img">\n                                    <div class="slick" data-fade="true" data-dots="false">\n                                        <div class="slide opacity-70">\n                                            <img src="/assets/gallery/4-7b016bc7eb1d15db07ea18f76809cd2b.jpg" alt="1">\n                                            <div class="text">\n                                                <p>Sun shining</p>\n                                            </div>\n                                        </div>\n                                        <div class="slide opacity-70">\n                                            <img src="/assets/gallery/2-97b5a37e91ea35dfd497ac9b033b9196.jpg" alt="1">\n                                            <div class="text">\n                                                <p>At the beach</p>\n                                            </div>\n                                        </div>\n                                        <div class="slide opacity-70">\n                                            <img src="/assets/gallery/3-574ad898d757296e04ecd42c1a0b3aa7.jpg" alt="3">\n                                            <div class="text">\n                                                <p>Field blee</p>\n                                            </div>\n                                        </div>\n                                        <div class="slide opacity-70">\n                                            <img src="/assets/gallery/7-f1480190f9f73d2e8c1d1b41d0613de2.jpg" alt="7">\n                                            <div class="text">\n                                                <p>When we took the boat</p>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class="item item-comment">\n                                <div class="user">\n                                    <img alt="Profile Image" src="/assets/profil_page/friend2-d61cad1df499082431c91f25186317ed.jpg">\n                                    <h5 class="name">Marta Stevens</h5>\n                                    <div class="clearfix">\n                                        <p class="time-icon"><i class="icon-calendar"></i></p>\n                                        <p class="place"><i class="icon-pointer"></i> NYC, New York</p>\n                                        <p class="time">12 hours ago</p>\n                                    </div>\n                                    <div class="comment">Do not worry about your difficulties in Mathematics. I can assure you mine are still greater.</div>\n                                    <div class="send">send from my Iphone</div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class="col-md-5">\n                    <div class="row">\n                        <div class="col-md-12 col-sm-6 col-xs-12">\n                            <div class="item hover-effect new-item">\n                                <div class="user">\n                                    <img src="/assets/profil_page/pics3-ba2b20319b74dd9c3bfd691301de3e31.jpg" class="img-responsive hover-img" alt="">\n                                    <img src="/assets/profil_page/friend4-fc687614f231326db4316f8e65d9931e.jpg" class="img-user" alt="picture 2">\n                                    <div class="info">\n                                        <div class="f-24">Sarah Bones</div>\n                                        <div>\n                                            <div class="location"><i class="icon-pointer"></i> New York, NY</div>\n                                            <div class="date"><i class="icon-clock"></i> 14 hours ago</div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class="comment">\n                                    You can design and create, and build the most wonderful place in the world. But it takes people to make the dream a reality.\n                                </div>\n                                <div class="more">\n                                    <div class="row">\n                                        <div class="col-sm-4 like">\n                                            <i class="fa fa-heart"></i> Like\n                                        </div>\n                                        <div class="col-sm-4 more-comments">\n                                            <div class="comment-number">\n                                                <i class="icon-bubble"></i> Comments <span class="pull-right badge badge-dark">3</span>\n                                            </div>\n                                        </div>\n                                        <div class="col-sm-4 more-share">\n                                            <i class="icon-share"></i> Share\n                                        </div>\n                                    </div>\n                                    <div class="row comments">\n                                        <div class="col-sm-12">\n                                            <ul>\n                                                <li class="clearfix">\n                                  <span class="pull-left">\n                                  <img src="/assets/profil_page/friend5-c0a73858d5989ea4fabd129dd1ff24f6.jpg" alt="friend 1">\n                                  </span>\n                                                    <div class="clearfix">\n                                                        <div class="info">\n                                                            <div class="name"><strong class="primary-font">Anna Martin</strong></div>\n                                                            <div class="date">12 mins ago</div>\n                                                        </div>\n                                                        <p>\n                                                            Wow! Looks great!\n                                                        </p>\n                                                    </div>\n                                                </li>\n                                                <li class="clearfix">\n                                  <span class="pull-left">\n                                  <img src="/assets/profil_page/friend6-33175a03d2bd8f12839aea3263abafff.jpg" alt="friend 2">\n                                  </span>\n                                                    <div class="clearfix">\n                                                        <div class="info">\n                                                            <div class="name"><strong class="primary-font">John Smith</strong></div>\n                                                            <div class="date">12 mins ago</div>\n                                                        </div>\n                                                        <p>\n                                                            Hey! What\'s up here? Give me a call soon.\n                                                        </p>\n                                                    </div>\n                                                </li>\n                                            </ul>\n                                        </div>\n                                    </div>\n                                    <div class="row share">\n                                        <div class="share-facebook">\n                                            <i class="fa fa-facebook"></i>\n                                        </div>\n                                        <div class="share-twitter">\n                                            <i class="fa fa-twitter"></i>\n                                        </div>\n                                        <div class="share-google">\n                                            <i class="fa fa-google-plus"></i>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class="item hover-effect">\n                                <div class="user">\n                                    <img src="/assets/profil_page/pics1-ebff5903db85aa142037e42d339475ea.jpg" class="img-responsive hover-img" alt="">\n                                    <img src="/assets/profil_page/friend7-37d9c2b1b6e7efafca04072907394994.jpg" class="img-user" alt="picture 2">\n                                    <div class="info">\n                                        <div class="f-24">Mark Addams</div>\n                                        <div>\n                                            <div class="location"><i class="icon-pointer"></i> London, UK</div>\n                                            <div class="date"><i class="icon-clock"></i> 49min ago</div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class="comment">\n                                    Perfection is not attainable, but if we chase perfection we can catch excellence.\n                                </div>\n                                <div class="more">\n                                    <div class="row">\n                                        <div class="col-sm-4 like">\n                                            <i class="fa fa-heart"></i> Like\n                                        </div>\n                                        <div class="col-sm-4 more-comments">\n                                            <div class="comment-number">\n                                                <i class="icon-bubble"></i> Comments\n                                            </div>\n                                        </div>\n                                        <div class="col-sm-4 more-share">\n                                            <i class="icon-share"></i> Share\n                                        </div>\n                                    </div>\n                                    <div class="row comments">\n                                        <div class="col-sm-12">\n                                            <ul>\n                                                <li class="clearfix">\n                                  <span class="pull-left">\n                                  <img src="/assets/profil_page/friend4-fc687614f231326db4316f8e65d9931e.jpg" alt="friend 1">\n                                  </span>\n                                                    <div class="clearfix">\n                                                        <div class="info">\n                                                            <div class="name"><strong class="primary-font">John Smith</strong></div>\n                                                            <div class="date">12 mins ago</div>\n                                                        </div>\n                                                        <p>\n                                                            Wow! Looks great!\n                                                        </p>\n                                                    </div>\n                                                </li>\n                                            </ul>\n                                        </div>\n                                    </div>\n                                    <div class="row share">\n                                        <div class="share-facebook">\n                                            <i class="fa fa-facebook"></i>\n                                        </div>\n                                        <div class="share-twitter">\n                                            <i class="fa fa-twitter"></i>\n                                        </div>\n                                        <div class="share-google">\n                                            <i class="fa fa-google-plus"></i>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class="col-md-12 col-sm-6 col-xs-12">\n                            <div class="item item-comment">\n                                <div class="user">\n                                    <img alt="Profile Image" src="/assets/profil_page/friend2-d61cad1df499082431c91f25186317ed.jpg">\n                                    <h5 class="name">Marta Stevens</h5>\n                                    <div class="clearfix">\n                                        <p class="time-icon"><i class="icon-calendar"></i></p>\n                                        <p class="place"><i class="icon-pointer"></i> NYC, New York</p>\n                                        <p class="time">12 hours ago</p>\n                                    </div>\n                                    <div class="comment">\n                                        <p class="c-primary m-b-0"><strong>Birthday Party on my yacht in Miami</strong></p>\n                                    </div>\n                                    <div class="item-event-detail">\n                                        <p>July 22 at 8:00pm <span class="separator">|</span> Miami, USA</p>\n                                    </div>\n                                </div>\n                                <div class="item-map">\n                                    <div id="item-map"></div>\n                                </div>\n                                <div class="more">\n                                    <div class="row">\n                                        <div class="col-sm-4 like">\n                                            <i class="fa fa-heart"></i> Like\n                                        </div>\n                                        <div class="col-sm-4 more-comments">\n                                            <div class="comment-number">\n                                                <i class="icon-bubble"></i> Comments\n                                            </div>\n                                        </div>\n                                        <div class="col-sm-4 more-share">\n                                            <i class="icon-share"></i> Share\n                                        </div>\n                                    </div>\n                                    <div class="row comments">\n                                        <div class="col-sm-12">\n                                            <ul>\n                                                <li class="clearfix">\n                                  <span class="pull-left">\n                                  <img src="/assets/profil_page/friend4-fc687614f231326db4316f8e65d9931e.jpg" alt="friend 1">\n                                  </span>\n                                                    <div class="clearfix">\n                                                        <div class="info">\n                                                            <div class="name"><strong class="primary-font">John Smith</strong></div>\n                                                            <div class="date">12 mins ago</div>\n                                                        </div>\n                                                        <p>\n                                                            Wow! Looks great!\n                                                        </p>\n                                                    </div>\n                                                </li>\n                                            </ul>\n                                        </div>\n                                    </div>\n                                    <div class="row share">\n                                        <div class="share-facebook">\n                                            <i class="fa fa-facebook"></i>\n                                        </div>\n                                        <div class="share-twitter">\n                                            <i class="fa fa-twitter"></i>\n                                        </div>\n                                        <div class="share-google">\n                                            <i class="fa fa-google-plus"></i>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class="col-lg-2 col-md-3 hidden-sm hidden-xs profil-right">\n        <div class="profil-sidebar-element">\n            <h3><strong>ABOUT ME</strong></h3>\n            <p>Mussum ipsum cacilds, vidis litro abertis. Consetis adipiscings elitis. Pra lá , depois divoltis pra quem é amistosis quis leo.</p>\n        </div>\n        <div class="profil-sidebar-element m-t-20">\n            <h3><strong>PERSONAL STATS</strong></h3>\n            <p class="c-gray m-t-0"><i>Last connection: 2 days ago</i>\n            </p>\n            <h3><strong>AVERAGE RATING</strong></h3>\n            <div id="stars" class="stars pull-left">\n                <span class="fa fa-star c-primary"></span>\n                <span class="fa fa-star c-primary"></span>\n                <span class="fa fa-star c-primary"></span>\n                <span class="fa fa-star c-primary"></span>\n                <span class="fa fa-star-o c-primary"></span>\n            </div>\n            <div class="sidebar-number pull-right">4/5</div>\n            <div class="clearfix"></div>\n            <h3><strong>MY SHARING</strong></h3>\n            <p class="m-t-0"><span class="c-primary"><strong>15</strong></span> Replies</p>\n            <p class="m-t-0"><span class="c-primary"><strong>8</strong></span> Messages</p>\n            <p class="m-t-0"><span class="c-primary"><strong>24</strong></span> Questions</p>\n        </div>\n        <div class="m-t-20">\n            <p>You and Bryan are not friend yet</p>\n            <button type="button" class="btn btn-block btn-primary bd-0 no-bd"><i class="icon-user"></i> Add to my friends</button>\n        </div>\n        <div class="m-t-60" style="width:100%">\n            <canvas id="profil-chart" height="450"></canvas>\n        </div>\n    </div>\n    <div class="footer">\n        <div class="copyright">\n            <p class="pull-left sm-pull-reset">\n                <span>Copyright <span class="copyright">©</span> 2016 </span>\n                <span>JSONCODES</span>.\n                <span>All rights reserved. </span>\n            </p>\n            <p class="pull-right sm-pull-reset">\n                <span><a href="#" class="m-r-10">Support</a> | <a href="#" class="m-l-10 m-r-10">Terms of use</a> | <a href="#" class="m-l-10">Privacy Policy</a></span>\n            </p>\n        </div>\n    </div>\n<!--</div>-->\n');}return __p.join('');};
}).call(this);
(function() { this.JST || (this.JST = {}); this.JST["backbone/templates/submenu_elements"] = function(obj){var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('<li class="nav-parent"><a href="#"><i class="icon-puzzle"></i> <span>Your menu</span> <span class="fa arrow"></span></a>\n  <ul class="children collapse">\n    <li><a href="builder-email.php">Submenu 1</a></li>\n    <li><a href="builder-page.php">Submenu 2</a></li>\n    <li><a href="builder-admin.php">Submenu 3</a></li>\n  </ul>\n</li>\n');}return __p.join('');};
}).call(this);
(function() { this.JST || (this.JST = {}); this.JST["backbone/templates/topbar_left"] = function(obj){var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('<div class="topnav">\n    <a class="menutoggle"><button class="menu__handle"><span>Menu</span></button></a>\n    <ul class="nav nav-horizontal">\n        <li class="active">\n          <a href="app-mailbox.php">\n            <span class="pull-right badge badge-primary">8</span><i class="icon-envelope"></i> <span>Menu 1</span>\n          </a>\n        </li>\n        <li><a href="email.html"><i class="icon-bar-chart"></i><span>Menu 2</span>\n        </a>\n        </li>\n        <li class="nav-parent">\n          <a href="#" data-toggle="dropdown" data-hover="dropdown" data-close-others="true" data-delay="30">\n            <i class="fa fa-list"></i>Menu 3<i class="icons-arrows-06"></i>\n          </a>\n          <ul class="dropdown-menu children">\n              <li><a href="#">Submenu 1</a></li>\n              <li><a href="#">Submenu 2</a></li>\n              <li><a href="#">Submenu 3</a></li>\n          </ul>\n        </li>\n        <li><a href="email.html"><i class="icon-notebook"></i> <span>Menu 4</span></a></li>\n    </ul>\n</div>\n');}return __p.join('');};
}).call(this);
(function() {
  var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  App.Models.User = (function(superClass) {
    extend(User, superClass);

    function User() {
      return User.__super__.constructor.apply(this, arguments);
    }

    User.prototype.paramRoot = 'users';

    User.prototype.urlRoot = '/users';

    return User;

  })(Backbone.Model);

  App.Collections.UsersCollection = (function(superClass) {
    extend(UsersCollection, superClass);

    function UsersCollection() {
      return UsersCollection.__super__.constructor.apply(this, arguments);
    }

    UsersCollection.prototype.model = App.Models.User;

    UsersCollection.prototype.url = '/users';

    return UsersCollection;

  })(Backbone.Collection);

}).call(this);
(function() {
  var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  App.Views.Base = (function(superClass) {
    var handleSidebarHide, handleSidebarRemove, handleSidebarSortable, is_RTL, oldIndex, sortablePortlets;

    extend(Base, superClass);

    function Base() {
      return Base.__super__.constructor.apply(this, arguments);
    }

    Base.prototype.logopanel = $('.logopanel');

    Base.prototype.topbar = $('.topbar');

    Base.prototype.sidebar = $('.sidebar');

    Base.prototype.sidebarFooter = $('.sidebar-footer');

    Base.prototype.content = document.querySelector('.page-content');

    Base.prototype.doc = document;

    Base.prototype.docEl = document.documentElement;

    Base.prototype.$sidebar = $('.sidebar');

    Base.prototype.$mainContent = $('.main-content');

    Base.prototype.$sidebarWidth = $('.sidebar').width();

    Base.prototype.is_RTL = false;

    Base.prototype.$body = $('body');

    Base.prototype.$pageContent = $('.page-content');

    Base.prototype.$loader = $('#preloader');

    Base.prototype.docHeight = $(Base.doc).height();

    Base.prototype.windowHeight = $(window).height();

    Base.prototype.topbarWidth = $('.topbar').width();

    Base.prototype.headerLeftWidth = $('.header-left').width();

    Base.prototype.headerRightWidth = $('.header-right').width();

    Base.prototype.start = 0;

    Base.prototype.delta = 0;

    Base.prototype.end = 0;


    /****  On Resize Functions  *** */

    Base.prototype.unWrap = function(r) {
      return r.$el.html($(this.el).html());
    };

    Base.prototype.initialize = function() {
      var CurrentDate, message_detail, messages_list, notes, othis, toggleLayout;
      this.topbar = $(this.topbar);
      this.handleboxedLayout();
      othis = this;
      setTimeout((function() {
        othis.handleboxedLayout();
      }), 100);
      if ($('body').hasClass('sidebar-hover')) {
        this.sidebarHover();
      }
      $('[data-toggle]').on('click', function(event) {
        return event.preventDefault();
      });
      toggleLayout = $(this).data('toggle');
      if (toggleLayout === 'sidebar-behaviour') {
        othis.toggleSidebar();
      }
      if (toggleLayout === 'submenu') {
        othis.toggleSubmenuHover();
      }
      if (toggleLayout === 'sidebar-collapsed') {
        othis.collapsedSidebar();
      }
      if (toggleLayout === 'sidebar-hover') {
        othis.toggleSidebarHover();
      }
      if (toggleLayout === 'boxed') {
        othis.toggleboxedLayout();
      }
      if (toggleLayout === 'topbar') {
        othis.toggleTopbar();
      }
      return;
      this.sortablePortlets();
      this.sortableTable();
      this.nestable();
      this.showTooltip();
      this.popover();
      this.colorPicker();
      this.numericStepper();
      this.iosSwitch();
      this.sliderIOS();
      this.rangeSlider();
      this.buttonLoader();
      this.inputSelect();
      this.inputTags();
      this.tableResponsive();
      this.tableDynamic();
      this.handleiCheck();
      this.timepicker();
      this.datepicker();
      this.bDatepicker();
      this.multiDatesPicker();
      this.datetimepicker();
      this.rating();
      this.magnificPopup();
      this.editorSummernote();
      this.editorCKE();
      this.slider();
      this.liveTile();
      this.formWizard();
      this.formValidation();
      this.barCharts();
      this.animateNumber();
      this.textareaAutosize();
      $('.autogrow').autogrow();
      this.createSideScroll();
      this.toggleSidebarMenu();
      this.customScroll();
      this.handleSidebarSortable();
      this.sidebarWidgets();
      this.reposition_topnav();
      this.handleSidebarRemove();
      this.handleSidebarHide();
      this.changeUserStatut();
      this.handlePanelAction();
      this.scrollTop();
      this.sidebarBehaviour();
      this.detectIE();
      this.quickviewSidebar();
      this.quickviewHeight();
      if ($('body').hasClass('sidebar-hover')) {
        this.sidebarHover();
      }
      $(window).load(function() {
        'use strict';
        setTimeout((function() {
          $('.loader-overlay').addClass('loaded');
          $('body > section').animate({
            opacity: 1
          }, 400);
        }), 500);
      });
      $(window).resize(function() {
        this.noteTextarea();
        this.ListNotesHeight();
        othis = this;
        setTimeout((function() {
          othis.handleboxedLayout();
        }), 100);
      });
      $(window).bind('resize', function(e) {
        window.resizeEvt;
        $(window).resize(function() {
          clearTimeout(window.resizeEvt);
          window.resizeEvt = setTimeout((function() {
            tableResponsive();
          }), 250);
        });
      });
      if ($('.widget-weather').length) {
        this.widgetWeather();
      }
      notes = notes || {};

      /* Display current datetime and hours */
      CurrentDate = function(container) {
        var ampm, date, day, dayNames, hours, minutes, month, monthNames, strTime;
        monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        date = new Date;
        date.setDate(date.getDate() + 1);
        day = date.getDate();
        month = date.getMonth();
        hours = date.getHours();
        minutes = date.getMinutes();
        ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        strTime = dayNames[date.getDay()] + ' ' + date.getDate() + ' ' + monthNames[date.getMonth()] + ', ' + hours + ':' + minutes + ' ' + ampm;
        $(container).text(strTime);
      };
      notes.$container = $('#notes');
      $.extend(notes, {
        noTitleText: 'No title',
        noDescriptionText: '(No content)',
        $currentNote: $(null),
        $currentNoteTitle: $(null),
        $currentNoteDescription: $(null),
        addNote: function() {
          var $note;
          $note = $('<div class="note-item media current fade in"><button class="close">×</button><div><div><p class="note-name">Untitled</p></div><p class="note-desc hidden">No content.</p><p><small class="note-date"></small></p></div></div>');
          notes.$notesList.prepend($note);
          CurrentDate('.note-date');
          this.customScroll();
        },
        checkCurrentNote: function() {
          var $current_note, $note_title, $space, completeNote, first;
          $current_note = notes.$notesList.find('div.current').first();
          if ($current_note.length) {
            notes.$currentNote = $current_note;
            notes.$currentNoteTitle = $current_note.find('.note-name');
            notes.$currentNoteDescription = $current_note.find('.note-desc');
            $space = notes.$currentNoteTitle.text().indexOf('\u000d');
            $note_title = notes.$currentNoteTitle.html();
            if ($space === -1) {
              $note_title = notes.$currentNoteTitle.append('&#13;').html();
            }
            completeNote = $note_title + $.trim(notes.$currentNoteDescription.html());
            $space = $note_title.indexOf('\u000d');
            notes.$writeNote.val(completeNote).trigger('autosize.resize');
          } else {
            first = notes.$notesList.find('div:first:not(.no-notes)');
            if (first.length) {
              first.addClass('current');
              notes.checkCurrentNote();
            } else {
              notes.$writeNote.val('');
              notes.$currentNote = $(null);
              notes.$currentNoteTitle = $(null);
              notes.$currentNoteDescription = $(null);
            }
          }
        },
        updateCurrentNoteText: function() {
          var _text, currline, description, i, text, title;
          text = $.trim(notes.$writeNote.val());
          if (notes.$currentNote.length) {
            title = '';
            description = '';
            if (text.length) {
              _text = text.split('\n');
              currline = 1;
              i = 0;
              while (i < _text.length) {
                if (_text[i]) {
                  if (currline === 1) {
                    title = _text[i];
                  } else if (currline === 2) {
                    description = _text[i];
                  }
                  currline++;
                }
                if (currline > 2) {
                  break;
                }
                i++;
              }
            }
            notes.$currentNoteTitle.text(title.length ? title : notes.noTitleText);
            notes.$currentNoteDescription.text(description.length ? description : notes.noDescriptionText);
          } else if (text.length) {
            notes.addNote();
          }
        }
      });
      if (notes.$container.length > 0) {
        notes.$notesList = notes.$container.find('#notes-list');
        notes.$txtContainer = notes.$container.find('.note-write');
        notes.$writeNote = notes.$txtContainer.find('textarea');
        notes.$addNote = notes.$container.find('#add-note');
        notes.$addNote.on('click', function(ev) {
          notes.addNote();
          notes.$writeNote.val('');
        });
        $('#notes-list').on('click', '.close', function() {
          var $currentNote;
          $currentNote = $(this).parent();
          $currentNote.addClass('animated bounceOutRight');
          window.setTimeout((function() {
            $currentNote.remove();
          }), 300);
        });
        $('#notes-list').on('click', '.note-item > div', function() {
          $('.list-notes').removeClass('current');
          $('.detail-note').addClass('current');
          CurrentDate('.note-subtitle');
        });
        $('.note-back').on('click', function() {
          $('.list-notes').addClass('current');
          $('.detail-note').removeClass('current');
        });
        notes.$writeNote.on('keyup', function(ev) {
          notes.updateCurrentNoteText();
        });
        notes.checkCurrentNote();
        notes.$notesList.on('click', '.note-item', function(ev) {
          ev.preventDefault();
          notes.$notesList.find('.note-item').removeClass('current');
          $(this).addClass('current');
          notes.checkCurrentNote();
        });
      }
      messages_list = $('.list-notes');
      message_detail = $('.detail-note');
      noteTextarea();
      ListNotesHeight();
      $('#go-back').on('click', function() {
        $('.list-notes').fadeIn();
        $('.detail-note').css('padding-left', '0');
        $('.detail-note').fadeOut();
      });
    };

    Base.prototype.noteTextarea = function() {
      $('.note-write textarea').height($(window).height() - 108);
    };

    Base.prototype.ListNotesHeight = function() {
      $('.list-notes').height($(window).height() - 50);
    };


    /****  Variables Initiation  *** */


    /**** Color Picker *** */

    Base.prototype.colorPicker = function() {
      if ($('.color-picker').length && $.fn.spectrum) {
        $('.color-picker').each(function() {
          var current_palette;
          current_palette = '';
          if ($(this).data('palette')) {
            current_palette = $(this).data('palette');
          }
          $(this).spectrum({
            color: $(this).data('min') ? $(this).data('min') : '#D15ADE',
            showInput: $(this).data('show-input') ? $(this).data('show-input') : false,
            showPalette: $(this).data('show-palette') ? $(this).data('show-palette') : false,
            showPaletteOnly: $(this).data('show-palette-only') ? $(this).data('show-palette-only') : false,
            showAlpha: $(this).data('show-alpha') ? $(this).data('show-alpha') : false,
            palette: $(this).data('palette') ? $(this).data('palette') : [[current_palette]]
          });
          $(this).show();
        });
      }
    };


    /**** Numeric Stepper *** */

    Base.prototype.numericStepper = function() {
      if ($('.numeric-stepper').length && $.fn.TouchSpin) {
        $('.numeric-stepper').each(function() {
          $(this).TouchSpin({
            min: $(this).data('min') ? $(this).data('min') : 0,
            max: $(this).data('max') ? $(this).data('max') : 100,
            step: $(this).data('step') ? $(this).data('step') : 0.1,
            decimals: $(this).data('decimals') ? $(this).data('decimals') : 0,
            boostat: $(this).data('boostat') ? $(this).data('boostat') : 5,
            maxboostedstep: $(this).data('maxboostedstep') ? $(this).data('maxboostedstep') : 10,
            verticalbuttons: $(this).data('vertical') ? $(this).data('vertical') : false,
            buttondown_class: $(this).data('btn-before') ? 'btn btn-' + $(this).data('btn-before') : 'btn btn-default',
            buttonup_class: $(this).data('btn-after') ? 'btn btn-' + $(this).data('btn-after') : 'btn btn-default'
          });
        });
      }
    };


    /**** Sortable Portlets *** */

    sortablePortlets = function() {
      if ($('.portlets').length && $.fn.sortable) {
        $('.portlets').sortable({
          connectWith: '.portlets',
          handle: '.panel-header',
          items: 'div.panel',
          placeholder: 'panel-placeholder',
          opacity: 0.5,
          dropOnEmpty: true,
          forcePlaceholderSize: true,
          receive: function(event, ui) {
            $('body').trigger('resize');
          }
        });
      }
    };

    Base.prototype.hideLoader = function() {
      'use strict';
      setTimeout((function() {
        $('.loader-overlay').addClass('loaded');
        $('body > section').animate({
          opacity: 1
        }, 400);
      }), 500);
    };


    /**** Nestable List *** */

    Base.prototype.nestable = function() {
      if ($('.nestable').length && $.fn.nestable) {
        $('.nestable').nestable();
      }
    };


    /**** Sortable Table *** */

    Base.prototype.sortableTable = function() {
      if ($('.sortable_table').length && $.fn.sortable) {
        $('.sortable_table').sortable({
          itemPath: '> tbody',
          itemSelector: 'tbody tr',
          placeholder: '<tr class="placeholder"/>'
        });
      }
    };


    /****  Show Tooltip  *** */

    Base.prototype.showTooltip = function() {
      if ($('[data-rel="tooltip"]').length && $.fn.tooltip) {
        $('[data-rel="tooltip"]').tooltip();
      }
    };


    /****  Show Popover  *** */

    Base.prototype.popover = function() {
      if ($('[rel="popover"]').length && $.fn.popover) {
        $('[rel="popover"]').popover({
          trigger: 'hover'
        });
        $('[rel="popover_dark"]').popover({
          template: '<div class="popover popover-dark"><div class="arrow"></div><h3 class="popover-title popover-title"></h3><div class="popover-content popover-content"></div></div>',
          trigger: 'hover'
        });
      }
    };


    /****  Table progress bar  *** */

    Base.prototype.progressBar = function() {
      if ($('.progress-bar').length && $.fn.progressbar) {
        $('.progress-bar').progressbar();
      }
    };


    /**** IOS Switch  *** */


    /* ========================================================== */


    /* HOVER SCRIPTS */


    /* ========================================================= */


    /* Sidebar Hover */

    Base.prototype.sidebarHover = function() {
      if ($('.logopanel2').length === 0) {
        $('.topnav').prepend('<div class="logopanel2"><h1><a href="dashboard.html"></a></h1></div>');
      }
      if ($('body').hasClass('rtl')) {
        this.sidebar.css('margin-left', '').css('margin-right', '');
        $('.sidebar .sidebar-footer').css('left', '').css('right', '');
        $('html').on('mouseenter', 'body.rtl.sidebar-hover .sidebar', function() {
          TweenMax.to(this.sidebar, 0.35, {
            css: {
              marginRight: 0,
              opacity: 1
            },
            ease: Circ.easeInOut,
            delay: 0
          });
          TweenMax.to($('.sidebar .sidebar-footer'), 0.35, {
            css: {
              right: 0,
              opacity: 1
            },
            ease: Circ.easeInOut,
            delay: 0
          });
        });
        $('html').on('mouseleave', 'body.rtl.sidebar-hover .sidebar', function() {
          if (this.body.hasClass('sidebar-condensed')) {
            TweenMax.to(this.sidebar, 0.35, {
              css: {
                marginRight: -170,
                opacity: 0
              },
              ease: Circ.easeInOut,
              delay: 0
            });
            TweenMax.to($('.sidebar .sidebar-footer'), 0.35, {
              css: {
                right: -170,
                opacity: 0
              },
              ease: Circ.easeInOut,
              delay: 0
            });
          } else if (this.body.hasClass('sidebar-light')) {
            TweenMax.to(this.sidebar, 0.35, {
              css: {
                marginRight: -220,
                opacity: 0
              },
              ease: Circ.easeInOut,
              delay: 0
            });
            TweenMax.to($('.sidebar .sidebar-footer'), 0.35, {
              css: {
                right: -220,
                opacity: 0
              },
              ease: Circ.easeInOut,
              delay: 0
            });
          } else {
            TweenMax.to(this.sidebar, 0.35, {
              css: {
                marginRight: -220,
                opacity: 0
              },
              ease: Circ.easeInOut,
              delay: 0
            });
            TweenMax.to($('.sidebar .sidebar-footer'), 0.35, {
              css: {
                right: -220,
                opacity: 0
              },
              ease: Circ.easeInOut,
              delay: 0
            });
          }
        });
      }
      if (!$('body').hasClass('rtl')) {
        $('html').on('mouseenter', 'body:not(.rtl).sidebar-hover .sidebar', function() {
          TweenMax.to(this.sidebar, 0.35, {
            css: {
              marginLeft: 0,
              opacity: 1
            },
            ease: Circ.easeInOut,
            delay: 0
          });
          TweenMax.to($('.sidebar .sidebar-footer'), 0.35, {
            css: {
              left: 0,
              opacity: 1
            },
            ease: Circ.easeInOut,
            delay: 0
          });
        });
        $('html').on('mouseleave', 'body:not(.rtl).sidebar-hover .sidebar', function() {
          if (this.body.hasClass('sidebar-condensed')) {
            TweenMax.to(this.sidebar, 0.35, {
              css: {
                marginLeft: -170,
                opacity: 0
              },
              ease: Circ.easeInOut,
              delay: 0
            });
            TweenMax.to($('.sidebar .sidebar-footer'), 0.35, {
              css: {
                left: -170,
                opacity: 0
              },
              ease: Circ.easeInOut,
              delay: 0
            });
          } else if (this.body.hasClass('sidebar-light')) {
            TweenMax.to(this.sidebar, 0.35, {
              css: {
                marginLeft: -220,
                opacity: 0
              },
              ease: Circ.easeInOut,
              delay: 0
            });
            TweenMax.to($('.sidebar .sidebar-footer'), 0.35, {
              css: {
                left: -220,
                opacity: 0
              },
              ease: Circ.easeInOut,
              delay: 0
            });
          } else {
            TweenMax.to(this.sidebar, 0.35, {
              css: {
                marginLeft: -220,
                opacity: 0
              },
              ease: Circ.easeInOut,
              delay: 0
            });
            TweenMax.to($('.sidebar .sidebar-footer'), 0.35, {
              css: {
                left: -220,
                opacity: 0
              },
              ease: Circ.easeInOut,
              delay: 0
            });
          }
        });
      }
    };

    Base.prototype.widgetWeather = function() {
      var city, icon_type_1, icon_type_2, icon_type_3, icon_type_4, icon_type_today, myTimeout, today_day, weatherWidget;
      weatherWidget = '<div class="panel-header background-primary"><h3><i class="icon-30"></i> <strong>Weather</strong> Widget</h3></div><div class="weather panel-content" class="widget-container widget-weather boxed"><div class="weather-highlighted">';
      weatherWidget += '<div class="day-0 weather-item clearfix active"><canvas id="day-0-icon" class="m-t-15" width="64" height="64"></canvas><div class="inner"><strong class="today-temp-low"></strong><span class="weather-currently"></span><span class="today-temp"></span></div></div>';
      weatherWidget += '<div class="day-1 weather-item clearfix"><canvas id="day-1-icon" class="m-t-15" width="64" height="64"></canvas><div class="inner"><strong class="1-days-temp-low"></strong><span class="one-days-text"></span><span class="1-days-temp"></span></div></div>';
      weatherWidget += '<div class="day-2 weather-item clearfix"><canvas id="day-2-icon" class="m-t-15" width="64" height="64"></canvas><div class="inner"><strong class="2-days-temp-low"></strong><span class="two-days-text"></span><span class="2-days-temp"></span></div></div>';
      weatherWidget += '<div class="day-3 weather-item clearfix"><canvas id="day-3-icon" class="m-t-15" width="64" height="64"></canvas><div class="inner"><strong class="3-days-temp-low"></strong><span class="three-days-text"></span><span class="3-days-temp"></span></div></div>';
      weatherWidget += '<div class="day-4 weather-item clearfix"><canvas id="day-4-icon" class="m-t-15" width="64" height="64"></canvas><div class="inner"><strong class="4-days-temp-low"></strong><span class="four-days-text"></span><span class="4-days-temp"></span></div></div>';
      weatherWidget += '</div><div class="weather-location clearfix"><strong></strong>';
      weatherWidget += '<div class="weather-search-form"><input type="text" name="search2" value="" id="city-form" class="weather-search-field" placeholder="Try me!"><input type="submit" value="" class="btn weather-search-submit" name="search-send2"></div></div><ul class="weather-forecast clearfix">';
      weatherWidget += '<li class="first"><a id="day-0" class="today-day active" href="javascript:;"><strong>dd</strong><span class="today-img"></span><span class="today-temp-low"></span></a></li>';
      weatherWidget += '<li><a id="day-1" class="1-days-day" href="javascript:;"><strong></strong><span class="1-days-image"></span><span class="1-days-temp-low"></span></a></li>';
      weatherWidget += '<li><a id="day-2" class="2-days-day" href="javascript:;"><strong></strong><span class="2-days-image"></span><span class="2-days-temp-low"></span></a></li>';
      weatherWidget += '<li><a id="day-3" href="javascript:;" class="3-days-day"><strong></strong><span class="3-days-image"></span><span class="3-days-temp-low"></span></a></li>';
      weatherWidget += '<li class="last"><a id="day-4" href="javascript:;" class="4-days-day"><strong></strong><span class="4-days-image"></span><span class="4-days-temp-low"></span></a></li></ul></div>';
      $('.widget-weather').html('');
      $('.widget-weather').append(weatherWidget);
      $('.widget-weather').height($('.widget-weather .panel-header').height() + $('.weather').height() + 80);
      $('.weather-forecast li a').on('click', function() {
        var day;
        day = $(this).attr('id');
        $('.weather-forecast li a, .weather-item').removeClass('active');
        $(this).addClass('active');
        $('.weather-item.' + day).addClass('active');
      });

      /* We initiate widget with a city (can be changed) */
      city = 'New York';
      today_day = '';
      icon_type_today = icon_type_1 = icon_type_2 = icon_type_3 = icon_type_4 = 'partly-cloudy-day';
      $.simpleWeather({
        location: city,
        woeid: '',
        unit: 'f',
        success: function(weather) {
          var i, icons, list, region, tomorrow_date, weather_icon;
          city = weather.city;
          region = weather.country;
          tomorrow_date = weather.forecast[0].date;
          weather_icon = '<i class="icon-' + weather.code + '"></i>';
          $('.weather-location strong').html(city);
          if (weather.forecast[1].day === 'Sun') {
            today_day = 'Sat';
          }
          if (weather.forecast[1].day === 'Mon') {
            today_day = 'Sun';
          }
          if (weather.forecast[1].day === 'Tue') {
            today_day = 'Mon';
          }
          if (weather.forecast[1].day === 'Wed') {
            today_day = 'Tue';
          }
          if (weather.forecast[1].day === 'Thu') {
            today_day = 'Wed';
          }
          if (weather.forecast[1].day === 'Fri') {
            today_day = 'Thu';
          }
          if (weather.forecast[1].day === 'Sat') {
            today_day = 'Fri';
          }
          $('.today-day strong').html(today_day);
          $('.weather-currently').html(weather.currently);
          $('.today-img').html('<i class="big-img-weather icon-' + weather.code + '"></i>');
          $('.today-temp-low').html(weather.low + '°');
          $('.today-temp').html(weather.low + '° / ' + weather.high + '°');
          $('.weather-region').html(region);
          $('.weather-day').html(weather.forecast[1].day);
          $('.weather-icon').html(weather_icon);
          $('.1-days-day strong').html(weather.forecast[1].day);
          $('.one-days-text').html(weather.forecast[1].forecast);
          $('.1-days-image').html('<i class="icon-' + weather.forecast[1].code + '"></i>');
          $('.1-days-temp-low').html(weather.forecast[1].low + '°');
          $('.1-days-temp').html(weather.forecast[1].low + '° / ' + weather.forecast[1].high + '°');
          $('.2-days-day strong').html(weather.forecast[2].day);
          $('.two-days-text').html(weather.forecast[2].forecast);
          $('.2-days-image').html('<i class="icon-' + weather.forecast[2].code + '"></i>');
          $('.2-days-temp-low').html(weather.forecast[2].low + '°');
          $('.2-days-temp').html(weather.forecast[2].low + '° / ' + weather.forecast[2].high + '°');
          $('.3-days-day strong').html(weather.forecast[3].day);
          $('.three-days-text').html(weather.forecast[3].forecast);
          $('.3-days-image').html('<i class="icon-' + weather.forecast[3].code + '"></i>');
          $('.3-days-temp-low').html(weather.forecast[3].low + '°');
          $('.3-days-temp').html(weather.forecast[3].low + '° / ' + weather.forecast[3].high + '°');
          $('.4-days-day strong').html(weather.forecast[4].day);
          $('.four-days-text').html(weather.forecast[4].forecast);
          $('.4-days-image').html('<i class="icon-' + weather.forecast[4].code + '"></i>');
          $('.4-days-temp-low').html(weather.forecast[4].low + '°');
          $('.4-days-temp').html(weather.forecast[4].low + '° / ' + weather.forecast[4].high + '°');
          if (weather.code === 31 || weather.code === 32 || weather.code === 33 || weather.code === 34 || weather.code === 36) {
            icon_type_today = 'clear-day';
          }
          if (weather.code === 13 || weather.code === 14 || weather.code === 15 || weather.code === 16) {
            icon_type_today = 'snow';
          }
          if (weather.code === 25 || weather.code === 26 || weather.code === 27 || weather.code === 28 || weather.code === 29 || weather.code === 30) {
            icon_type_today = 'cloudy';
          }
          if (weather.code === 5 || weather.code === 6 || weather.code === 10 || weather.code === 11 || weather.code === 12 || weather.code === 35) {
            icon_type_today = 'rain';
          }
          if (weather.code === 20) {
            icon_type_today = 'fog';
          }
          if (weather.code === 32) {
            icon_type_today = 'partly-cloudy-day';
          }
          if (weather.code === 29) {
            icon_type_today = 'partly-cloudy-night';
          }
          if (weather.code === 24) {
            icon_type_today = 'wind';
          }
          if (weather.code === 18) {
            icon_type_today = 'sleet';
          }
          if (weather.forecast[1].code === 31 || weather.forecast[1].code === 32 || weather.forecast[1].code === 33 || weather.forecast[1].code === 34 || weather.forecast[1].code === 36) {
            icon_type_1 = 'clear-day';
          }
          if (weather.forecast[1].code === 13 || weather.forecast[1].code === 14 || weather.forecast[1].code === 15 || weather.forecast[1].code === 16) {
            icon_type_1 = 'snow';
          }
          if (weather.forecast[1].code === 25 || weather.forecast[1].code === 26 || weather.forecast[1].code === 27 || weather.forecast[1].code === 28) {
            icon_type_1 = 'cloudy';
          }
          if (weather.forecast[1].code === 5 || weather.forecast[1].code === 6 || weather.forecast[1].code === 10 || weather.forecast[1].code === 11 || weather.forecast[1].code === 12 || weather.forecast[1].code === 35) {
            icon_type_1 = 'rain';
          }
          if (weather.forecast[1].code === 20) {
            icon_type_1 = 'fog';
          }
          if (weather.forecast[1].code === 30) {
            icon_type_1 = 'partly-cloudy-day';
          }
          if (weather.forecast[1].code === 29) {
            icon_type_1 = 'partly-cloudy-night';
          }
          if (weather.forecast[1].code === 24) {
            icon_type_1 = 'wind';
          }
          if (weather.forecast[1].code === 18) {
            icon_type_1 = 'sleet';
          }
          if (weather.forecast[2].code === 31 || weather.forecast[2].code === 32 || weather.forecast[2].code === 33 || weather.forecast[2].code === 34 || weather.forecast[2].code === 36) {
            icon_type_2 = 'clear-day';
          }
          if (weather.forecast[2].code === 13 || weather.forecast[2].code === 14 || weather.forecast[2].code === 15 || weather.forecast[2].code === 16) {
            icon_type_2 = 'snow';
          }
          if (weather.forecast[2].code === 25 || weather.forecast[2].code === 26 || weather.forecast[2].code === 27 || weather.forecast[2].code === 28) {
            icon_type_2 = 'cloudy';
          }
          if (weather.forecast[2].code === 5 || weather.forecast[2].code === 6 || weather.forecast[2].code === 10 || weather.forecast[2].code === 11 || weather.forecast[2].code === 12 || weather.forecast[2].code === 35) {
            icon_type_2 = 'rain';
          }
          if (weather.forecast[2].code === 20) {
            icon_type_2 = 'fog';
          }
          if (weather.forecast[2].code === 30) {
            icon_type_2 = 'partly-cloudy-day';
          }
          if (weather.forecast[2].code === 29) {
            icon_type_2 = 'partly-cloudy-night';
          }
          if (weather.forecast[2].code === 24) {
            icon_type_2 = 'wind';
          }
          if (weather.forecast[2].code === 18) {
            icon_type_2 = 'sleet';
          }
          if (weather.forecast[3].code === 31 || weather.forecast[3].code === 32 || weather.forecast[3].code === 33 || weather.forecast[3].code === 34 || weather.forecast[3].code === 36) {
            icon_type_3 = 'clear-day';
          }
          if (weather.forecast[3].code === 13 || weather.forecast[3].code === 14 || weather.forecast[3].code === 15 || weather.forecast[3].code === 16) {
            icon_type_3 = 'snow';
          }
          if (weather.forecast[3].code === 25 || weather.forecast[3].code === 26 || weather.forecast[3].code === 27 || weather.forecast[3].code === 28) {
            icon_type_3 = 'cloudy';
          }
          if (weather.forecast[3].code === 5 || weather.forecast[3].code === 6 || weather.forecast[3].code === 10 || weather.forecast[3].code === 11 || weather.forecast[3].code === 12 || weather.forecast[3].code === 356) {
            icon_type_3 = 'rain';
          }
          if (weather.forecast[3].code === 20) {
            icon_type_3 = 'fog';
          }
          if (weather.forecast[3].code === 30) {
            icon_type_3 = 'partly-cloudy-day';
          }
          if (weather.forecast[3].code === 29) {
            icon_type_3 = 'partly-cloudy-night';
          }
          if (weather.forecast[3].code === 24) {
            icon_type_3 = 'wind';
          }
          if (weather.forecast[3].code === 18) {
            icon_type_3 = 'sleet';
          }
          if (weather.forecast[4].code === 31 || weather.forecast[4].code === 32 || weather.forecast[4].code === 33 || weather.forecast[4].code === 33) {
            icon_type_4 = 'clear-day';
          }
          if (weather.forecast[4].code === 13 || weather.forecast[4].code === 14 || weather.forecast[4].code === 15 || weather.forecast[4].code === 16) {
            icon_type_4 = 'snow';
          }
          if (weather.forecast[4].code === 25 || weather.forecast[4].code === 26 || weather.forecast[4].code === 27 || weather.forecast[4].code === 28) {
            icon_type_4 = 'cloudy';
          }
          if (weather.forecast[4].code === 5 || weather.forecast[4].code === 6 || weather.forecast[4].code === 10 || weather.forecast[4].code === 11 || weather.forecast[4].code === 12 || weather.forecast[4].code === 35) {
            icon_type_4 = 'rain';
          }
          if (weather.forecast[4].code === 20) {
            icon_type_4 = 'fog';
          }
          if (weather.forecast[4].code === 30) {
            icon_type_4 = 'partly-cloudy-day';
          }
          if (weather.forecast[4].code === 29) {
            icon_type_4 = 'partly-cloudy-night';
          }
          if (weather.forecast[4].code === 24) {
            icon_type_4 = 'wind';
          }
          if (weather.forecast[4].code === 18) {
            icon_type_4 = 'sleet';
          }
          icons = new Skycons;
          list = ['clear-day', 'clear-night', 'partly-cloudy-day', 'partly-cloudy-night', 'cloudy', 'rain', 'sleet', 'snow', 'wind', 'fog'];
          i = void 0;
          i = list.length;
          while (i--) {
            icons.set(list[i], list[i]);
          }
          icons.set('day-0-icon', icon_type_today);
          icons.set('day-1-icon', icon_type_1);
          icons.set('day-2-icon', icon_type_2);
          icons.set('day-3-icon', icon_type_3);
          icons.set('day-4-icon', icon_type_4);
          icons.play();
        }
      });

      /* We get city from input on change */
      $('#city-form').change(function(e) {
        e.preventDefault;
        city = document.getElementById('city-form').value;
        $.simpleWeather({
          location: city,
          woeid: '',
          unit: 'f',
          success: function(weather) {
            var i, icons, list, region, tomorrow_date, weather_icon;
            city = weather.city;
            region = weather.country;
            tomorrow_date = weather.forecast[0].date;
            weather_icon = '<i class="icon-' + weather.code + '"></i>';
            $('.weather-location strong').html(city);
            if (weather.forecast[1].day === 'Sun') {
              today_day = 'Sat';
            }
            if (weather.forecast[1].day === 'Mon') {
              today_day = 'Sun';
            }
            if (weather.forecast[1].day === 'Tue') {
              today_day = 'Mon';
            }
            if (weather.forecast[1].day === 'Wed') {
              today_day = 'Tue';
            }
            if (weather.forecast[1].day === 'Thu') {
              today_day = 'Wed';
            }
            if (weather.forecast[1].day === 'Fri') {
              today_day = 'Thu';
            }
            if (weather.forecast[1].day === 'Sat') {
              today_day = 'Fri';
            }
            $('.today-day strong').html(today_day);
            $('.weather-currently').html(weather.currently);
            $('.today-img').html('<i class="big-img-weather icon-' + weather.code + '"></i>');
            $('.today-temp-low').html(weather.low + '°');
            $('.today-temp').html(weather.low + '° / ' + weather.high + '°');
            $('.weather-region').html(region);
            $('.weather-day').html(weather.forecast[1].day);
            $('.weather-icon').html(weather_icon);
            $('.1-days-day strong').html(weather.forecast[1].day);
            $('.one-days-text').html(weather.forecast[1].forecast);
            $('.1-days-image').html('<i class="icon-' + weather.forecast[1].code + '"></i>');
            $('.1-days-temp-low').html(weather.forecast[1].low + '°');
            $('.1-days-temp').html(weather.forecast[1].low + '° / ' + weather.forecast[1].high + '°');
            $('.2-days-day strong').html(weather.forecast[2].day);
            $('.two-days-text').html(weather.forecast[2].forecast);
            $('.2-days-image').html('<i class="icon-' + weather.forecast[2].code + '"></i>');
            $('.2-days-temp-low').html(weather.forecast[2].low + '°');
            $('.2-days-temp').html(weather.forecast[2].low + '° / ' + weather.forecast[2].high + '°');
            $('.3-days-day strong').html(weather.forecast[3].day);
            $('.three-days-text').html(weather.forecast[3].forecast);
            $('.3-days-image').html('<i class="icon-' + weather.forecast[3].code + '"></i>');
            $('.3-days-temp-low').html(weather.forecast[3].low + '°');
            $('.3-days-temp').html(weather.forecast[3].low + '° / ' + weather.forecast[3].high + '°');
            $('.4-days-day strong').html(weather.forecast[4].day);
            $('.four-days-text').html(weather.forecast[4].forecast);
            $('.4-days-image').html('<i class="icon-' + weather.forecast[4].code + '"></i>');
            $('.4-days-temp-low').html(weather.forecast[4].low + '°');
            $('.4-days-temp').html(weather.forecast[4].low + '° / ' + weather.forecast[4].high + '°');
            if (weather.code === 31 || weather.code === 32 || weather.code === 33 || weather.code === 34 || weather.code === 36) {
              icon_type_today = 'clear-day';
            }
            if (weather.code === 13 || weather.code === 14 || weather.code === 15 || weather.code === 16) {
              icon_type_today = 'snow';
            }
            if (weather.code === 25 || weather.code === 26 || weather.code === 27 || weather.code === 28 || weather.code === 29 || weather.code === 30) {
              icon_type_today = 'cloudy';
            }
            if (weather.code === 5 || weather.code === 6 || weather.code === 10 || weather.code === 35) {
              icon_type_today = 'rain';
            }
            if (weather.code === 20) {
              icon_type_today = 'fog';
            }
            if (weather.code === 32) {
              icon_type_today = 'partly-cloudy-day';
            }
            if (weather.code === 29) {
              icon_type_today = 'partly-cloudy-night';
            }
            if (weather.code === 24) {
              icon_type_today = 'wind';
            }
            if (weather.code === 18) {
              icon_type_today = 'sleet';
            }
            if (weather.forecast[1].code === 31 || weather.forecast[1].code === 32 || weather.forecast[1].code === 33 || weather.forecast[1].code === 34 || weather.forecast[1].code === 36) {
              icon_type_1 = 'clear-day';
            }
            if (weather.forecast[1].code === 13 || weather.forecast[1].code === 14 || weather.forecast[1].code === 15 || weather.forecast[1].code === 16) {
              icon_type_1 = 'snow';
            }
            if (weather.forecast[1].code === 25 || weather.forecast[1].code === 26 || weather.forecast[1].code === 27 || weather.forecast[1].code === 28) {
              icon_type_1 = 'cloudy';
            }
            if (weather.forecast[1].code === 5 || weather.forecast[1].code === 6 || weather.forecast[1].code === 10 || weather.forecast[1].code === 35) {
              icon_type_1 = 'rain';
            }
            if (weather.forecast[1].code === 20) {
              icon_type_1 = 'fog';
            }
            if (weather.forecast[1].code === 30) {
              icon_type_1 = 'partly-cloudy-day';
            }
            if (weather.forecast[1].code === 29) {
              icon_type_1 = 'partly-cloudy-night';
            }
            if (weather.forecast[1].code === 24) {
              icon_type_1 = 'wind';
            }
            if (weather.forecast[1].code === 18) {
              icon_type_1 = 'sleet';
            }
            if (weather.forecast[2].code === 31 || weather.forecast[2].code === 32 || weather.forecast[2].code === 33 || weather.forecast[2].code === 34 || weather.forecast[2].code === 36) {
              icon_type_2 = 'clear-day';
            }
            if (weather.forecast[2].code === 13 || weather.forecast[2].code === 14 || weather.forecast[2].code === 15 || weather.forecast[2].code === 16) {
              icon_type_2 = 'snow';
            }
            if (weather.forecast[2].code === 25 || weather.forecast[2].code === 26 || weather.forecast[2].code === 27 || weather.forecast[2].code === 28) {
              icon_type_2 = 'cloudy';
            }
            if (weather.forecast[2].code === 5 || weather.forecast[2].code === 6 || weather.forecast[2].code === 10 || weather.forecast[2].code === 35) {
              icon_type_2 = 'rain';
            }
            if (weather.forecast[2].code === 20) {
              icon_type_2 = 'fog';
            }
            if (weather.forecast[2].code === 30) {
              icon_type_2 = 'partly-cloudy-day';
            }
            if (weather.forecast[2].code === 29) {
              icon_type_2 = 'partly-cloudy-night';
            }
            if (weather.forecast[2].code === 24) {
              icon_type_2 = 'wind';
            }
            if (weather.forecast[2].code === 18) {
              icon_type_2 = 'sleet';
            }
            if (weather.forecast[3].code === 31 || weather.forecast[3].code === 32 || weather.forecast[3].code === 33 || weather.forecast[3].code === 34 || weather.forecast[3].code === 36) {
              icon_type_3 = 'clear-day';
            }
            if (weather.forecast[3].code === 13 || weather.forecast[3].code === 14 || weather.forecast[3].code === 15 || weather.forecast[3].code === 16) {
              icon_type_3 = 'snow';
            }
            if (weather.forecast[3].code === 25 || weather.forecast[3].code === 26 || weather.forecast[3].code === 27 || weather.forecast[3].code === 28) {
              icon_type_3 = 'cloudy';
            }
            if (weather.forecast[3].code === 5 || weather.forecast[3].code === 6 || weather.forecast[3].code === 10 || weather.forecast[3].code === 356) {
              icon_type_3 = 'rain';
            }
            if (weather.forecast[3].code === 20) {
              icon_type_3 = 'fog';
            }
            if (weather.forecast[3].code === 30) {
              icon_type_3 = 'partly-cloudy-day';
            }
            if (weather.forecast[3].code === 29) {
              icon_type_3 = 'partly-cloudy-night';
            }
            if (weather.forecast[3].code === 24) {
              icon_type_3 = 'wind';
            }
            if (weather.forecast[3].code === 18) {
              icon_type_3 = 'sleet';
            }
            if (weather.forecast[4].code === 31 || weather.forecast[4].code === 32 || weather.forecast[4].code === 33 || weather.forecast[4].code === 33) {
              icon_type_4 = 'clear-day';
            }
            if (weather.forecast[4].code === 13 || weather.forecast[4].code === 14 || weather.forecast[4].code === 15 || weather.forecast[4].code === 16) {
              icon_type_4 = 'snow';
            }
            if (weather.forecast[4].code === 25 || weather.forecast[4].code === 26 || weather.forecast[4].code === 27 || weather.forecast[4].code === 28) {
              icon_type_4 = 'cloudy';
            }
            if (weather.forecast[4].code === 5 || weather.forecast[4].code === 6 || weather.forecast[4].code === 10 || weather.forecast[4].code === 35) {
              icon_type_4 = 'rain';
            }
            if (weather.forecast[4].code === 20) {
              icon_type_4 = 'fog';
            }
            if (weather.forecast[4].code === 30) {
              icon_type_4 = 'partly-cloudy-day';
            }
            if (weather.forecast[4].code === 29) {
              icon_type_4 = 'partly-cloudy-night';
            }
            if (weather.forecast[4].code === 24) {
              icon_type_4 = 'wind';
            }
            if (weather.forecast[4].code === 18) {
              icon_type_4 = 'sleet';
            }
            icons = new Skycons;
            list = ['clear-day', 'clear-night', 'partly-cloudy-day', 'partly-cloudy-night', 'cloudy', 'rain', 'sleet', 'snow', 'wind', 'fog'];
            i = void 0;
            i = list.length;
            while (i--) {
              icons.set(list[i], list[i]);
            }
            icons.set('day-0-icon', icon_type_today);
            icons.set('day-1-icon', icon_type_1);
            icons.set('day-2-icon', icon_type_2);
            icons.set('day-3-icon', icon_type_3);
            icons.set('day-4-icon', icon_type_4);
            icons.play();
          }
        });
      });
      myTimeout = void 0;
      $('.widget-weather').mouseenter(function() {
        myTimeout = setTimeout((function() {
          $('.weather, .widget-weather .panel-header').animate({
            backgroundColor: '#33A3A6'
          }, 400);
        }), 200);
      }).mouseleave(function() {
        clearTimeout(myTimeout);
        $('.weather, .widget-weather .panel-header').animate({
          backgroundColor: '#319DB5'
        }, 400);
      });
      $(window).resize(function() {
        setTimeout((function() {
          $('.widget-weather').height($('.widget-weather .panel-header').height() + $('.weather').height() + 12);
        }), 100);
      });
      return;
      return {
        iosSwitch: function() {
          if ($('.js-switch').length) {
            setTimeout((function() {
              $('.js-switch').each(function() {
                var colorOff, colorOn, switchery;
                colorOn = '#18A689';
                colorOff = '#DFDFDF';
                if ($(this).data('color-on')) {
                  colorOn = $(this).data('color-on');
                }
                if ($(this).data('color-on')) {
                  colorOff = $(this).data('color-off');
                }
                if (colorOn === 'blue') {
                  colorOn = '#56A2D5';
                }
                if (colorOn === 'red') {
                  colorOn = '#C75757';
                }
                if (colorOn === 'yellow') {
                  colorOn = '#F3B228';
                }
                if (colorOn === 'green') {
                  colorOn = '#18A689';
                }
                if (colorOn === 'purple') {
                  colorOn = '#8227f1';
                }
                if (colorOn === 'dark') {
                  colorOn = '#292C35';
                }
                if (colorOff === 'blue') {
                  colorOff = '#56A2D5';
                }
                if (colorOff === 'red') {
                  colorOff = '#C75757';
                }
                if (colorOff === 'yellow') {
                  colorOff = '#F3B228';
                }
                if (colorOff === 'green') {
                  colorOff = '#18A689';
                }
                if (colorOff === 'purple') {
                  colorOff = '#8227f1';
                }
                if (colorOff === 'dark') {
                  colorOff = '#292C35';
                }
                switchery = new Switchery(this, {
                  color: colorOn,
                  secondaryColor: colorOff
                });
              });
            }), 500);
          }
        }
      };
    };


    /* Manage Slider */

    Base.prototype.sliderIOS = function() {
      if ($('.slide-ios').length && $.fn.slider) {
        $('.slide-ios').each(function() {
          $(this).sliderIOS();
        });
      }
    };


    /* Manage Range Slider */

    Base.prototype.rangeSlider = function() {
      if ($('.range-slider').length && $.fn.ionRangeSlider) {
        $('.range-slider').each(function() {
          $(this).ionRangeSlider({
            min: $(this).data('min') ? $(this).data('min') : 0,
            max: $(this).data('max') ? $(this).data('max') : 5000,
            hideMinMax: $(this).data('hideMinMax') ? $(this).data('hideMinMax') : false,
            hideFromTo: $(this).data('hideFromTo') ? $(this).data('hideFromTo') : false,
            to: $(this).data('to') ? $(this).data('to') : '',
            step: $(this).data('step') ? $(this).data('step') : '',
            type: $(this).data('type') ? $(this).data('type') : 'double',
            prefix: $(this).data('prefix') ? $(this).data('prefix') : '',
            postfix: $(this).data('postfix') ? $(this).data('postfix') : '',
            maxPostfix: $(this).data('maxPostfix') ? $(this).data('maxPostfix') : '',
            hasGrid: $(this).data('hasGrid') ? $(this).data('hasGrid') : false
          });
        });
      }
    };


    /* Button Loading State */

    Base.prototype.buttonLoader = function() {
      if ($('.ladda-button').length) {
        Ladda.bind('.ladda-button', {
          timeout: 2000
        });
        Ladda.bind('.progress-demo button', {
          callback: function(instance) {
            var interval, progress;
            progress = 0;
            interval = setInterval((function() {
              progress = Math.min(progress + Math.random() * 0.1, 1);
              instance.setProgress(progress);
              if (progress === 1) {
                instance.stop();
                clearInterval(interval);
              }
            }), 100);
          }
        });
      }
    };

    Base.prototype.inputSelect = function() {

      /* Demo Select Loading Data */
      var repoFormatResult, repoFormatSelection;
      repoFormatResult = function(repo) {
        var markup;
        markup = '<div class="row">' + '<div class="col-md-2"><img class="img-responsive" src="' + repo.owner.avatar_url + '" /></div>' + '<div class="col-md-10">' + '<div class="row">' + '<div class="col-md-6">' + repo.full_name + '</div>' + '<div class="col-md-3"><i class="fa fa-code-fork"></i> ' + repo.forks_count + '</div>' + '<div class="col-md-3"><i class="fa fa-star"></i> ' + repo.stargazers_count + '</div>' + '</div>';
        if (repo.description) {
          markup += '<div>' + repo.description + '</div>';
        }
        markup += '</div></div>';
        return markup;
      };
      repoFormatSelection = function(repo) {
        return repo.full_name;
      };
      if ($.fn.select2) {
        setTimeout((function() {
          $('select').each(function() {
            var format;
            format = function(state) {
              var res, state_id;
              state_id = state.id;
              if (!state_id) {
                return state.text;
              }
              res = state_id.split('-');
              if (res[0] === 'image') {
                if (res[2]) {
                  return '<img class=\'flag\' src=\'assets/images/flags/' + res[1].toLowerCase() + '-' + res[2].toLowerCase() + '.png\' style=\'width:27px;padding-right:10px;margin-top: -3px;\'/>' + state.text;
                } else {
                  return '<img class=\'flag\' src=\'assets/images/flags/' + res[1].toLowerCase() + '.png\' style=\'width:27px;padding-right:10px;margin-top: -3px;\'/>' + state.text;
                }
              } else {
                return state.text;
              }
            };
            $(this).select2({
              formatResult: format,
              formatSelection: format,
              placeholder: $(this).data('placeholder') ? $(this).data('placeholder') : '',
              allowClear: $(this).data('allowclear') ? $(this).data('allowclear') : true,
              minimumInputLength: $(this).data('minimumInputLength') ? $(this).data('minimumInputLength') : -1,
              minimumResultsForSearch: $(this).data('search') ? 1 : -1,
              dropdownCssClass: $(this).data('style') ? 'form-white' : '',
              maximumSelectionSize: 3
            });
          });
        }), 200);
        if ($('#demo-loading-data').length) {
          $('#demo-loading-data').select2({
            placeholder: 'Search for a repository',
            minimumInputLength: 1,
            ajax: {
              url: 'https://api.github.com/search/repositories',
              dataType: 'json',
              quietMillis: 250,
              data: function(term, page) {
                return {
                  q: term
                };
              },
              results: function(data, page) {
                return {
                  results: data.items
                };
              },
              cache: true
            },
            initSelection: function(element, callback) {
              var id;
              id = $(element).val();
              if (id !== '') {
                $.ajax('https://api.github.com/repositories/' + id, {
                  dataType: 'json'
                }).done(function(data) {
                  callback(data);
                });
              }
            },
            formatResult: repoFormatResult,
            formatSelection: repoFormatSelection,
            dropdownCssClass: 'bigdrop',
            escapeMarkup: function(m) {
              return m;
            }
          });
        }
      }
    };

    Base.prototype.inputTags = function() {
      $('.select-tags').each(function() {
        $(this).tagsinput({
          tagClass: 'label label-primary'
        });
      });
    };


    /****  Tables Responsive  *** */

    Base.prototype.tableResponsive = function() {
      setTimeout((function() {
        $('.table').each(function() {
          var content_width, table_width, window_width;
          window_width = $(window).width();
          table_width = $(this).width();
          content_width = $(this).parent().width();
          if (table_width > content_width) {
            $(this).parent().addClass('force-table-responsive');
          } else {
            $(this).parent().removeClass('force-table-responsive');
          }
        });
      }), 200);
    };


    /****  Tables Dynamic  *** */

    Base.prototype.tableDynamic = function() {
      if ($('.table-dynamic').length && $.fn.dataTable) {
        $('.table-dynamic').each(function() {
          var table;
          var oTable, opt, table;
          opt = {};
          opt.bPaginate = false;
          if ($(this).hasClass('table-tools')) {
            opt.sDom = '<\'row\'<\'col-md-6\'f><\'col-md-6\'T>r>t<\'row\'<\'col-md-6\'i><\'spcol-md-6an6\'p>>';
            opt.oTableTools = {
              'sSwfPath': '../assets/global/plugins/datatables/swf/copy_csv_xls_pdf.swf',
              'aButtons': ['csv', 'xls', 'pdf', 'print']
            };
          }
          if ($(this).hasClass('no-header')) {
            opt.bFilter = false;
            opt.bLengthChange = false;
          }
          if ($(this).hasClass('no-footer')) {
            opt.bInfo = false;
            opt.bPaginate = false;
          }
          if ($(this).hasClass('filter-head')) {
            $('.filter-head thead th').each(function() {
              var title;
              title = $('.filter-head thead th').eq($(this).index()).text();
              $(this).append('<input type="text" onclick="stopPropagation(event);" class="form-control" placeholder="Filter ' + title + '" />');
            });
            table = $('.filter-head').DataTable();
            $('.filter-head thead input').on('keyup change', function() {
              table.column($(this).parent().index() + ':visible').search(this.value).draw();
            });
          }
          if ($(this).hasClass('filter-footer')) {
            $('.filter-footer tfoot th').each(function() {
              var title;
              title = $('.filter-footer thead th').eq($(this).index()).text();
              $(this).html('<input type="text" class="form-control" placeholder="Filter ' + title + '" />');
            });
            table = $('.filter-footer').DataTable();
            $('.filter-footer tfoot input').on('keyup change', function() {
              table.column($(this).parent().index() + ':visible').search(this.value).draw();
            });
          }
          if ($(this).hasClass('filter-select')) {
            $(this).DataTable({
              initComplete: function() {
                var api;
                api = this.api();
                api.columns().indexes().flatten().each(function(i) {
                  var column, select;
                  column = api.column(i);
                  select = $('<select class="form-control" data-placeholder="Select to filter"><option value=""></option></select>').appendTo($(column.footer()).empty()).on('change', function() {
                    var val;
                    val = $(this).val();
                  });
                  column.data().unique().sort().each(function(d, j) {
                    select.append('<option value="' + d + '">' + d + '</option>');
                  });
                });
              }
            });
          }
          if (!$(this).hasClass('filter-head') && !$(this).hasClass('filter-footer') && !$(this).hasClass('filter-select')) {
            oTable = $(this).dataTable(opt);
            oTable.fnDraw();
          }
        });
      }
    };

    Base.prototype.handleiCheck = function() {
      if (!$().iCheck) {
        return;
      }
      $(':checkbox:not(.js-switch, .switch-input, .switch-iphone, .onoffswitch-checkbox, .ios-checkbox, .md-checkbox), :radio:not(.md-radio)').each(function() {
        var checkboxClass, radioClass;
        checkboxClass = $(this).attr('data-checkbox') ? $(this).attr('data-checkbox') : 'icheckbox_minimal-grey';
        radioClass = $(this).attr('data-radio') ? $(this).attr('data-radio') : 'iradio_minimal-grey';
        if (checkboxClass.indexOf('_line') > -1 || radioClass.indexOf('_line') > -1) {
          $(this).iCheck({
            checkboxClass: checkboxClass,
            radioClass: radioClass,
            insert: '<div class="icheck_line-icon"></div>' + $(this).attr('data-label')
          });
        } else {
          $(this).iCheck({
            checkboxClass: checkboxClass,
            radioClass: radioClass
          });
        }
      });
    };


    /* Time picker */

    Base.prototype.timepicker = function() {
      $('.timepicker').each(function() {
        $(this).timepicker({
          isRTL: $('body').hasClass('rtl') ? true : false,
          timeFormat: $(this).attr('data-format', 'am-pm') ? 'hh:mm tt' : 'HH:mm'
        });
      });
    };


    /*Date picker */

    Base.prototype.datepicker = function() {
      $('.date-picker').each(function() {
        $(this).datepicker({
          numberOfMonths: 1,
          isRTL: $('body').hasClass('rtl') ? true : false,
          prevText: '<i class="fa fa-angle-left"></i>',
          nextText: '<i class="fa fa-angle-right"></i>',
          showButtonPanel: false
        });
      });
    };


    /*Date picker */

    Base.prototype.bDatepicker = function() {
      $('.b-datepicker').each(function() {
        $(this).bootstrapDatepicker({
          startView: $(this).data('view') ? $(this).data('view') : 0,
          language: $(this).data('lang') ? $(this).data('lang') : 'en',
          forceParse: $(this).data('parse') ? $(this).data('parse') : false,
          daysOfWeekDisabled: $(this).data('day-disabled') ? $(this).data('day-disabled') : '',
          calendarWeeks: $(this).data('calendar-week') ? $(this).data('calendar-week') : false,
          autoclose: $(this).data('autoclose') ? $(this).data('autoclose') : false,
          todayHighlight: $(this).data('today-highlight') ? $(this).data('today-highlight') : true,
          toggleActive: $(this).data('toggle-active') ? $(this).data('toggle-active') : true,
          multidate: $(this).data('multidate') ? $(this).data('multidate') : false,
          orientation: $(this).data('orientation') ? $(this).data('orientation') : 'top',
          rtl: $('html').hasClass('rtl') ? true : false
        });
      });
    };

    Base.prototype.multiDatesPicker = function() {
      $('.multidatepicker').each(function() {
        $(this).multiDatesPicker({
          dateFormat: 'yy-mm-dd',
          minDate: new Date,
          maxDate: '+1y',
          firstDay: 1,
          showOtherMonths: true
        });
      });
    };

    Base.prototype.rating = function() {
      $('.rateit').each(function() {
        var tooltipvalues;
        $(this).rateit({
          readonly: $(this).data('readonly') ? $(this).data('readonly') : false,
          resetable: $(this).data('resetable') ? $(this).data('resetable') : false,
          value: $(this).data('value') ? $(this).data('value') : 0,
          min: $(this).data('min') ? $(this).data('min') : 1,
          max: $(this).data('max') ? $(this).data('max') : 5,
          step: $(this).data('step') ? $(this).data('step') : 0.1
        });
        if ($(this).data('tooltip')) {
          tooltipvalues = ['bad', 'poor', 'ok', 'good', 'super'];
          $(this).bind('over', function(event, value) {
            $(this).attr('title', tooltipvalues[value - 1]);
          });
        }
        if ($(this).data('confirmation')) {
          $(this).on('beforerated', function(e, value) {
            value = value.toFixed(1);
            if (!confirm('Are you sure you want to rate this item: ' + value + ' stars?')) {
              e.preventDefault();
            } else {
              $(this).rateit('readonly', true);
            }
          });
        }
        if ($(this).data('disable-after')) {
          $(this).bind('rated', function(event, value) {
            $(this).rateit('readonly', true);
          });
        }
        if ($(this).parent().find('.rating-value')) {
          $(this).bind('rated', function(event, value) {
            if (value) {
              value = value.toFixed(1);
            }
            $(this).parent().find('.rating-value').text('Your rating: ' + value);
          });
        }
        if ($(this).parent().find('.hover-value')) {
          $(this).bind('over', function(event, value) {
            if (value) {
              value = value.toFixed(1);
            }
            $(this).parent().find('.hover-value').text('Hover rating value: ' + value);
          });
        }
      });
    };


    /* Date & Time picker */

    Base.prototype.datetimepicker = function() {
      if ($.fn.datetimepicker) {
        $('.datetimepicker').each(function() {
          $(this).datetimepicker({
            prevText: '<i class="fa fa-angle-left"></i>',
            nextText: '<i class="fa fa-angle-right"></i>'
          });
        });

        /* Inline Date & Time picker */
        $('.inline_datetimepicker').datetimepicker({
          altFieldTimeOnly: false,
          isRTL: is_RTL
        });
      }
    };


    /* Popup Images */

    Base.prototype.magnificPopup = function() {
      if ($('.magnific').length && $.fn.magnificPopup) {
        $('.magnific').magnificPopup({
          type: 'image',
          gallery: {
            enabled: true
          },
          removalDelay: 300,
          mainClass: 'mfp-fade'
        });
      }
    };


    /****  Summernote Editor  *** */

    Base.prototype.editorSummernote = function() {
      if ($('.summernote').length && $.fn.summernote) {
        $('.summernote').each(function() {
          $(this).summernote({
            height: 300,
            airMode: $(this).data('airmode') ? $(this).data('airmode') : false,
            airPopover: [['style', ['style']], ['color', ['color']], ['font', ['bold', 'underline', 'clear']], ['para', ['ul', 'paragraph']], ['table', ['table']], ['insert', ['link', 'picture']]],
            toolbar: [['style', ['style']], ['style', ['bold', 'italic', 'underline', 'clear']], ['fontsize', ['fontsize']], ['color', ['color']], ['para', ['ul', 'ol', 'paragraph']], ['height', ['height']], ['table', ['table']], ['view', ['codeview']]]
          });
        });
      }
    };


    /****  CKE Editor  *** */

    Base.prototype.editorCKE = function() {
      if ($('.cke-editor').length && $.fn.ckeditor) {
        $('.cke-editor').each(function() {
          $(this).ckeditor();
        });
        CKEDITOR.disableAutoInline = true;
      }
    };

    Base.prototype.slider = function() {
      if ($('.slick').length && $.fn.slick) {
        $('.slick').each(function() {
          $(this).slick({
            accessibility: true,
            adaptiveHeight: false,
            arrows: $(this).data('arrows') ? $(this).data('arrows') : false,
            asNavFor: null,
            prevArrow: '<button type="button" data-role="none" class="slick-prev">Previous</button>',
            nextArrow: '<button type="button" data-role="none" class="slick-next">Next</button>',
            autoplay: $(this).attr('data-autoplay') ? $(this).attr('data-autoplay') : true,
            autoplaySpeed: $(this).data('timing') ? $(this).data('timing') : 4000,
            centerMode: $(this).data('center') ? $(this).data('center') : false,
            centerPadding: '50px',
            cssEase: 'ease',
            dots: $(this).attr('data-dots') ? $(this).attr('data-dots') : true,
            dotsClass: 'slick-dots',
            draggable: true,
            easing: 'linear',
            fade: $(this).data('fade') ? $(this).data('fade') : false,
            focusOnSelect: false,
            infinite: true,
            lazyLoad: 'ondemand',
            onBeforeChange: null,
            onAfterChange: null,
            onInit: null,
            onReInit: null,
            pauseOnHover: true,
            pauseOnDotsHover: false,
            responsive: null,
            rtl: $('body').hasClass('rtl') ? true : false,
            slide: '.slide',
            slidesToShow: $(this).data('num-slides') ? $(this).data('num-slides') : 1,
            slidesToScroll: $(this).data('num-scroll') ? $(this).data('num-scroll') : 1,
            speed: 500,
            swipe: true,
            swipeToSlide: false,
            touchMove: true,
            touchThreshold: 5,
            useCSS: true,
            variableWidth: $(this).data('variable-width') ? true : false,
            vertical: false,
            waitForAnimate: true
          });
        });
      }
    };

    Base.prototype.formWizard = function() {
      if ($('.wizard').length && $.fn.stepFormWizard) {
        $('.wizard').each(function() {
          var $this;
          $this = $(this);
          $(this).stepFormWizard({
            theme: $(this).data('style') ? $(this).data('style') : 'circle',
            showNav: $(this).data('nav') ? $(this).data('nav') : 'top',
            height: 'auto',
            rtl: $('body').hasClass('rtl') ? true : false,
            onNext: function(i, wizard) {
              if ($this.hasClass('wizard-validation')) {
                return $('form', wizard).parsley().validate('block' + i);
              }
            },
            onFinish: function(i) {
              if ($this.hasClass('wizard-validation')) {
                return $('form', wizard).parsley().validate();
              }
            }
          });
        });

        /* Fix issue only with tabs with Validation on error show */
        $('#validation .wizard .sf-btn').on('click', function() {
          setTimeout((function() {
            $(window).resize();
            $(window).trigger('resize');
          }), 50);
        });
      }
    };

    Base.prototype.formValidation = function() {
      if ($('.form-validation').length && $.fn.validate) {

        /* We add an addition rule to show you. Example : 4 + 8. You can other rules if you want */
        $.validator.methods.operation = function(value, element, param) {
          return value === param;
        };
        $.validator.methods.customemail = function(value, element) {
          return /^([-0-9a-zA-Z.+_]+@[-0-9a-zA-Z.+_]+\.[a-zA-Z]{2,4})+$/.test(value);
        };
        $('.form-validation').each(function() {
          var formValidation;
          var formValidation;
          formValidation = $(this).validate({
            success: 'valid',
            submitHandler: function() {
              alert('Form is valid! We submit it');
            },
            errorClass: 'form-error',
            validClass: 'form-success',
            errorElement: 'div',
            ignore: [],
            rules: {
              avatar: {
                extension: 'jpg|png|gif|jpeg|doc|docx|pdf|xls|rar|zip'
              },
              password2: {
                equalTo: '#password'
              },
              calcul: {
                operation: 12
              },
              url: {
                url: true
              },
              email: {
                required: {
                  depends: function() {
                    $(this).val($.trim($(this).val()));
                    return true;
                  }
                },
                customemail: true
              }
            },
            messages: {
              name: {
                required: 'Enter your name'
              },
              lastname: {
                required: 'Enter your last name'
              },
              firstname: {
                required: 'Enter your first name'
              },
              email: {
                required: 'Enter email address',
                customemail: 'Enter a valid email address'
              },
              language: {
                required: 'Enter your language'
              },
              mobile: {
                required: 'Enter your phone number'
              },
              avatar: {
                required: 'You must upload your avatar'
              },
              password: {
                required: 'Write your password'
              },
              password2: {
                required: 'Write your password',
                equalTo: '2 passwords must be the same'
              },
              calcul: {
                required: 'Enter the result of 4 + 8',
                operation: 'Result is false. Try again!'
              },
              terms: {
                required: 'You must agree with terms'
              }
            },
            highlight: function(element, errorClass, validClass) {
              $(element).closest('.form-control').addClass(errorClass).removeClass(validClass);
            },
            unhighlight: function(element, errorClass, validClass) {
              $(element).closest('.form-control').removeClass(errorClass).addClass(validClass);
            },
            errorPlacement: function(error, element) {
              if (element.hasClass('custom-file') || element.hasClass('checkbox-type') || element.hasClass('language')) {
                element.closest('.option-group').after(error);
              } else if (element.is(':radio') || element.is(':checkbox')) {
                element.closest('.option-group').after(error);
              } else if (element.parent().hasClass('input-group')) {
                element.parent().after(error);
              } else {
                error.insertAfter(element);
              }
            },
            invalidHandler: function(event, validator) {
              var errors;
              errors = validator.numberOfInvalids();
            }
          });
          $('.form-validation .cancel').click(function() {
            formValidation.resetForm();
          });
        });
      }
    };


    /****  Animated Panels  *** */

    Base.prototype.liveTile = function() {
      if ($('.live-tile').length && $.fn.liveTile) {
        $('.live-tile').each(function() {
          var tile_height;
          $(this).liveTile('destroy', true);

          /* To get new size if resize event */
          tile_height = $(this).data('height') ? $(this).data('height') : $(this).find('.panel-body').height() + 52;
          $(this).height(tile_height);
          $(this).liveTile({
            speed: $(this).data('speed') ? $(this).data('speed') : 500,
            mode: $(this).data('animation-easing') ? $(this).data('animation-easing') : 'carousel',
            playOnHover: $(this).data('play-hover') ? $(this).data('play-hover') : false,
            repeatCount: $(this).data('repeat-count') ? $(this).data('repeat-count') : -1,
            delay: $(this).data('delay') ? $(this).data('delay') : 0,
            startNow: $(this).data('start-now') ? $(this).data('start-now') : true
          });
        });
      }
    };


    /**** Bar Charts: CHARTJS *** */

    Base.prototype.barCharts = function() {
      if ($('.bar-stats').length) {
        $('.bar-stats').each(function() {
          var barChartData, ctx, custom_color, custom_colors, randomScalingFactor;
          randomScalingFactor = function() {
            return Math.round(Math.random() * 100);
          };
          custom_colors = ['#C9625F', '#18A689', '#90ed7d', '#f7a35c', '#8085e9', '#f15c80', '#8085e8', '#91e8e1'];
          custom_color = custom_colors[Math.floor(Math.random() * custom_colors.length)];
          barChartData = {
            labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
            datasets: [
              {
                fillColor: custom_color,
                strokeColor: custom_color,
                highlightFill: '#394248',
                highlightStroke: '#394248',
                data: [randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor()]
              }
            ]
          };
          ctx = $(this).get(0).getContext('2d');
          window.myBar = new Chart(ctx).Bar(barChartData, {
            responsive: true,
            scaleShowLabels: false,
            showScale: true,
            scaleLineColor: 'rgba(0,0,0,.1)',
            scaleShowGridLines: false
          });
        });
      }
    };

    Base.prototype.animateNumber = function() {
      $('.countup').each(function() {
        var decimals, delay, duration, from, numAnim, options, to;
        from = $(this).data('from') ? $(this).data('from') : 0;
        to = $(this).data('to') ? $(this).data('to') : 100;
        duration = $(this).data('duration') ? $(this).data('duration') : 2;
        delay = $(this).data('delay') ? $(this).data('delay') : 1000;
        decimals = $(this).data('decimals') ? $(this).data('decimals') : 0;
        options = {
          useEasing: true,
          useGrouping: true,
          separator: ',',
          prefix: $(this).data('prefix') ? $(this).data('  prefix') : '',
          suffix: $(this).data('suffix') ? $(this).data('suffix') : ''
        };
        numAnim = new countUp($(this).get(0), from, to, decimals, duration, options);
        setTimeout((function() {
          numAnim.start();
        }), delay);
      });
    };

    Base.prototype.textareaAutosize = function() {
      $('textarea.autosize').each(function() {
        $(this).autosize();
      });
    };

    if ($('body').hasClass('rtl')) {
      is_RTL = true;
    }


    /* ========================================================== */


    /* PLUGINS */


    /* ========================================================= */

    (function($) {
      $.fn.autogrow = function() {
        return this.each(function() {
          var textarea;
          textarea = this;
          $.fn.autogrow.resize(textarea);
          $(textarea).focus(function() {
            textarea.interval = setInterval((function() {
              $.fn.autogrow.resize(textarea);
            }), 500);
          }).blur(function() {
            clearInterval(textarea.interval);
          });
        });
      };
      $.fn.autogrow.resize = function(textarea) {
        var columns, height, lineCount, lineHeight, lines;
        lineHeight = parseInt($(textarea).css('line-height'), 10);
        lines = textarea.value.split('\n');
        columns = textarea.cols;
        lineCount = 0;
        $.each(lines, function() {
          lineCount += Math.ceil(this.length / columns) || 1;
        });
        height = lineHeight * (lineCount + 1);
        $(textarea).css('height', height);
      };
    })(jQuery);

    oldIndex = void 0;

    if ($('.sortable').length && $.fn.sortable) {
      $('.sortable').sortable({
        handle: '.panel-header, .card-title',
        start: function(event, ui) {
          oldIndex = ui.item.index();
          ui.placeholder.height(ui.item.height() - 20);
        },
        stop: function(event, ui) {
          var itemToMove, items, movingForward, newIndex, newLocation, nextIndex;
          newIndex = ui.item.index();
          movingForward = newIndex > oldIndex;
          nextIndex = newIndex + (movingForward ? -1 : 1);
          items = $('.sortable > div');
          itemToMove = items.get(nextIndex);
          if (itemToMove) {
            newLocation = $(items.get(oldIndex));
            if (movingForward) {
              $(itemToMove).insertBefore(newLocation);
            } else {
              $(itemToMove).insertAfter(newLocation);
            }
          }
        }
      });
    }


    /****  Initiation of Main Functions  *** */

    Base.prototype.blockUI = function(item) {
      $(item).block({
        message: '<svg class="circular"><circle class="path" cx="40" cy="40" r="10" fill="none" stroke-width="2" stroke-miterlimit="10"/></svg>',
        css: {
          border: 'none',
          width: '14px',
          backgroundColor: 'none'
        },
        overlayCSS: {
          backgroundColor: '#fff',
          opacity: 0.6,
          cursor: 'wait'
        }
      });
    };

    Base.prototype.unblockUI = function(item) {
      $(item).unblock();
    };


    /****  Initiation of Main Functions  *** */

    Base.prototype.quickviewSidebar = function() {
      var othis, radarChartData, toggleqQuickview;
      console.log("hey");
      othis = this;
      toggleqQuickview = function() {
        $('#quickview-toggle').on('click', function(e) {
          console.log("clicked");
          e.preventDefault();
          if ($('#quickview-sidebar').hasClass('open')) {
            $('#builder').removeClass('open');
          } else {
            $('#quickview-sidebar').addClass('open');
          }
        });
      };
      $('.chat-back').on('click', function() {
        $('.chat-conversation').removeClass('current');
        $('.chat-body').addClass('current');
      });
      $('.chat-list').on('click', 'li', function() {
        var chat_img, chat_name, chat_status, chat_txt;
        chat_name = $(this).find('.user-name').html();
        chat_txt = $(this).find('.user-txt').html();
        chat_status = $(this).find('.user-status').html();
        chat_img = $(this).find('img').attr('src');
        $('.chat-conversation .user-name').html(chat_name);
        $('.chat-conversation .user-txt').html(chat_txt);
        $('.chat-conversation .user-status').html(chat_status);
        $('.chat-conversation .user-img img').attr('src', chat_img);
        $('.chat-conversation .conversation-body .conversation-img img').attr('src', chat_img);
        $('.chat-body').removeClass('current');
        $('.chat-conversation').addClass('current');
      });

      /* Open / Close right sidebar */
      $('#quickview-toggle').on('click', function() {
        $('#chat-notification').hide();
        setTimeout((function() {
          $('.mm-panel .badge-danger').each(function() {
            $(this).removeClass('hide').addClass('animated bounceIn');
          });
        }), 1000);
      });

      /* Remove current message when opening */
      $('.have-message').on('click', function() {
        $(this).removeClass('have-message');
        $(this).find('.badge-danger').fadeOut();
      });

      /* Send messages */
      $('.send-message').keypress(function(e) {
        var chat_message;
        if (e.keyCode === 13) {
          chat_message = '<li class="img">' + '<span>' + '<div class="chat-detail chat-right">' + '<img src="/assets/avatars/avatar1-d21f5461fe50a892ae5276e314221705.png" data-retina-src="/images/avatars/avatar1_2x.png"/>' + '<div class="chat-detail">' + '<div class="chat-bubble">' + $(this).val() + '</div>' + '</div>' + '</div>' + '</span>' + '</li>';
          $(chat_message).hide().appendTo($(this).parent().parent().parent().find('.conversation-body ul')).fadeIn();
          $(this).val('');
          othis.quickviewHeight();
          othis.customScroll();
        }
      });
      document.querySelector('.page-content').addEventListener('click', function(ev) {
        var chatSidebar, target;
        chatSidebar = document.getElementById('quickview-sidebar');
        target = ev.target;
        if (target !== chatSidebar) {
          if ($('#quickview-sidebar').hasClass('open')) {
            $('#quickview-sidebar').addClass('closing');
            $('#quickview-sidebar').removeClass('open');
            setTimeout((function() {
              $('#quickview-sidebar').removeClass('closing');
            }), 400);
          }
        }
      });
      document.querySelector('.sidebar').addEventListener('click', function(ev) {
        var chatSidebar, target;
        chatSidebar = document.getElementById('quickview-sidebar');
        target = ev.target;
        if (target !== chatSidebar) {
          if ($('#quickview-sidebar').hasClass('open')) {
            $('#quickview-sidebar').addClass('closing');
            $('#quickview-sidebar').removeClass('open');
            setTimeout((function() {
              $('#quickview-sidebar').removeClass('closing');
            }), 400);
          }
        }
      });
      if ($('.settings-chart .progress-bar').length) {
        $('.settings-tab').on('click', function() {
          setTimeout((function() {
            $('.settings-chart .setting1').progressbar();
            if ($('#setting-chart').length) {
              window.myRadar = new Chart(document.getElementById('setting-chart').getContext('2d')).Radar(radarChartData, {
                responsive: true,
                tooltipCornerRadius: 0,
                animationSteps: 60
              });
            }
          }), 200);
          setTimeout((function() {
            $('.settings-chart .setting2').progressbar();
          }), 400);
        });
      }

      /* Radar Chart */
      radarChartData = {
        labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
        datasets: [
          {
            label: 'My Second dataset',
            fillColor: 'rgba(151,187,205,0.2)',
            strokeColor: 'rgba(151,187,205,1)',
            pointColor: 'rgba(151,187,205,1)',
            pointStrokeColor: '#fff',
            pointHighlightFill: '#fff',
            pointHighlightStroke: 'rgba(151,187,205,1)',
            data: [38, 48, 40, 89, 96, 27, 90]
          }
        ]
      };
      toggleqQuickview();
    };

    Base.prototype.quickviewHeight = function() {
      var chatConversationHeight, windowHeight;
      $('.chat-conversation').height('');
      chatConversationHeight = $('.chat-conversation').height();
      windowHeight = $(window).height();
      if (chatConversationHeight < windowHeight) {
        $('.chat-conversation').height($(window).height() - 50);
      }
    };


    /**** PANEL ACTIONS *** */

    Base.prototype.handlePanelAction = function() {

      /* Create Portlets Controls automatically: reload, fullscreen, toggle, remove, popout */
      var handlePanelControls, othis;
      handlePanelControls = function() {
        $('.panel-controls').each(function() {
          var controls_html;
          controls_html = '<div class="control-btn">' + '<a href="#" class="panel-reload hidden"><i class="icon-reload"></i></a>' + '<a class="hidden" id="dropdownMenu1" data-toggle="dropdown">' + '<i class="icon-settings"></i>' + '</a>' + '<ul class="dropdown-menu pull-right" role="menu" aria-labelledby="dropdownMenu1">' + '<li><a href="#">Action</a>' + '</li>' + '<li><a href="#">Another action</a>' + '</li>' + '<li><a href="#">Something else here</a>' + '</li>' + '</ul>' + '<a href="#" class="panel-popout hidden tt" title="Pop Out/In"><i class="icons-office-58"></i></a>' + '<a href="#" class="panel-maximize hidden"><i class="icon-size-fullscreen"></i></a>' + '<a href="#" class="panel-toggle"><i class="fa fa-angle-down"></i></a>' + '<a href="#" class="panel-close"><i class="icon-trash"></i></a>' + '</div>';
          $(this).append(controls_html);
        });
        $('.md-panel-controls').each(function() {
          var controls_html;
          controls_html = '<div class="control-btn">' + '<a href="#" class="panel-reload hidden"><i class="mdi-av-replay"></i></a>' + '<a class="hidden" id="dropdownMenu1" data-toggle="dropdown">' + '<i class="mdi-action-settings"></i>' + '</a>' + '<ul class="dropdown-menu pull-right" role="menu" aria-labelledby="dropdownMenu1">' + '<li><a href="#">Action</a>' + '</li>' + '<li><a href="#">Another action</a>' + '</li>' + '<li><a href="#">Something else here</a>' + '</li>' + '</ul>' + '<a href="#" class="panel-popout hidden tt" title="Pop Out/In"><i class="mdi-action-open-in-browser"></i></a>' + '<a href="#" class="panel-maximize hidden"><i class="mdi-action-launch"></i></a>' + '<a href="#" class="panel-toggle"><i class="mdi-navigation-expand-more"></i></a>' + '<a href="#" class="panel-close"><i class="mdi-action-delete"></i></a>' + '</div>';
          $(this).append(controls_html);
        });
      };
      handlePanelControls();
      $('.panel-header .panel-close').on('click', function(event) {
        var $item;
        event.preventDefault();
        $item = $(this).parents('.panel:first');
        bootbox.confirm('Are you sure to remove this panel?', function(result) {
          if (result === true) {
            $item.addClass('animated bounceOutRight');
            window.setTimeout((function() {
              $item.remove();
            }), 300);
          }
        });
      });
      $(document).on('click', '.panel-header .panel-toggle', function(event) {
        event.preventDefault();
        $(this).toggleClass('closed').parents('.panel:first').find('.panel-content').slideToggle();
      });
      $(document).on('click', '.panel-header .panel-popout', function(event) {
        var h, panel, w;
        event.preventDefault();
        panel = $(this).parents('.panel:first');
        if (panel.hasClass('modal-panel')) {
          $('i', this).removeClass('icons-office-55').addClass('icons-office-58');
          panel.removeAttr('style').removeClass('modal-panel');
          panel.find('.panel-maximize,.panel-toggle').removeClass('nevershow');
          panel.draggable('destroy').resizable('destroy');
        } else {
          panel.removeClass('maximized');
          panel.find('.panel-maximize,.panel-toggle').addClass('nevershow');
          $('i', this).removeClass('icons-office-58').addClass('icons-office-55');
          w = panel.width();
          h = panel.height();
          panel.addClass('modal-panel').removeAttr('style').width(w).height(h);
          $(panel).draggable({
            handle: '.panel-header',
            containment: '.page-content'
          }).css({
            'left': panel.position().left - 10,
            'top': panel.position().top + 2
          }).resizable({
            minHeight: 150,
            minWidth: 200
          });
        }
        window.setTimeout((function() {
          $('body').trigger('resize');
        }), 300);
      });
      $(document).on('click', '.panel-header .panel-reload', function(event) {
        var el;
        event.preventDefault();
        el = $(this).parents('.panel:first');
        blockUI(el);
        window.setTimeout((function() {
          unblockUI(el);
        }), 1800);
      });
      othis = this;
      $(document).on('click', '.panel-header .panel-maximize', function(event) {
        var panel;
        event.preventDefault();
        panel = $(this).parents('.panel:first');
        $body.toggleClass('maximized-panel');
        panel.removeAttr('style').toggleClass('maximized');
        this.maximizePanel();
        if (panel.hasClass('maximized')) {
          panel.parents('.portlets:first').sortable('destroy');
          $(window).trigger('resize');
        } else {
          $(window).trigger('resize');
          panel.parent().height('');
          this.sortablePortlets();
        }
        $('i', this).toggleClass('icon-size-fullscreen').toggleClass('icon-size-actual');
        panel.find('.panel-toggle').toggleClass('nevershow');
        $('body').trigger('resize');
        return false;
      });
    };

    Base.prototype.maximizePanel = function() {
      var windowHeight;
      var panel, panelHeight, windowHeight;
      if ($('.maximized').length) {
        panel = $('.maximized');
        windowHeight = $(window).height() - 2;
        panelHeight = panel.find('.panel-header').height() + panel.find('.panel-content').height() + 100;
        if (panel.hasClass('maximized')) {
          if (windowHeight > panelHeight) {
            panel.parent().height(windowHeight);
          } else {
            if ($('.main-content').height() > panelHeight) {
              panel.parent().height($('.main-content').height());
            } else {
              panel.parent().height(panelHeight);
            }
          }
        } else {
          panel.parent().height('');
        }
      }
    };


    /****  Custom Scrollbar  *** */


    /* Create Custom Scroll for elements like Portlets or Dropdown menu */

    Base.prototype.customScroll = function() {
      if ($.fn.mCustomScrollbar) {
        $('.withScroll').each(function() {
          var data_padding, scroll_height, thisHeight, windowHeight;
          $(this).mCustomScrollbar('destroy');
          scroll_height = $(this).data('height') ? $(this).data('height') : 'auto';
          data_padding = $(this).data('padding') ? $(this).data('padding') : 0;
          if ($(this).data('height') === 'window') {
            thisHeight = $(this).height();
            windowHeight = $(window).height() - data_padding - 50;
            if (thisHeight < windowHeight) {
              scroll_height = thisHeight;
            } else {
              scroll_height = windowHeight;
            }
          }
          $(this).mCustomScrollbar({
            scrollButtons: {
              enable: false
            },
            autoHideScrollbar: $(this).hasClass('show-scroll') ? false : true,
            scrollInertia: 150,
            theme: 'light',
            set_height: scroll_height,
            advanced: {
              updateOnContentResize: true
            }
          });
        });
      }
    };

    Base.prototype.handleSidebarFixed = function() {
      $('#switch-sidebar').prop('checked', true);
      $('#switch-submenu').prop('checked', false);
      $.removeCookie('submenu-hover');
      if ($('body').hasClass('sidebar-top')) {
        $('body').removeClass('fixed-topbar').addClass('fixed-topbar');
        $.removeCookie('fluid-topbar');
        $('#switch-topbar').prop('checked', true);
      }
      $('body').removeClass('fixed-sidebar').addClass('fixed-sidebar');
      $('.sidebar').height('');
      this.handleboxedLayout();
      if (!$('body').hasClass('sidebar-collapsed')) {
        this.removeSubmenuHover();
      }
      this.createSideScroll();
      $.removeCookie('fluid-sidebar');
      $.cookie('fixed-sidebar', 1);
    };


    /* Create Sidebar Fluid / Remove Sidebar Fixed */

    Base.prototype.handleSidebarFluid = function() {
      $('#switch-sidebar').prop('checked', false);
      if ($('body').hasClass('sidebar-hover')) {
        this.removeSidebarHover();
        $('#switch-sidebar-hover').prop('checked', false);
      }
      $('body').removeClass('fixed-sidebar');
      this.handleboxedLayout();
      this.destroySideScroll();
      $.removeCookie('fixed-sidebar');
      $.cookie('fluid-sidebar', 1);
      $.cookie('fluid-sidebar', 1);
    };


    /* Toggle Sidebar Fixed / Fluid */

    Base.prototype.toggleSidebar = function() {
      if ($('body').hasClass('fixed-sidebar')) {
        this.handleSidebarFluid();
      } else {
        this.handleSidebarFixed();
      }
    };


    /* Create Sidebar only visible on Hover */

    Base.prototype.createSidebarHover = function() {
      $('body').addClass('sidebar-hover');
      $('body').removeClass('fixed-sidebar').addClass('fixed-sidebar');
      $('.main-content').css('margin-left', '').css('margin-right', '');
      $('.topbar').css('left', '').css('right', '');
      $('body').removeClass('sidebar-top');
      this.removeSubmenuHover();
      this.removeBoxedLayout();
      this.removeCollapsedSidebar();
      this.sidebarHover();
      this.handleSidebarFixed();
      $('#switch-sidebar-hover').prop('checked', true);
      $('#switch-sidebar').prop('checked', true);
      $('#switch-sidebar-top').prop('checked', false);
      $('#switch-boxed').prop('checked', false);
      $.removeCookie('fluid-topbar');
      $.removeCookie('sidebar-top');
      $.cookie('sidebar-hover', 1);
    };


    /* Remove Sidebar on Hover */

    Base.prototype.removeSidebarHover = function() {
      $('#switch-sidebar-hover').prop('checked', false);
      $('body').removeClass('sidebar-hover');
      if (!$('body').hasClass('boxed')) {
        $('.sidebar, .sidebar-footer').attr('style', '');
      }
      $('.logopanel2').remove();
      $.removeCookie('sidebar-hover');
    };


    /* Toggle Sidebar on Top */

    Base.prototype.toggleSidebarHover = function() {
      if ($('body').hasClass('sidebar-hover')) {
        this.removeSidebarHover();
      } else {
        this.createSidebarHover();
      }
    };


    /* Create Sidebar Submenu visible on Hover */

    Base.prototype.createSubmenuHover = function() {
      this.removeSidebarHover();
      this.handleSidebarFluid();
      $('#switch-submenu-hover').prop('checked', true);
      $('body').addClass('submenu-hover');
      $('.nav-sidebar .children').css('display', '');
      $.cookie('submenu-hover', 1);
      $('#switch-sidebar').prop('checked', false);
    };


    /* Remove Submenu on Hover */

    Base.prototype.removeSubmenuHover = function() {
      $('#switch-submenu-hover').prop('checked', false);
      $('body').removeClass('submenu-hover');
      $('.nav-sidebar .nav-parent.active .children').css('display', 'block');
      $.removeCookie('submenu-hover');
    };


    /* Toggle Submenu on Hover */

    Base.prototype.toggleSubmenuHover = function() {
      if ($('body').hasClass('submenu-hover')) {
        this.removeSubmenuHover();
      } else {
        this.createSubmenuHover();
      }
    };


    /* Create Topbar Fixed */

    Base.prototype.handleTopbarFixed = function() {
      $('#switch-topbar').prop('checked', true);
      $('body').removeClass('fixed-topbar').addClass('fixed-topbar');
      $.removeCookie('fluid-topbar');
    };


    /* Create Topbar Fluid / Remove Topbar Fixed */

    Base.prototype.handleTopbarFluid = function() {
      $('#switch-topbar').prop('checked', false);
      $('body').removeClass('fixed-topbar');
      if ($('body').hasClass('sidebar-top') && $('body').hasClass('fixed-sidebar')) {
        $('body').removeClass('fixed-sidebar');
        $('#switch-sidebar').prop('checked', false);
      }
      $.cookie('fluid-topbar', 1);
    };


    /* Toggle Topbar Fixed / Fluid */

    Base.prototype.toggleTopbar = function() {
      if ($('body').hasClass('fixed-topbar')) {
        this.handleTopbarFluid();
      } else {
        this.handleTopbarFixed();
      }
    };


    /* Adjust margin of content for boxed layout */

    Base.prototype.handleboxedLayout = function() {
      var container, margin, pageContentHeight, topbarWidth, windowHeight, windowWidth;
      if ($('body').hasClass('builder-admin')) {
        return;
      }
      this.logopanel.css('left', '').css('right', '');
      this.topbar.css('width', '');
      this.sidebar.css('margin-left', '').css('margin-right', '');
      this.sidebarFooter.css('left', '').css('right', '');
      if ($('body').hasClass('boxed')) {
        windowWidth = $(window).width();
        windowHeight = $(window).height();
        $('.page-content').height('');
        pageContentHeight = $('.page-content').height();
        container = 1200;
        margin = (windowWidth - 1200) / 2;
        if (!$('body').hasClass('sidebar-top') && windowWidth > 1220) {
          if (!$('body').hasClass('fixed-sidebar')) {
            if (pageContentHeight < $(document).height()) {
              setTimeout((function() {
                $('.page-content').height($(document).height());
              }), 100);
            }
          } else {
            if (pageContentHeight < windowHeight) {
              $('.page-content').height(windowHeight);
            }
          }
          this.logopanel.css('left', margin);
          if ($('body').hasClass('sidebar-collapsed')) {
            this.topbar.css('width', 1200);
          } else {
            topbarWidth = 1200 - this.sidebarWidth;
            this.sidebarFooter.css('left', margin);
            if ($('body').hasClass('fixed-sidebar')) {
              this.sidebar.css('margin-left', margin);
              $('.topbar').css('width', topbarWidth);
            }
            if ($('body').hasClass('sidebar-light')) {
              this.topbar.css('width', 960);
            } else {
              this.topbar.css('width', topbarWidth);
            }
          }
          $.backstretch(['../assets/global/images/gallery/bg1.jpg', '../assets/global/images/gallery/bg2.jpg', '../assets/global/images/gallery/bg3.jpg', '../assets/global/images/gallery/bg4.jpg'], {
            duration: 4000,
            fade: 600
          });
        } else {
          $('.backstretch').remove();
        }
      }
    };


    /* Create Boxed Layout */

    Base.prototype.createBoxedLayout = function() {
      this.removeSidebarHover();
      $('body').addClass('boxed');
      this.handleboxedLayout();
      $('#switch-boxed').prop('checked', true);
      $.cookie('boxed-layout', 1);
    };


    /* Remove boxed layout */

    Base.prototype.removeBoxedLayout = function() {
      if ($('body').hasClass('boxed')) {
        $('body').removeClass('boxed');
        this.logopanel.css('left', '').css('right', '');
        this.topbar.css('width', '');
        this.sidebar.css('margin-left', '').css('margin-right', '');
        this.sidebarFooter.css('left', '').css('right', '');
        $.removeCookie('boxed-layout');
        $('#switch-boxed').prop('checked', false);
        $.backstretch('destroy');
      }
    };

    Base.prototype.toggleboxedLayout = function() {
      if ($('body').hasClass('boxed')) {
        this.removeBoxedLayout();
      } else {
        this.createBoxedLayout();
      }
    };


    /* Toggle Sidebar Collapsed */

    Base.prototype.collapsedSidebar = function() {
      if ($('body').css('position') !== 'relative') {
        if (!$('body').hasClass('sidebar-collapsed')) {
          this.createCollapsedSidebar();
        } else {
          this.removeCollapsedSidebar();
        }
      } else {
        if ($('body').hasClass('sidebar-show')) {
          $('body').removeClass('sidebar-show');
        } else {
          $('body').addClass('sidebar-show');
        }
      }
      this.handleboxedLayout();
    };

    Base.prototype.createCollapsedSidebar = function() {
      $('body').addClass('sidebar-collapsed');
      $('.sidebar').css('width', '').resizable().resizable('destroy');
      $('.nav-sidebar ul').attr('style', '');
      $(this).addClass('menu-collapsed');
      this.destroySideScroll();
      $('#switch-sidebar').prop('checked');
      $.cookie('sidebar-collapsed', 1);
    };

    Base.prototype.removeCollapsedSidebar = function() {
      $('body').removeClass('sidebar-collapsed');
      if (!$('body').hasClass('submenu-hover')) {
        $('.nav-sidebar li.active ul').css({
          display: 'block'
        });
      }
      $(this).removeClass('menu-collapsed');
      if ($('body').hasClass('sidebar-light') && !$('body').hasClass('sidebar-fixed')) {
        $('.sidebar').height('');
      }
      this.createSideScroll();
      $.removeCookie('sidebar-collapsed');
    };


    /* Reset to Default Style, remove all cookie and custom layouts */

    Base.prototype.resetStyle = function() {
      $('#reset-style').on('click', function(event) {
        event.preventDefault();
        removeBoxedLayout();
        removeSidebarHover();
        removeSubmenuHover();
        removeCollapsedSidebar();
        $.removeCookie('main-color');
        $.removeCookie('main-name');
        $.removeCookie('theme');
        $.removeCookie('bg-name');
        $.removeCookie('bg-color');
        $.removeCookie('submenu-hover');
        $.removeCookie('sidebar-collapsed');
        $.removeCookie('sidebar-hover');
        $.removeCookie('boxed-layout');
        $.removeCookie('main-color', {
          path: '/'
        });
        $.removeCookie('main-name', {
          path: '/'
        });
        $.removeCookie('theme', {
          path: '/'
        });
        $.removeCookie('bg-name', {
          path: '/'
        });
        $.removeCookie('bg-color', {
          path: '/'
        });
        $.removeCookie('boxed-layout', {
          path: '/'
        });
        $.removeCookie('sidebar-hover', {
          path: '/'
        });
        $('body').removeClass(function(index, css) {
          return (css.match(/(^|\s)bg-\S+/g) || []).join(' ');
        });
        $('body').removeClass(function(index, css) {
          return (css.match(/(^|\s)color-\S+/g) || []).join(' ');
        });
        $('body').removeClass(function(index, css) {
          return (css.match(/(^|\s)theme-\S+/g) || []).join(' ');
        });
        $('body').addClass('theme-sdtl').addClass('color-default');
        $('.builder .theme-color').removeClass('active');
        $('.theme-color').each(function() {
          if ($(this).data('color') === '#319DB5') {
            $(this).addClass('active');
          }
        });
        $('.builder .theme').removeClass('active');
        $('.builder .theme-default').addClass('active');
        $('.builder .sp-replacer').removeClass('active');
      });
    };


    /* ========================================================== */


    /* BEGIN SIDEBAR */


    /* Sidebar Sortable menu & submenu */

    handleSidebarSortable = function() {
      $('.menu-settings').on('click', '#reorder-menu', function(e) {
        e.preventDefault();
        $('.nav-sidebar').removeClass('remove-menu');
        $('.nav-sidebar').sortable({
          connectWith: '.nav-sidebar > li',
          handle: 'a',
          placeholder: 'nav-sidebar-placeholder',
          opacity: 0.5,
          axis: 'y',
          dropOnEmpty: true,
          forcePlaceholderSize: true,
          receive: function(event, ui) {
            $('body').trigger('resize');
          }
        });

        /* Sortable children */
        $('.nav-sidebar .children').sortable({
          connectWith: 'li',
          handle: 'a',
          opacity: 0.5,
          dropOnEmpty: true,
          forcePlaceholderSize: true,
          receive: function(event, ui) {
            $('body').trigger('resize');
          }
        });
        $(this).attr('id', 'end-reorder-menu');
        $(this).html('End reorder menu');
        $('.remove-menu').attr('id', 'remove-menu').html('Remove menu');
      });

      /* End Sortable Menu Elements */
      $('.menu-settings').on('click', '#end-reorder-menu', function(e) {
        e.preventDefault();
        $('.nav-sidebar').sortable();
        $('.nav-sidebar').sortable('destroy');
        $('.nav-sidebar .children').sortable().sortable('destroy');
        $(this).attr('id', 'remove-menu').html('Reorder menu');
      });
    };


    /* Sidebar Remove Menu Elements */

    handleSidebarRemove = function() {

      /* Remove Menu Elements */
      $('.menu-settings').on('click', '#remove-menu', function(e) {
        e.preventDefault();
        $('.nav-sidebar').sortable();
        $('.nav-sidebar').sortable('destroy');
        $('.nav-sidebar .children').sortable().sortable('destroy');
        $('.nav-sidebar').removeClass('remove-menu').addClass('remove-menu');
        $(this).attr('id', 'end-remove-menu').html('End remove menu');
        $('.reorder-menu').attr('id', 'reorder-menu').html('Reorder menu');
      });

      /* End Remove Menu Elements */
      $('.menu-settings').on('click', '#end-remove-menu', function(e) {
        e.preventDefault();
        $('.nav-sidebar').removeClass('remove-menu');
        $(this).attr('id', 'remove-menu').html('Remove menu');
      });
      $('.sidebar').on('click', '.remove-menu > li', function() {
        var $menu, $remove_txt;
        $menu = $(this);
        if ($(this).hasClass('nav-parent')) {
          $remove_txt = 'Are you sure to remove this menu (all submenus will be deleted too)?';
        } else {
          $remove_txt = 'Are you sure to remove this menu?';
        }
        bootbox.confirm($remove_txt, function(result) {
          if (result === true) {
            $menu.addClass('animated bounceOutLeft');
            window.setTimeout((function() {
              $menu.remove();
            }), 300);
          }
        });
      });
    };


    /* Hide User & Search Sidebar */

    handleSidebarHide = function() {
      var hiddenElements, visibleElements;
      hiddenElements = $(':hidden');
      visibleElements = $(':visible');
      $('.menu-settings').on('click', '#hide-top-sidebar', function(e) {
        var this_text;
        e.preventDefault();
        this_text = $(this).text();
        $('.sidebar .sidebar-top').slideToggle(300);
        if (this_text === 'Hide user & search') {
          $(this).text('Show user & search');
        }
      });
      $('.topbar').on('click', '.toggle-sidebar-top', function(e) {
        e.preventDefault();
        $('.sidebar .sidebar-top').slideToggle(300);
        if ($('.toggle-sidebar-top span').hasClass('icon-user-following')) {
          $('.toggle-sidebar-top span').removeClass('icon-user-following').addClass('icon-user-unfollow');
        } else {
          $('.toggle-sidebar-top span').removeClass('icon-user-unfollow').addClass('icon-user-following');
        }
      });
    };


    /* Change statut of user in sidebar: available, busy, away, invisible */

    Base.prototype.changeUserStatut = function() {
      $('.sidebar').on('click', '.user-login li a', function(e) {
        var currentStatut, statut;
        e.preventDefault();
        statut = $(this).find('span').text();
        currentStatut = $('.user-login button span').text();
        $('.user-login button span').text(statut);
        if (statut === 'Busy') {
          $('.user-login button i:not(.fa)').removeClass().addClass('busy');
        }
        if (statut === 'Invisible') {
          $('.user-login button i:not(.fa)').removeClass().addClass('turquoise');
        }
        if (statut === 'Away') {
          $('.user-login button i:not(.fa)').removeClass().addClass('away');
        }
      });
    };


    /* Create custom scroll for sidebar used for fixed sidebar */

    Base.prototype.createSideScroll = function() {
      if ($.fn.mCustomScrollbar) {
        console.log("Has custom thingy");
        this.destroySideScroll();
        if (!$('body').hasClass('sidebar-collapsed') && !$('body').hasClass('sidebar-collapsed') && !$('body').hasClass('submenu-hover') && $('body').hasClass('fixed-sidebar')) {
          console.log("inside scrolll");
          $('.sidebar-inner').mCustomScrollbar({
            scrollButtons: {
              enable: false
            },
            autoHideScrollbar: true,
            scrollInertia: 150,
            theme: 'light-thin',
            advanced: {
              updateOnContentResize: true
            }
          });
        }
        if ($('body').hasClass('sidebar-top')) {
          this.destroySideScroll();
        }
      } else {
        console.log("sorry");
      }
    };


    /* Destroy sidebar custom scroll */

    Base.prototype.destroySideScroll = function() {
      $('.sidebar-inner').mCustomScrollbar('destroy');
    };


    /* Toggle submenu open */

    Base.prototype.toggleSidebarMenu = function() {
      if ($('body').hasClass('sidebar-collapsed') || $('body').hasClass('sidebar-top') || $('body').hasClass('submenu-hover')) {
        $('.nav-sidebar .children').css({
          display: ''
        });
      } else {
        $('.nav-active.active .children').css('display', 'block');
      }
      $('.sidebar').on('click', '.nav-sidebar li.nav-parent > a', function(e) {
        var parent, sub;
        e.preventDefault();
        if ($('body').hasClass('sidebar-collapsed') && !$('body').hasClass('sidebar-hover')) {
          return;
        }
        if ($('body').hasClass('submenu-hover')) {
          return;
        }
        parent = $(this).parent().parent();
        parent.children('li.active').children('.children').slideUp(200);
        $('.nav-sidebar .arrow').removeClass('active');
        parent.children('li.active').removeClass('active');
        sub = $(this).next();
        if (sub.is(':visible')) {
          sub.children().addClass('hidden-item');
          $(this).parent().removeClass('active');
          sub.slideUp(200, function() {
            sub.children().removeClass('hidden-item');
          });
        } else {
          $(this).find('.arrow').addClass('active');
          sub.children().addClass('is-hidden');
          setTimeout((function() {
            sub.children().addClass('is-shown');
          }), 0);
          sub.slideDown(200, function() {
            $(this).parent().addClass('active');
            setTimeout((function() {
              sub.children().removeClass('is-hidden').removeClass('is-shown');
            }), 500);
          });
        }
      });
    };


    /**** Handle Sidebar Widgets *** */

    Base.prototype.sidebarWidgets = function() {

      /* Folders Widget */
      var myvalues1, myvalues2, myvalues3, sparkline1, sparkline2, sparkline3;
      if ($('.sidebar-widgets .folders').length) {
        $('.new-folder').on('click', function() {
          $('.sidebar-widgets .add-folder').show();
          return false;
        });
        $('.add-folder input').keypress(function(e) {
          if (e.which === 13) {
            $('.sidebar-widgets .add-folder').hide();
            $('<li><a href="#"><i class="icon-docs c-blue"></i>' + $(this).val() + '</a> </li>').insertBefore('.add-folder');
            $(this).val('');
          }
        });
        content.addEventListener('click', function(ev) {
          var addFolder, target;
          addFolder = document.getElementById('add-folder');
          target = ev.target;
          if (target !== addFolder) {
            $('.sidebar-widgets .add-folder').hide();
          }
        });
      }

      /* Labels Widget */
      if ($('.sidebar-widgets .folders').length) {
        $('.new-label').on('click', function() {
          $('.sidebar-widgets .add-label').show();
          return false;
        });
        $('.add-label input').keypress(function(e) {
          if (e.which === 13) {
            $('.sidebar-widgets .add-label').hide();
            $('<li><a href="#"><i class="fa fa-circle-o c-blue"></i>' + $(this).val() + '</a> </li>').insertBefore('.add-label');
            $(this).val('');
          }
        });
        content.addEventListener('click', function(ev) {
          var addFolder, target;
          addFolder = document.getElementById('add-label');
          target = ev.target;
          if (target !== addFolder) {
            $('.sidebar-widgets .add-label').hide();
          }
        });
      }

      /* Sparkline  Widget */
      if ($.fn.sparkline && $('.dynamicbar1').length) {
        myvalues1 = [13, 14, 16, 15, 11, 14, 20, 14, 12, 16, 11, 17, 19, 16];
        myvalues2 = [14, 17, 16, 12, 18, 16, 22, 15, 14, 17, 11, 18, 11, 12];
        myvalues3 = [18, 14, 15, 14, 15, 12, 21, 16, 18, 14, 12, 15, 17, 19];
        sparkline1 = $('.dynamicbar1').sparkline(myvalues1, {
          type: 'bar',
          barColor: '#319DB5',
          barWidth: 4,
          barSpacing: 1,
          height: '28px'
        });
        sparkline2 = $('.dynamicbar2').sparkline(myvalues2, {
          type: 'bar',
          barColor: '#C75757',
          barWidth: 4,
          barSpacing: 1,
          height: '28px'
        });
        sparkline3 = $('.dynamicbar3').sparkline(myvalues3, {
          type: 'bar',
          barColor: '#18A689',
          barWidth: 4,
          barSpacing: 1,
          height: '28px'
        });
      }

      /* Progress Bar  Widget */
      if ($('.sidebar-widgets .progress-chart').length) {
        $(window).load(function() {
          setTimeout((function() {
            $('.sidebar-widgets .progress-chart .stat1').progressbar();
          }), 900);
          setTimeout((function() {
            $('.sidebar-widgets .progress-chart .stat2').progressbar();
          }), 1200);
          setTimeout((function() {
            $('.sidebar-widgets .progress-chart .stat3').progressbar();
          }), 1500);
        });
      }
      $('.sidebar').on('click', '.hide-widget', function(e) {
        var delta, end, start, this_widget;
        e.preventDefault();
        if (start === 0) {
          start = (new Date).getTime();
          $(this).toggleClass('widget-hidden');
          this_widget = $(this).parent().parent().next();
          this_widget.slideToggle(200, function() {
            var this_widget;
            this.createSideScroll();
          });
          end = (new Date).getTime();
          delta = end - start;
        } else {
          end = (new Date).getTime();
          delta = end - start;
          if (delta > 200) {
            start = (new Date).getTime();
            $(this).toggleClass('widget-hidden');
            this_widget = $(this).parent().parent().next();
            this_widget.slideToggle(200, function() {
              this.createSideScroll();
            });
            end = (new Date).getTime();
            delta = end - start;
          }
        }
      });
    };


    /* END SIDEBAR */


    /* ========================================================= */


    /* Switch Top navigation to Sidebar */

    Base.prototype.reposition_topnav = function() {
      var headerLeftWidth, headerRightWidth, topbarSpace, topbarWidth;
      if ($('.nav-horizontal').length > 0) {
        topbarWidth = $('.topbar').width();
        headerRightWidth = $('.header-right').width();
        if ($('.header-left .nav-horizontal').length) {
          headerLeftWidth = $('.header-left').width() + 40;
        } else {
          headerLeftWidth = $('.nav-sidebar.nav-horizontal > li').length * 140;
        }
        topbarSpace = topbarWidth - headerLeftWidth - headerRightWidth;
        if ($('.nav-horizontal').css('position') === 'relative' || topbarSpace < 0) {
          if ($('.sidebar .nav-sidebar').length === 2) {
            $('.nav-horizontal').insertAfter('.nav-sidebar:eq(1)');
          } else {
            if ($('.sidebar .nav-horizontal').length === 0) {
              $('.nav-horizontal').appendTo('.sidebar-inner');
              $('.sidebar-widgets').css('margin-bottom', 20);
            }
          }
          $('.nav-horizontal').css({
            display: 'block'
          }).addClass('nav-sidebar').css('margin-bottom', 100);
          this.createSideScroll();
          $('.nav-horizontal .children').removeClass('dropdown-menu');
          $('.nav-horizontal > li').each(function() {
            $(this).removeClass('open');
            $(this).find('a').removeAttr('class');
            $(this).find('a').removeAttr('data-toggle');
          });

          /* We hide mega menu in sidebar since video / images are too big and not adapted to sidebar */
          if ($('.nav-horizontal').hasClass('mmenu')) {
            $('.nav-horizontal.mmenu').css('height', 0).css('overflow', 'hidden');
          }
        } else {
          if ($('.sidebar .nav-horizontal').length > 0) {
            $('.sidebar-widgets').css('margin-bottom', 100);
            $('.nav-horizontal').removeClass('nav-sidebar').appendTo('.topnav');
            $('.nav-horizontal .children').addClass('dropdown-menu').removeAttr('style');
            $('.nav-horizontal li:last-child').show();
            $('.nav-horizontal > li > a').each(function() {
              $(this).parent().removeClass('active');
              if ($(this).parent().find('.dropdown-menu').length > 0) {
                $(this).attr('class', 'dropdown-toggle');
                $(this).attr('data-toggle', 'dropdown');
              }
            });
          }

          /* If mega menu, we make it visible */
          if ($('.nav-horizontal').hasClass('mmenu')) {
            $('.nav-horizontal.mmenu').css('height', '').css('overflow', '');
          }
        }
      }
    };


    /***** Scroll to top button **** */

    Base.prototype.scrollTop = function() {
      $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
          $('.scrollup').fadeIn();
        } else {
          $('.scrollup').fadeOut();
        }
      });
      $('.scrollup').click(function() {
        $('html, body').animate({
          scrollTop: 0
        }, 1000);
        return false;
      });
    };

    Base.prototype.sidebarBehaviour = function() {
      var sidebarMenuHeight, windowHeight, windowWidth;
      windowWidth = $(window).width();
      windowHeight = $(window).height() - $('.topbar').height();
      sidebarMenuHeight = $('.nav-sidebar').height();
      if (windowWidth < 1024) {
        $('body').removeClass('sidebar-collapsed');
      }
      if ($('body').hasClass('sidebar-collapsed') && sidebarMenuHeight > windowHeight) {
        $('body').removeClass('fixed-sidebar');
        destroySideScroll();
      }
    };


    /* Function for datables filter in head */

    window.stopPropagation = function(evt) {
      if (evt.stopPropagation !== void 0) {
        evt.stopPropagation();
      } else {
        evt.cancelBubble = true;
      }
    };

    Base.prototype.detectIE = function() {
      var edge, msie, trident, ua;
      ua = window.navigator.userAgent;
      msie = ua.indexOf('MSIE ');
      trident = ua.indexOf('Trident/');
      edge = ua.indexOf('Edge/');
      if (msie > 0 || trident > 0 || edge > 0) {
        $('html').addClass('ie-browser');
      }
    };

    return Base;

  })(Marionette.LayoutView);

}).call(this);
(function() {
  var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  App.Views.About = (function(superClass) {
    extend(About, superClass);

    function About() {
      return About.__super__.constructor.apply(this, arguments);
    }

    About.prototype.template = function() {
      return JST["backbone/templates/about"];
    };

    About.prototype.el = '#pagewrapper';

    About.prototype.initialize = function() {
      return this.render();
    };

    About.prototype.render = function() {
      return this.$el.html(this.template);
    };

    return About;

  })(App.Views.Base);

}).call(this);
(function() {
  var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  App.Views.Contact = (function(superClass) {
    extend(Contact, superClass);

    function Contact() {
      return Contact.__super__.constructor.apply(this, arguments);
    }

    Contact.prototype.template = function() {
      return JST["backbone/templates/contact"];
    };

    Contact.prototype.el = '#pagewrapper';

    Contact.prototype.initialize = function() {
      return this.render();
    };

    Contact.prototype.render = function() {
      return this.$el.html(this.template);
    };

    return Contact;

  })(App.Views.Base);

}).call(this);
(function() {
  var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  App.Views.Dashboard = (function(superClass) {
    extend(Dashboard, superClass);

    function Dashboard() {
      return Dashboard.__super__.constructor.apply(this, arguments);
    }

    Dashboard.prototype.template = function() {
      return Mustache.render(JST['backbone/templates/layout']());
    };

    Dashboard.prototype.el = 'body';

    Dashboard.prototype.className = 'fixed-topbar fixed-sidebar color-default dashboard theme-sdtd bg-light-dark';

    Dashboard.prototype.model = new App.Models.User({
      id: $('meta[name=current_user]').attr("content")
    });

    Dashboard.prototype.regions = {
      "sidebar": ".sidebar",
      "topbar": ".topbar",
      "quickview": "#quickview",
      "morphsearch": "#morphsearch",
      "pageContent": ".page-content"
    };

    Dashboard.prototype.events = {
      'click .lockout': 'lockout'
    };

    Dashboard.prototype.initialize = function() {
      var othis;
      this.render();
      othis = this;
      return this.model.fetch({
        success: function() {
          console.log("Success");
          window.sidebar = new App.Views.Sidebar(othis.model);
          othis.topbar.show(new App.Views.Topbar(othis.model));
          othis.quickview.show(new App.Views.Quickview());
          return othis.morphsearch.show(new App.Views.MorphSearch());
        },
        error: function() {
          return console.log("Error");
        }
      });
    };

    Dashboard.prototype.render = function() {
      this.$el.html(this.template());
      this.$el.addClass(this.className);
      return window.loaderView = new App.Views.Loader();
    };

    Dashboard.prototype.onShow = function(v, r, o) {
      return this.hideLoader();
    };

    Dashboard.prototype.onSwap = function() {
      return this.hideLoader();
    };

    Dashboard.prototype.doesSomething = function() {
      return alert('Im doing something');
    };

    Dashboard.prototype.lockout = function() {
      return App.router.navigate('lock', {
        trigger: true
      });
    };

    return Dashboard;

  })(App.Views.Base);

}).call(this);
(function() {
  var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  App.Views.Footer = (function(superClass) {
    extend(Footer, superClass);

    function Footer() {
      return Footer.__super__.constructor.apply(this, arguments);
    }

    Footer.prototype.template = function() {
      return $('#footer').html();
    };

    Footer.prototype.el = '#footer';

    Footer.prototype.events = {
      'click .something': 'footer'
    };

    Footer.prototype.initialize = function() {
      return this.render();
    };

    Footer.prototype.render = function() {
      return this.$el.html(this.template);
    };

    Footer.prototype.footer = function() {
      return alert('Something in the Footer');
    };

    return Footer;

  })(App.Views.Base);

}).call(this);
(function() {
  var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  App.Views.Header = (function(superClass) {
    extend(Header, superClass);

    function Header() {
      return Header.__super__.constructor.apply(this, arguments);
    }

    Header.prototype.template = function() {
      return $('header').html();
    };

    Header.prototype.el = 'header';

    Header.prototype.events = {
      'click .logo': 'logo'
    };

    Header.prototype.initialize = function() {
      return this.render();
    };

    Header.prototype.render = function() {
      return this.$el.html(this.template);
    };

    Header.prototype.logo = function() {
      return alert('Logo');
    };

    return Header;

  })(App.Views.Base);

}).call(this);
(function() {
  $(window).load(function() {
    'use strict';
    setTimeout((function() {
      $('.loader-overlay').addClass('loaded');
      $('body > section').animate({
        opacity: 1
      }, 400);
    }), 500);
  });

}).call(this);
(function() {
  var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  App.Views.Home = (function(superClass) {
    extend(Home, superClass);

    function Home() {
      return Home.__super__.constructor.apply(this, arguments);
    }

    Home.prototype.template = function() {
      return JST['backbone/templates/partials/_login'];
    };

    Home.prototype.el = 'body';

    Home.prototype.className = 'account2';

    Home.prototype.events = {
      'click .somethingspecial': 'doesSomething'
    };

    Home.prototype.initialize = function() {
      console.log(this.template());
      this.render();
      this.$el.addClass(this.className);
      $('form').prepend("<input type='hidden' name='authenticity_token' value='" + $('meta[name=csrf-token]').attr('content') + "'>");
      $.backstretch(['/assets/gallery/login-26ffa86860093fbf13ba0934975043e5.jpg'], {
        fade: 600,
        duration: 4000
      });
      return $(window).resize(function() {
        this.copyrightPos();
      });
    };

    Home.prototype.render = function() {
      return this.$el.html(this.template());
    };

    Home.prototype.doesSomething = function() {
      return alert('Im doing something');
    };

    return Home;

  })(App.Views.Base);

}).call(this);
(function() {
  var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  App.Views.HeaderLeft = (function(superClass) {
    extend(HeaderLeft, superClass);

    function HeaderLeft() {
      return HeaderLeft.__super__.constructor.apply(this, arguments);
    }

    HeaderLeft.prototype.template = function() {
      return JST["backbone/templates/partials/_header-left"];
    };

    HeaderLeft.prototype.onShow = function(v, r, o) {
      return this.unWrap(r);
    };

    return HeaderLeft;

  })(App.Views.Base);

}).call(this);
(function() {
  var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  App.Views.Loader = (function(superClass) {
    extend(Loader, superClass);

    function Loader() {
      return Loader.__super__.constructor.apply(this, arguments);
    }

    Loader.prototype.template = function() {
      return JST["backbone/templates/partials/_loader"];
    };

    Loader.prototype.el = '.loader-overlay';

    Loader.prototype.initialize = function() {
      Loader.__super__.initialize.apply(this, arguments);
      return this.render();
    };

    Loader.prototype.render = function() {
      console.log('loader');
      return this.$el.html(this.template());
    };

    return Loader;

  })(App.Views.Base);

}).call(this);
(function() {
  var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  App.Views.MessagesHeader = (function(superClass) {
    extend(MessagesHeader, superClass);

    function MessagesHeader() {
      return MessagesHeader.__super__.constructor.apply(this, arguments);
    }

    MessagesHeader.prototype.template = function() {
      return JST['backbone/templates/partials/_messages-header'];
    };

    MessagesHeader.prototype.events = {
      'mouseenter': 'toggle_mbox',
      'mouseleave': 'toggle_mbox'
    };

    MessagesHeader.prototype.initialize = function() {
      return this.render();
    };

    MessagesHeader.prototype.render = function() {
      console.log("message header");
      return this.$el.html(this.template());
    };

    MessagesHeader.prototype.toggle_mbox = function(e) {
      return $(e.currentTarget).find('.dropdown-menu').toggle();
    };

    MessagesHeader.prototype.onShow = function(v, r, o) {
      return this.unWrap(r);
    };

    return MessagesHeader;

  })(App.Views.Base);

}).call(this);
(function() {
  var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  App.Views.MorphSearch = (function(superClass) {
    extend(MorphSearch, superClass);

    function MorphSearch() {
      return MorphSearch.__super__.constructor.apply(this, arguments);
    }

    MorphSearch.prototype.template = function() {
      return JST['backbone/templates/partials/_morphsearch'];
    };

    MorphSearch.prototype.initialize = function() {
      return console.log("morphsearch");
    };

    MorphSearch.prototype.onShow = function(v, r, o) {
      return this.unWrap(r);
    };

    return MorphSearch;

  })(App.Views.Base);

}).call(this);
(function() {
  var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  App.Views.Nav = (function(superClass) {
    extend(Nav, superClass);

    function Nav() {
      return Nav.__super__.constructor.apply(this, arguments);
    }

    Nav.prototype.template = function() {
      return JST["backbone/templates/partials/_nav"];
    };

    Nav.prototype.hoverTimeout = null;

    Nav.prototype.events = {
      'click .nav-parent': 'toggleMenu',
      'mouseenter li': 'hoverOn_li',
      'mouseleave li': 'hoverOff_li',
      'mouseenter: li .children': 'childHoverOn',
      'mouseleave: li .children': 'childHoverOff'
    };

    Nav.prototype.initialize = function() {
      return console.log("Rendering Nav");
    };

    Nav.prototype.onShow = function(v, r, o) {
      return this.unWrap(r);
    };

    Nav.prototype.hoverOn_li = function(ev) {
      clearTimeout(this.hoverTimeout);
      $(ev.currentTarget).siblings().removeClass('nav-hover');
      return $(ev.currentTarget).addClass("nav-hover");
    };

    Nav.prototype.hoverOff_li = function(ev) {
      var $self;
      $self = $(ev.currentTarget);
      return this.hoverTimeout = setTimeout((function() {
        return $self.removeClass('nav-hover');
      }), 200);
    };

    Nav.prototype.childHoverOn = function(ev) {
      clearTimeout(this.hoverTimeout);
      $(ev.currentTarget).closest('.nav-parent').siblings().removeClass('nav-hover');
      return $(ev.currentTarget).closest('.nav-parent').addClass('nav-hover');
    };

    Nav.prototype.childHoverOff = function(ev) {
      var $self;
      $self = $(ev.currentTarget);
      return this.hoverTimeout = setTimeout((function() {
        return $(ev.currentTarget).closest('.nav-parent').removeClass('nav-hover');
      }), 200);
    };

    Nav.prototype.toggleMenu = function(e) {
      $('li.nav-parent').removeClass("nav-active active");
      return $(e.currentTarget).addClass("nav-active active");
    };

    return Nav;

  })(App.Views.Base);

}).call(this);
(function() {
  var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  App.Views.NotificationHeader = (function(superClass) {
    extend(NotificationHeader, superClass);

    function NotificationHeader() {
      return NotificationHeader.__super__.constructor.apply(this, arguments);
    }

    NotificationHeader.prototype.template = function() {
      return JST["backbone/templates/partials/_notification-header"];
    };

    NotificationHeader.prototype.events = {
      'mouseenter': 'toggle_nbox',
      'mouseleave': 'toggle_nbox'
    };

    NotificationHeader.prototype.toggle_nbox = function(e) {
      return $(e.currentTarget).find('.dropdown-menu').toggle();
    };

    NotificationHeader.prototype.onShow = function(v, r, o) {
      return this.unWrap(r);
    };

    return NotificationHeader;

  })(App.Views.Base);

}).call(this);
(function() {
  var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  App.Views.Quickview = (function(superClass) {
    extend(Quickview, superClass);

    function Quickview() {
      return Quickview.__super__.constructor.apply(this, arguments);
    }

    Quickview.prototype.template = function() {
      return JST["backbone/templates/partials/_quickview-sidebar"];
    };

    Quickview.prototype.initialize = function() {
      return console.log("quickview");
    };

    Quickview.prototype.onShow = function(v, r, o) {
      var othis;
      this.unWrap(r);
      this.quickviewSidebar();
      this.quickviewHeight;
      othis = this;
      return $(window).resize(function() {
        othis.quickviewHeight();
      });
    };

    return Quickview;

  })(App.Views.Base);

}).call(this);
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
(function() {
  var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  App.Views.SidebarTop = (function(superClass) {
    extend(SidebarTop, superClass);

    function SidebarTop() {
      return SidebarTop.__super__.constructor.apply(this, arguments);
    }

    SidebarTop.prototype.template = function(model) {
      return Mustache.render(JST["backbone/templates/partials/_sidebar_top"](), model);
    };

    SidebarTop.prototype.initialize = function(model) {
      return this.model = model;
    };

    SidebarTop.prototype.onShow = function(v, r, o) {
      return this.unWrap(r);
    };

    return SidebarTop;

  })(App.Views.Base);

}).call(this);
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
(function() {
  var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  App.Views.Topbar = (function(superClass) {
    extend(Topbar, superClass);

    function Topbar() {
      return Topbar.__super__.constructor.apply(this, arguments);
    }

    Topbar.prototype.template = function() {
      return JST["backbone/templates/partials/_topbar"];
    };

    Topbar.prototype.initialize = function(model) {
      return this.model = model;
    };

    Topbar.prototype.regions = {
      "headerLeft": "#header-left",
      "UserDropdown": "#language-header",
      "NotifHeader": "#notifications-header",
      "MessageHeader": "#messages-header",
      "UserHeader": "#user-header"
    };

    Topbar.prototype.onShow = function(v, r, o) {
      this.headerLeft.show(new App.Views.HeaderLeft());
      this.UserDropdown.show(new App.Views.UserDropdown());
      this.NotifHeader.show(new App.Views.NotificationHeader());
      this.MessageHeader.show(new App.Views.MessagesHeader());
      return this.UserHeader.show(new App.Views.UserHeader(this.model));
    };

    return Topbar;

  })(App.Views.Base);

}).call(this);
(function() {
  var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  App.Views.UserDropdown = (function(superClass) {
    extend(UserDropdown, superClass);

    function UserDropdown() {
      return UserDropdown.__super__.constructor.apply(this, arguments);
    }

    UserDropdown.prototype.template = function() {
      return JST["backbone/templates/partials/_user-dropdown"];
    };

    UserDropdown.prototype.events = {
      'mouseenter': 'toggle_lbox',
      'mouseleave': 'toggle_lbox'
    };

    UserDropdown.prototype.toggle_lbox = function(e) {
      return $(e.currentTarget).find('.dropdown-menu').toggle();
    };

    UserDropdown.prototype.onShow = function(v, r, o) {
      return this.unWrap(r);
    };

    return UserDropdown;

  })(App.Views.Base);

}).call(this);
(function() {
  var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  App.Views.UserHeader = (function(superClass) {
    extend(UserHeader, superClass);

    function UserHeader() {
      return UserHeader.__super__.constructor.apply(this, arguments);
    }

    UserHeader.prototype.template = function(model) {
      return Mustache.render(JST["backbone/templates/partials/_user-header"](), model);
    };

    UserHeader.prototype.events = {
      'mouseenter': 'toggle_lbox',
      'mouseleave': 'toggle_lbox'
    };

    UserHeader.prototype.initialize = function(model) {
      return this.model = model;
    };

    UserHeader.prototype.toggle_lbox = function(e) {
      return $(e.currentTarget).find('.dropdown-menu').toggle();
    };

    UserHeader.prototype.onShow = function(v, r, o) {
      this.unWrap(r);
      return this.topbar = $('.topbar');
    };

    return UserHeader;

  })(App.Views.Base);

}).call(this);
(function() {
  var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  App.Views.Widgets = (function(superClass) {
    extend(Widgets, superClass);

    function Widgets() {
      return Widgets.__super__.constructor.apply(this, arguments);
    }

    Widgets.prototype.template = function() {
      return JST["backbone/templates/partials/_widgets"]({
        onShow: function(v, r, o) {
          return this.unWrap(r);
        }
      });
    };

    return Widgets;

  })(App.Views.Base);

}).call(this);
(function() {
  var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  App.Views.Lock = (function(superClass) {
    extend(Lock, superClass);

    function Lock() {
      return Lock.__super__.constructor.apply(this, arguments);
    }

    Lock.prototype.template = function(model) {
      return Mustache.render(JST['backbone/templates/lockscreen'](), model);
    };

    Lock.prototype.el = 'body';

    Lock.prototype.className = 'account separate-inputs';

    Lock.prototype.events = {
      'click .somethingspecial': 'doesSomething'
    };

    Lock.prototype.initialize = function(model) {
      var circle;
      this.model = model;
      this.render();
      $.backstretch(['/assets/gallery/login4-d424bb6f8ff2960018a0d22024c88c2f.jpg', '/assets/gallery/login3-2c04c7fb3b1235c22ad4c75b1b570815.jpg', '/assets/gallery/login2-6c9f0fd1ab2502b2c2191394491732c2.jpg', '/assets/gallery/login-26ffa86860093fbf13ba0934975043e5.jpg'], {
        fade: 600,
        duration: 4000
      });

      /* Creation of the Circle Progress */
      return circle = new ProgressBar.Circle('#loader', {
        color: '#aaa',
        strokeWidth: 3,
        trailWidth: 3,
        trailColor: 'rgba(255,255,255,0.1)',
        easing: 'easeInOut',
        duration: 2000,
        from: {
          color: '#319DB5',
          width: 3
        },
        to: {
          color: '#319DB5',
          width: 3
        },
        step: function(state, circle) {
          circle.path.setAttribute('stroke', state.color);
          circle.path.setAttribute('stroke-width', state.width);
        }
      });
    };

    Lock.prototype.render = function() {
      this.$el.html(this.template(this.model.toJSON()));
      this.$el.addClass(this.className);
      window.loaderView = new App.Views.Loader();
      return this.hideLoader();
    };

    Lock.prototype.doesSomething = function() {
      return alert('Im doing something');
    };

    Lock.prototype.onShow = function(v, r, o) {
      return this.unWrap();
    };

    return Lock;

  })(App.Views.Base);

}).call(this);
(function() {
  var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  App.Views.Profile = (function(superClass) {
    extend(Profile, superClass);

    function Profile() {
      return Profile.__super__.constructor.apply(this, arguments);
    }

    Profile.prototype.template = function(model) {
      return Mustache.render(JST["backbone/templates/profile"](), model);
    };

    Profile.prototype.className = "page-app page-profil";

    Profile.prototype.newItemHeight = $('.new-item');

    Profile.prototype.simple_map = void 0;

    Profile.prototype.events = {
      'click .logo': 'logo'
    };

    Profile.prototype.initialize = function(model) {
      this.model = model;
      return console.log(model);
    };

    Profile.prototype.onShow = function(v, r, o) {
      var newItemHeight;
      this.unWrap(r);
      $('.page-content').addClass(this.className);
      newItemHeight = $('.new-item').height();
      $('.new-item').height(0);
      setTimeout((function() {
        TweenMax.to($('.new-item'), .5, {
          css: {
            height: newItemHeight,
            autoAlpha: 1,
            marginBottom: 30
          },
          ease: Circ.easeInOut
        });
        setTimeout((function() {
          $('.new-item').css('height', '');
        }), 600);
      }), 4000);

      /* Google Map */
      if ($('#profil-map').length) {
        this.simple_map = new GMaps({
          el: '#profil-map',
          lat: 37.775,
          lng: -122.41833,
          zoomControl: false,
          zoomControlOpt: {
            style: 'SMALL',
            position: 'TOP_LEFT'
          },
          panControl: false,
          streetViewControl: false,
          mapTypeControl: false,
          overviewMapControl: false
        });
        this.simple_map.addMarker({
          lat: 37.776,
          lng: -122.41833,
          title: 'Marker with InfoWindow',
          icon: '/assets/profil_page/marker-9b4be35a47acc30cb12b5774a4c75a7d.png'
        });
      }

      /* Handle Comments Show / Hide */
      $('.profil-content').on('click', '.more-comments', function() {
        $(this).closest('.more').find('.share').slideUp(200, function() {
          $(this).closest('.more').find('.comments').slideToggle(200);
          $(this).closest('.more').find('.more-comments').toggleClass('active');
          $(this).closest('.more').find('.more-share').removeClass('active');
        });
      });

      /* Handle Like Comment */
      $('.profil-content').on('click', '.like', function() {
        $(this).toggleClass('liked');
      });

      /* Handle Share Show / Hide */
      $('.profil-content').on('click', '.more-share', function() {
        $(this).closest('.more').find('.comments').slideUp(200, function() {
          $(this).closest('.more').find('.share').slideToggle(200);
          $(this).closest('.more').find('.more-share').toggleClass('active');
          $(this).closest('.more').find('.more-comments').removeClass('active');
        });
      });

      /* Radar Chart */
      this.radarChartData = {
        labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
        datasets: [
          {
            label: 'My Second dataset',
            fillColor: 'rgba(151,187,205,0.2)',
            strokeColor: 'rgba(151,187,205,1)',
            pointColor: 'rgba(151,187,205,1)',
            pointStrokeColor: '#fff',
            pointHighlightFill: '#fff',
            pointHighlightStroke: 'rgba(151,187,205,1)',
            data: [38, 48, 40, 89, 96, 27, 90]
          }
        ]
      };
      setTimeout((function() {
        window.myRadar = new Chart(document.getElementById('profil-chart').getContext('2d')).Radar({
          labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
          datasets: [
            {
              label: 'My Second dataset',
              fillColor: 'rgba(151,187,205,0.2)',
              strokeColor: 'rgba(151,187,205,1)',
              pointColor: 'rgba(151,187,205,1)',
              pointStrokeColor: '#fff',
              pointHighlightFill: '#fff',
              pointHighlightStroke: 'rgba(151,187,205,1)',
              data: [38, 48, 40, 89, 96, 27, 90]
            }
          ],
          responsive: true,
          tooltipCornerRadius: 0,
          animationSteps: 60
        });
      }), 1500);

      /* Item Map */
      this.miami = new google.maps.LatLng(25.7738889, -80.1938889);
      this.neighborhoods = [new google.maps.LatLng(25.7768889, -80.1788889)];
      this.markers = [];
      this.iterator = 0;
      this.map = void 0;
      google.maps.event.addDomListener(window, 'load', this.map_init);
      return this.drop();
    };

    Profile.prototype.map_init = function() {
      var map, mapOptions;
      mapOptions = {
        zoom: 12,
        center: this.miami,
        panControl: false,
        zoomControl: false,
        streetViewControl: false,
        mapTypeControl: false,
        overviewMapControl: false,
        styles: [
          {
            'featureType': 'water',
            'stylers': [
              {
                'saturation': 43
              }, {
                'lightness': -11
              }, {
                'hue': '#0088ff'
              }
            ]
          }, {
            'featureType': 'road',
            'elementType': 'geometry.fill',
            'stylers': [
              {
                'hue': '#ff0000'
              }, {
                'saturation': -100
              }, {
                'lightness': 99
              }
            ]
          }, {
            'featureType': 'road',
            'elementType': 'geometry.stroke',
            'stylers': [
              {
                'color': '#808080'
              }, {
                'lightness': 54
              }
            ]
          }, {
            'featureType': 'landscape.man_made',
            'elementType': 'geometry.fill',
            'stylers': [
              {
                'color': '#ece2d9'
              }
            ]
          }, {
            'featureType': 'poi.park',
            'elementType': 'geometry.fill',
            'stylers': [
              {
                'color': '#ccdca1'
              }
            ]
          }, {
            'featureType': 'road',
            'elementType': 'labels.text.fill',
            'stylers': [
              {
                'color': '#767676'
              }
            ]
          }, {
            'featureType': 'road',
            'elementType': 'labels.text.stroke',
            'stylers': [
              {
                'color': '#ffffff'
              }
            ]
          }, {
            'featureType': 'poi',
            'stylers': [
              {
                'visibility': 'off'
              }
            ]
          }, {
            'featureType': 'landscape.natural',
            'elementType': 'geometry.fill',
            'stylers': [
              {
                'visibility': 'on'
              }, {
                'color': '#b8cb93'
              }
            ]
          }, {
            'featureType': 'poi.park',
            'stylers': [
              {
                'visibility': 'on'
              }
            ]
          }, {
            'featureType': 'poi.sports_complex',
            'stylers': [
              {
                'visibility': 'on'
              }
            ]
          }, {
            'featureType': 'poi.medical',
            'stylers': [
              {
                'visibility': 'on'
              }
            ]
          }, {
            'featureType': 'poi.business',
            'stylers': [
              {
                'visibility': 'simplified'
              }
            ]
          }
        ]
      };
      map = new google.maps.Map(document.getElementById('item-map'), mapOptions);
    };

    Profile.prototype.drop = function() {
      var othis;
      othis = this;
      setTimeout((function() {
        var i;
        i = 0;
        while (i < othis.neighborhoods.length) {
          setTimeout((function() {
            othis.addMarker();
          }), i * 350);
          i++;
        }
      }), 1500);
    };

    Profile.prototype.addMarker = function() {
      this.markers.push(new google.maps.Marker({
        position: this.neighborhoods[this.iterator],
        map: this.map,
        draggable: false,
        animation: google.maps.Animation.DROP
      }));
      this.iterator++;
    };

    return Profile;

  })(App.Views.Base);

}).call(this);
(function() {
  var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  App.Views.SignUp = (function(superClass) {
    extend(SignUp, superClass);

    function SignUp() {
      return SignUp.__super__.constructor.apply(this, arguments);
    }

    SignUp.prototype.template = function() {
      return JST['backbone/templates/partials/_signup'];
    };

    SignUp.prototype.el = 'body';

    SignUp.prototype.className = 'account2 signup';

    SignUp.prototype.events = {
      'click .somethingspecial': 'doesSomething',
      'click #submit-form': 'doSignUp',
      'click #facebook': 'sign_in_with_facebook'
    };

    SignUp.prototype.initialize = function() {
      console.log(this.template());
      this.render();
      this.$el.addClass(this.className);
      $('form').prepend("<input type='hidden' name='authenticity_token' value='" + $('meta[name=csrf-token]').attr('content') + "'>");
      $.backstretch(['/assets/gallery/login-26ffa86860093fbf13ba0934975043e5.jpg'], {
        fade: 600,
        duration: 4000
      });
      return $(window).resize(function() {
        this.copyrightPos();
      });
    };

    SignUp.prototype.render = function() {
      return this.$el.html(this.template());
    };

    SignUp.prototype.doesSomething = function() {
      return alert('Im doing something');
    };

    SignUp.prototype.doSignUp = function(e) {
      return alert("BOOM");
    };

    return SignUp;

  })(App.Views.Base);

}).call(this);
(function() {
  var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  App.Routers.Main = (function(superClass) {
    extend(Main, superClass);

    function Main() {
      return Main.__super__.constructor.apply(this, arguments);
    }

    Main.prototype.routes = {
      '': 'home',
      'lock': 'lock',
      'dashboard': 'dashboard',
      'profile': 'profile',
      'users/sign_up': 'signup'
    };

    Main.prototype.regions = {
      "body": "body"
    };

    Main.prototype.initialize = function() {
      console.log("routing");
      this.usermodel = new App.Models.User({
        id: $('meta[name=current_user]').attr("content")
      });
      return window.dashboardView = new App.Views.Dashboard();
    };

    Main.prototype.home = function() {
      console.log("Rendering Home");
      return window.homeview = new App.Views.Home();
    };

    Main.prototype.signup = function() {
      console.log("Rendering Sign Up");
      return window.homeview = new App.Views.SignUp();
    };

    Main.prototype.dashboard = function() {
      console.log("Rendering Dashboard");
      return window.dashboardView = new App.Views.Dashboard();
    };

    Main.prototype.profile = function() {
      var othis;
      console.log("Rendering Profile");
      othis = this;
      return this.usermodel.fetch({
        success: function() {
          return dashboardView.pageContent.show(new App.Views.Profile(othis.usermodel));
        }
      });
    };

    Main.prototype.lock = function() {
      var othis;
      console.log("Lock Out");
      othis = this;
      return this.usermodel.fetch({
        success: function() {
          return window.lock = new App.Views.Lock(othis.usermodel);
        }
      });
    };

    return Main;

  })(Marionette.AppRouter);

}).call(this);
