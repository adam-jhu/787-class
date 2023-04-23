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

            resolve: {
                items: ['MenuDataService', function (MenuDataService) {
                    console.log("in routes resolve block for categoryList service call");
                    return MenuDataService.getAllCategories();
                    //return [{name: "chicken lo mein", short_name: "CL"}, {name:"Shrimp Tempora", short_name: "ST"}];
                }]
            }


        })


        //details of menu items for a particular (selected) category
        .state('menuDetail', {
            url: '/menu-detail/{shortname}',
            templateUrl: 'src/menuapp/templates/menudetail.template.html',
            controller: 'ItemsController as itemsController',
            resolve: {
                items: ['$stateParams', 'MenuDataService', function ($stateParams, MenuDataService) {
                  console.log("in routes resolve block for menuDetail, param was: ", $stateParams.shortname);
                  return MenuDataService.getItemsForCategory($stateParams.shortname);
                  //return MenuDataService.getAllCategories();
                  //return [{name: "chicken lo mein", short_name: "CL"}, {name:"Shrimp Tempora", short_name: "ST"}];

                }]
            }
        });
    }
    
    })();