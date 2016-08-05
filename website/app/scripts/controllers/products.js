'use strict';

angular.module('ecommerceWebsiteApp')
  .controller('ProductsCtrl', function ($scope, $stateParams, product) {
    $scope.product = product;
    console.log(product);
  });
