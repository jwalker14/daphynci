// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
// NOT SURE WHAT THIS FILE IS GOOD FOR YET.? -Jason
//
//= require jquery
//= require jquery_ujs
//= require jquery-migrate-min
//= require plugins/greensock
//= require bootstrap-sprockets
//= require jquery.backstretch
//= require plugins/lada.min
//= require plugins/login-v2.js.erb
//= require socket.io
//= require turbolinks
//= require underscore
//= require backbone
//= require backbone_rails_sync
//= require backbone_datalink
//= require backbone/app
//= require_tree .



$(document).ready(function() {
  App.init();
});


$(document).on('page:load', function(){
  Backbone.history.stop()
  App.init();
})