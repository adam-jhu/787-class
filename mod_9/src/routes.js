(function () {
    'use strict';
    
    angular.module('MenuApp')
    .config(RoutesConfig);
    
    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function RoutesConfig($stateProvider, $urlRouterProvider) {
    
      // Redirect to home page if no other URL matches
      $urlRouterProvider.otherwise('/');
    
      // *** Set up UI states ***
      $stateProvider
    
      // Home page
      .state('home', {
        url: '/',
        templateUrl: 'src/menuapp/templates/homeview.template.html' 
      })
    
      // Category list page
      .state('categoryList', {
        url: '/category-list',
        templateUrl: 'src/menuapp/templates/categoryview.template.html',
        controller: 'CategoryController as categoryController' ,

        // resolve: {
        //     items: function () {
        //         return [{name: "chicken lo mein", short_name: "CL"}, {name:"Shrimp Tempora", short_name: "ST"}];
        //     }
        // }

        resolve: {
          items: ['MenuDataService', function (MenuDataService) {
            //console.log("in routes resolve block");
            return MenuDataService.getAllCategories();
            //return [{name: "chicken lo mein", short_name: "CL"}, {name:"Shrimp Tempora", short_name: "ST"}];
          }]
        }


        // resolve: {
        //     items: ['MenuDataService', function (MenuDataService) {
        //       //console.log("in routes resolve block");
        //       return MenuDataService.getItems();
        //     }]
        //   }

        // resolve: {
        //   items: ['LocalService', function (LocalService) {
        //     //console.log("in routes resolve block");
        //     return LocalService.getItems();
        //   }]
        // }


      });
    }
    
    })();