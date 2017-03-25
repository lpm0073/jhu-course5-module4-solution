// create a service called MenuDataService in it. This service should be declared on
// the data module, not on the MenuApp module.
//
//The MenuDataService should have 2 methods:
(function () {
'use strict';

angular.module('Data')
.service('MenuDataService', MenuDataService);


MenuDataService.$inject = ['$q', '$timeout', '$http', 'ApiBasePath']
function getAllCategories($q, $timeout, $http, ApiBasePath) {
  var service = this;

  //getAllCategories -
  //        this method should return a promise which is a result of using
  //        the $http service, using the following REST API
  //        endpoint: https://davids-restaurant.herokuapp.com/categories.json
  //

      // {
      //   "id":81,
      //   "short_name":"L",
      //   "name":"Lunch",
      //   "special_instructions":"Sunday-Friday 11:15am-3:00pm. Served with your choice of rice (Vegetable Fried RIce, Steamed Rice, Brown Rice), AND EITHER soup (Hot \u0026 Sour, Wonton, Vegetable, Egg Drop, Chicken Corn Soup) OR veggie egg roll. $1.00 extra to have both soup and egg roll.",
      //   "url":"https://davids-restaurant.herokuapp.com/categories/81.json"
      // }


    service.getAllCategories = function () {
      var response = $http({
        method: "GET",
        url: (ApiBasePath + "/categories.json")
      });

      return response;
    };


    //getItemsForCategory(categoryShortName) -
    //        this method should return a promise which is a result of using the
    //        $http service, using the following REST API
    //        endpoint: https://davids-restaurant.herokuapp.com/menu_items.json?category=,
    //        where, before the call to the server, your code should append whatever
    //        categoryShortName value was passed in as an argument into the
    //        getItemsForCategory method.

    service.getItemsForCategory = function (categoryShortName) {
      var response = $http({
        method: "GET",
        url: (ApiBasePath + "/menu_items.json"),
        params: {
          category: categoryShortName
        }
      });

      return response;
    };

  })();


//----------------------------------------------------------------------------------
// MenuCategoriesService.$inject = ['$http', 'ApiBasePath'];
// function MenuCategoriesService($http, ApiBasePath) {
//   var service = this;
//
//   service.getMenuCategories = function () {
//     var response = $http({
//       method: "GET",
//       url: (ApiBasePath + "/categories.json")
//     });
//
//     return response;
//   };
//
//
//   service.getMenuForCategory = function (shortName) {
//     var response = $http({
//       method: "GET",
//       url: (ApiBasePath + "/menu_items.json"),
//       params: {
//         category: shortName
//       }
//     });
//
//     return response;
//   };
//
// }
