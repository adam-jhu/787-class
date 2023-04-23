(function () {
    'use strict';
    
    angular.module('MenuApp')
    .controller('ItemsController', ItemsController);
    
    
    ItemsController.$inject = ['items'];
    function ItemsController(items) {
      var ctrl = this;

      ctrl.$onInit = function () {
            console.log("ItemsController onInit fired");
        };

        ctrl.items = items;
    }
    
})();