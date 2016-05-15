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
//= require jquery-ui
//= require mustache
//= require jquery.mustache
//= require plugins/gsap
//= require ../plugins/bootstrap/js/bootstrap.min.js
//= require jquery.backstretch
//= require plugins/lada.min
//= require plugins/login-v2.js.erb
//= require plugins/jquery.cookies.min.js.erb
//= require ../plugins/jquery-block-ui/jquery.blockUI.min.js
//= require ../plugins/bootbox/bootbox.min.js
//= require ../plugins/mcustom-scrollbar/jquery.mCustomScrollbar.concat.min.js
//= require ../plugins/bootstrap-dropdown/bootstrap-hover-dropdown.min.js
//= require ../plugins/charts-sparkline/sparkline.min.js
//= require ../plugins/retina/retina.min.js
//= require ../plugins/select2/select2.min.js
//= require ../plugins/icheck/icheck.min.js
//= require ../plugins/backstretch/backstretch.min.js
//= require ../plugins/bootstrap-progressbar/bootstrap-progressbar.min.js
//= require ../plugins/noty/jquery.noty.packaged.min.js
//= require ../plugins/bootstrap-editable/js/bootstrap-editable.min.js
//= require ../plugins/bootstrap-context-menu/bootstrap-contextmenu.min.js
//= require ../plugins/multidatepicker/multidatespicker.min.js
//= require ../plugins/metrojs/metrojs.min.js
//= require ../plugins/charts-chartjs/Chart.js
//= require ../plugins/charts-highstock/js/highstock.min.js
//= require ../plugins/charts-highstock/js/modules/exporting.min.js
//= require ../plugins/maps-amcharts/ammap/ammap.min.js
//= require ../plugins/maps-amcharts/ammap/maps/js/worldLow.min.js
//= require ../plugins/maps-amcharts/ammap/themes/black.min.js
//= require ../plugins/skycons/skycons.min.js
//= require ../plugins/simple-weather/jquery.simpleWeather.js
//= require ../plugins/progressbar/progressbar.min.js
//= require ../plugins/countup/countUp.min.js
//= require ../plugins/google-maps/gmaps.min.js
//= require socket.io
//= require turbolinks
//= require underscore
//= require backbone
//= require backbone_rails_sync
//= require backbone_datalink
//= require backbone.marionette
//= require backbone/app
//= require_tree .


$(document).ready(function() {
  App.start();
});


$(document).on('page:load', function(){
  Backbone.history.stop()
  App.start();
})