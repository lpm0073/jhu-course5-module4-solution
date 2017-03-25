(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemController', ItemController);

  // {
  // "id":1069,
  // "short_name":"L1",
  // "name":"Orange Chicken",
  // "description":"chunks of chicken, breaded and deep-fried with sauce containing orange peels; white meat by request: for pint $1 extra, for large $2 extra",
  // "price_small":null,
  // "price_large":9.75,
  // "small_portion_name":null,
  // "large_portion_name":null
  // }


ItemController.$inject = ['$stateParams', 'items'];
function ItemController($stateParams, items) {
  var itemDetail = this;
  var item = items[$stateParams.itemId];
  itemDetail.id = item.id;
  itemDetail.short_name = item.short_name;
  itemDetail.name = item.name;
  itemDetail.description = item.description;
  itemDetail.price_small = item.price_small;
  itemDetail.price_large = item.price_large;
  itemDetail.small_portion_name = item.small_portion_name;
  itemDetail.large_portion_name = item.large_portion_name;
}

})();
