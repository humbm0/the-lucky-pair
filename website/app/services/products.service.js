'use strict';

angular.module('ecommerceWebsiteApp')
.factory('Product', function ($q) {

  var products = new Parse.Query(Parse.Object.extend("Products"));
  var categories = new Parse.Query(Parse.Object.extend("Categories"));
  var collections = new Parse.Query(Parse.Object.extend("Collections"));

    var self =  {
        'page': 0,
        'page_size': 20,
        'isLoading': false,
        'isSaving': false,
        'hasMore': true,
        'results': [],
        'lowStock': [],
        'categories': [],
        'collections': [],
        'refresh': function () {
          self.page = 0;
          self.isLoading = false;
          self.isSaving = false;
          self.hasMore = true;
          self.results = [];
          return self.query();
        },
        'next': function () {
          self.page += 1;
          return self.query();
        },
        query: function(){
            self.results = [];
            var defer = $q.defer();

            products.skip(self.page * self.page_size); // skip the first 20 results
            products.limit(self.page_size); // limit to at most 20 results

            products.find({
                success: function(results){
                    // console.log('found ' + results.length + ' designers');
                    for (var i = 0; i < results.length; i++) {
                         var product = results[i];
                         self.results.push(product);
                       }

                    defer.resolve(results);

                    //are we at the end of the list?
                    if (results.length == 0) {
                      self.hasMore = false;
                      // console.log('no more designers');
                    }
                },
                error: function(error){
                    console.log('error finding products');
                    defer.reject(error);
                }
            });

            return defer.promise;
        },
        queryStockLevel: function(){
            var defer = $q.defer();

            products.skip(self.page * self.page_size); // skip the first 20 results
            products.limit(self.page_size); // limit to at most 20 results

            products.lessThan("stock_level", 10);

            products.find({
                success: function(results){
                    // console.log('found ' + results.length + ' designers');
                    for (var i = 0; i < results.length; i++) {
                         var product = results[i];
                         self.lowStock.push(product);
                       }

                    defer.resolve(results);

                    //are we at the end of the list?
                    if (results.length == 0) {
                      self.hasMore = false;
                      // console.log('no more designers');
                    }
                },
                error: function(error){
                    console.log('error finding low stock products');
                    defer.reject(error);
                }
            });

            return defer.promise;
        },
        getCategories: function(){
            var defer = $q.defer();

            categories.skip(self.page * self.page_size); // skip the first 20 results
            categories.limit(self.page_size); // limit to at most 20 results

            categories.find({
                success: function(results){
                    // console.log('found ' + results.length + ' designers');
                    for (var i = 0; i < results.length; i++) {
                         var category = results[i];
                         self.categories.push(category);
                       }
                    defer.resolve(results);
                    //are we at the end of the list?
                    if (results.length == 0) {
                      self.hasMore = false;
                      // console.log('no more designers');
                    }
                },
                error: function(error){
                    console.log('error finding products');
                    defer.reject(error);
                }
            });
            return defer.promise;
        },
        getCollections: function(){
            var defer = $q.defer();
            collections.find({
                success: function(results){
                    // console.log('found ' + results.length + ' designers');
                    for (var i = 0; i < results.length; i++) {
                         var collection = results[i];
                         self.collections.push(collection);
                       }
                    defer.resolve(results);
                    //are we at the end of the list?
                    if (results.length == 0) {
                      self.hasMore = false;
                      // console.log('no more designers');
                    }
                },
                error: function(error){
                    console.log('error finding products');
                    defer.reject(error);
                }
            });
            return defer.promise;
        },
        get: function(id){
            var defer = $q.defer();
            products.get(id,{
                success: function(result){
                    defer.resolve(result);
                },
                error: function(error){
                    defer.reject(error);
                }
            });
            return defer.promise;
        },
    }

    return self;

  });
