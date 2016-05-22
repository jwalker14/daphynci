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
