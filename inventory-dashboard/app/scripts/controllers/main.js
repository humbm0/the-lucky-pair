'use strict';

/**
 * @ngdoc function
 * @name inventoryDashboardApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the inventoryDashboardApp
 */
angular.module('inventoryDashboardApp')
  .controller('MainCtrl', function ($scope, ProductService) {

    $scope.lowStock = ProductService;

    $scope.lowStock.queryStockLevel().then(function(){
      console.log($scope.lowStock);
    });
  });
