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
