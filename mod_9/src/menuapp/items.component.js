(function () {
    'use strict';
    
    angular.module('MenuApp')
    .component('items', {
      templateUrl: 'src/menuapp/templates/menuitems.template.html',
      bindings: {
        items: '<'
      }
    });
    
    })();