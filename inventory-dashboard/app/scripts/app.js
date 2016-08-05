'use strict';

/**
 * @ngdoc overview
 * @name inventoryDashboardApp
 * @description
 * # inventoryDashboardApp
 *
 * Main module of the application.
 */
angular
  .module('inventoryDashboardApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    // 'ProductService'
  ])
  .run(function(){
    Parse.initialize("myAppId");
    Parse.serverURL = 'https://the-lucky-pair.herokuapp.com/parse';
  })
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/inventory', {
        templateUrl: 'views/inventory.html',
        controller: 'InventoryCtrl',
        controllerAs: 'inventory'
      })
      .when('/add-product', {
        templateUrl: 'views/add-product.html',
        // controller: 'AddProductCtrl',
        // controllerAs: 'addProduct'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
