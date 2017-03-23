// create a service called MenuDataService in it. This service should be declared on
// the data module, not on the MenuApp module.
//
//The MenuDataService should have 2 methods:
(function () {
'use strict';

angular.module('Data')
.service('MenuDataService', MenuDataService);


MenuDataService.$inject = ['$q', '$timeout']
function getAllCategories($q, $timeout) {
  var service = this;

  //getAllCategories -
  //        this method should return a promise which is a result of using
  //        the $http service, using the following REST API
  //        endpoint: https://davids-restaurant.herokuapp.com/categories.json
  //

  // List of shopping items
  var items = [];

  // Pre-populate a no cookie list


  // Simulates call to server
  // Returns a promise, NOT items array directly
  service.getItems = function () {
    var deferred = $q.defer();

    // Wait 2 seconds before returning
    $timeout(function () {
      // deferred.reject(items);
      deferred.resolve(items);
    }, 800);

    return deferred.promise;
  };
}

function getItemsForCategory(categoryShortName) {
  //getItemsForCategory(categoryShortName) -
  //        this method should return a promise which is a result of using the
  //        $http service, using the following REST API
  //        endpoint: https://davids-restaurant.herokuapp.com/menu_items.json?category=,
  //        where, before the call to the server, your code should append whatever
  //        categoryShortName value was passed in as an argument into the
  //        getItemsForCategory method.

}

})();
