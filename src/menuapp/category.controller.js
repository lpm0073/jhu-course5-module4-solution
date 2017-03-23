(function () {
'use strict';

angular.module('MenuApp')
.controller('CategoryController', CategoryController);


CategoryController.$inject = ['ShoppingListService', 'items'];
function CategoryController(MenuDataService, items) {
  var mainlist = this;
  mainlist.items = items;
}

})();
