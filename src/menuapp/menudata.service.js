// create a service called MenuDataService in it. This service should be declared on
// the data module, not on the MenuApp module.
//
//The MenuDataService should have 2 methods:
(function () {
'use strict';

angular.module('Data')
.service('MenuDataService', MenuDataService);


MenuDataService.$inject = ['$q', '$timeout', '$http', 'ApiBasePath']
function MenuDataService($q, $timeout, $http, ApiBasePath) {
  var service = this;


  service.getAllCategories = function () {
    var response = $http({
      method: "GET",
      url: (ApiBasePath + "/categories.json")
    });

    return response;
  };


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


}

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
