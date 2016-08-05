'use strict';

angular.module('ecommerceWebsiteApp')
  .component('buyButton', {
    templateUrl: 'views/buybutton.html',
    bindings: {
      'product' : '<'
    }
  });
