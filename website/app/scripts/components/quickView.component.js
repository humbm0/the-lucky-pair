'use strict';

angular.module('ecommerceWebsiteApp')
  .component('quickView', {
    templateUrl: 'views/quick-view.html',
    bindings: {
      'productDetail' : '<'
    }
  });
