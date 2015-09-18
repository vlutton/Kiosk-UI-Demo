/* global malarkey:false, toastr:false, moment:false */
(function() {
  'use strict';

  angular
    .module('kioskUi')
    .constant('malarkey', malarkey)
    .constant('toastr', toastr)
    .constant('moment', moment)
    .constant('FIREBASE_URL', 'https://zed-kiosk.firebaseio.com/');

})();
