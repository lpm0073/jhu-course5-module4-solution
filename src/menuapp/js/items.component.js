(function() {
'use strict';

angular.module('MenuApp')
  .component('items', {
    templateUrl: 'src/menuapp/templates/itemlist.html',
    bindings: {
      items: '<'
    }
  });

})();
