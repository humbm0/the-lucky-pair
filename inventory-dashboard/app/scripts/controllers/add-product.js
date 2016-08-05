'use strict';

/**
 * @ngdoc function
 * @name inventoryDashboardApp.controller:AddProductCtrl
 * @description
 * # AddProductCtrl
 * Controller of the inventoryDashboardApp
 */
angular.module('inventoryDashboardApp')
  .controller('AddProductCtrl', function ($scope, ProductService) {

    $scope.categories = ProductService;
    $scope.categories.getCategories().then(function(){
      // console.log($scope.categories);
    });
    $scope.collections = ProductService;
    $scope.collections.getCollections().then(function(){
      console.log($scope.collections);
    });

    $scope.addProduct = function(data){
      //add data to table (add row to table)
      var Product = Parse.Object.extend("Products");
      var product = new Product();
      var Category = Parse.Object.extend("Categories");
      var category = new Category();

      var data = {
        "name": data.name,
        "price": data.price,
        "sale_price": data.sale_price,
        "category": data.category,
        "stock_level": data.stock_level,
        "stock_satus": data.stock_satus,
        "description": data.description,
        "collection": data.collection,
        "colour": data.colour,
        // "parent": category
      };
      console.log(data.collection);
      product.save(data).then(function success(obj){
        console.log("success saved " + obj.id);
        // var products = category.relation("products");
        // products.add(product);
        // product.save();

      }, function error(obj, err){
        console.error(err);
      });
    };

  });
