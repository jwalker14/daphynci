$(window).load ->
  'use strict'
  setTimeout (->
    $('.loader-overlay').addClass 'loaded'
    $('body > section').animate { opacity: 1 }, 400
    return
  ), 500
  return