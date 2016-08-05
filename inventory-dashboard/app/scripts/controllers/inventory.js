'use strict';

/**
 * @ngdoc function
 * @name inventoryDashboardApp.controller:InventoryCtrl
 * @description
 * # InventoryCtrl
 * Controller of the inventoryDashboardApp
 */
angular.module('inventoryDashboardApp')
  .controller('InventoryCtrl', function ($scope, ProductService) {

    $scope.products = ProductService;
    $scope.products.query().then(function(){
      console.log($scope.products);
    });

  });
