'use strict';

/**
 * @ngdoc function
 * @name ecommerceWebsiteApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ecommerceWebsiteApp
 */

 angular.module('ecommerceWebsiteApp')
   .controller('MainCtrl', function ($scope, Product) {
     $scope.products = Product;
     $scope.products.query().then(function(){
       console.log($scope.products);
     });

     $scope.quickView = function(id){
       console.log('quicky');
       Product.get(id).then(function (data) {
         return data;
         console.log(data);
       });
     }

   });
