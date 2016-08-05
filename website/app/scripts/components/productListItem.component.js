'use strict';

angular.module('ecommerceWebsiteApp')
  .component('productListItem', {
    templateUrl: 'views/productlistitem.html',
    bindings: {
      'product': '<'
    }
  })
  .controller('productListItemCtrl', function ($scope, $rootScope, Product) {

    $scope.quickView = function(id){
      var id = id.productId
      Product.get(id).then(function(response) {
          $rootScope.productDetail = response;
          console.log($rootScope.productDetail);
      }).then(function() {
        $('.quick-view').addClass('open');
      });
    };


  });
