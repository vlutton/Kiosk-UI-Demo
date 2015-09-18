(function() {
  'use strict';

  angular
    .module('kioskUi')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/catalog/catalog.html',
        controller: 'catalogController',
        controllerAs: 'vm'
      })
      .state('catalog', {
        url: '/catalog',
        templateUrl: 'app/catalog/catalog.html',
        controller: 'catalogController',
        controllerAs: 'vm'
      })
      .state('cart', {
        url: '/cart',
        templateUrl: 'app/cart/cart.html',
        controller: 'CartController',
        controllerAs: 'vm'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
