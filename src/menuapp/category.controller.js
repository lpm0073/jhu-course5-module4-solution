(function () {
'use strict';

angular.module('MenuApp')
.controller('CategoryController', CategoryController);

// {
//   "id":81,
//   "short_name":"L",
//   "name":"Lunch",
//   "special_instructions":"Sunday-Friday 11:15am-3:00pm. Served with your choice of rice (Vegetable Fried RIce, Steamed Rice, Brown Rice), AND EITHER soup (Hot \u0026 Sour, Wonton, Vegetable, Egg Drop, Chicken Corn Soup) OR veggie egg roll. $1.00 extra to have both soup and egg roll.",
//   "url":"https://davids-restaurant.herokuapp.com/categories/81.json"
// }

CategoryController.$inject = ['MenuDataService', 'items'];
function CategoryController(MenuDataService, items) {
  var categoryList = this;
  categoryList.items = items;

  categoryList.id = item.id;
  categoryList.short_name = item.short_name;
  categoryList.name = item.name;
  categoryList.special_instructions = item.special_instructions;
  categoryList.url = item.url;

}

})();
