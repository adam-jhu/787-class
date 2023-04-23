(function () {
    'use strict';
    
    angular.module('MenuApp')
    .controller('CategoryController', CategoryController);
    
    
    CategoryController.$inject = ['items'];
    function CategoryController(items) {
      var controller = this;

        controller.$onInit = function () {
            console.log("categoryController onInit fired");
        };

      controller.items = items;
    }
    
})();