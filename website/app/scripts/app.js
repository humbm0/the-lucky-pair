'use strict';

/**
 * @ngdoc overview
 * @name ecommerceWebsiteApp
 * @description
 * # ecommerceWebsiteApp
 *
 * Main module of the application.
 */
angular
  .module('ecommerceWebsiteApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ui.router',
    'ngSanitize',
    'ngTouch'
  ])
  .run(function(){
    Parse.initialize("myAppId");
    Parse.serverURL = 'https://the-lucky-pair.herokuapp.com/parse';
  })
  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.when('', '/');
    $urlRouterProvider.rule(function ($injector, $location) {
      var path = $location.path();
      var match = path.match(/(.*)!\/{0,1}$/);

      if (match) {
        return match[1];
      }
    });
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'views/home.html',
        controller: 'MainCtrl',
        resolve: {
          products: function($q, Product) {
            var def = $q.defer();
            Product.query().then(function (products) {
              def.resolve(products);
            });
            return def.promise;
          }
        }
      })
      .state('store', {
        url: '/shop',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
        // resolve: {
        //   products: function($q, Product) {
        //     var def = $q.defer();
        //     Product.query().then(function (products) {
        //       def.resolve(products);
        //     });
        //     return def.promise;
        //   }
        // }
      })
      .state('productDetails', {
        url: '/products/{productId}',
        templateUrl: 'views/productdetails.html',
        controller: 'ProductsCtrl',
        resolve: {
          product: function ($q, $stateParams, Product) {
            var def = $q.defer();
            Product.get($stateParams.productId).then(function (data) {
              def.resolve(data);
            });
            return def.promise;
          }
        }
      });
  });
