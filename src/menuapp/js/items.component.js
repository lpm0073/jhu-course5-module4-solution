(function() {
'use strict';

angular.module('MenuApp')
  .component('menuitems', {
    templateUrl: 'src/menuapp/templates/itemlist.html',
    bindings: {
      items: '<'
    }
  });

})();
