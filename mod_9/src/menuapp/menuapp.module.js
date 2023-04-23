(function () {
    'use strict';
    
    angular.module('MenuApp', ['ui.router', 'data']);
    //angular.module('MenuApp', ['ui.router']);
    


    // //try to add the service directly/locally to just see if it works
    // ref pattern at https://ultimatecourses.com/blog/resolve-promises-in-angular-routes
    // angular.module('MenuApp')
    // .service('LocalService', LocalService);
    
    
    // LocalService.$inject = ['$http']
    // function LocalService($http) {
    //     console.log(" direct LocalService is alive");

    //     var service = this;
        
    //     service.getItems = function () {
    //         return $http.get("https://coursera-jhu-default-rtdb.firebaseio.com/categories.json").then(function (response) {
    //             return response.data;
    //         });
    //     }
            

    //     // service.getAllCategories = function () {
    //     //     console.log("MenuDataService.getAllCategories() has been called");
    //     //     // var response = $http ( {
    //     //     //         method: "GET",
    //     //     //         url: " https://coursera-jhu-default-rtdb.firebaseio.com/categories.json"
    //     //     // });

    //     //     return $http ( {
    //     //         method: "GET",
    //     //         url: " https://coursera-jhu-default-rtdb.firebaseio.com/categories.json"
    //     //      });


    //     //     console.log("in menuDataService, data: " , response);

    //     //     return response;
    //     // };


    //     //test a service method with no promise/http component
    //     service.getAllCategories = function () {
    //         var items = [
    //             {name: "SHRIMP", short_name: "01"}, {name: "KANGAROO", short_name: "02"}
    //         ];

    //         return items;
    //     };


    //     service.getItemsForCategory(categoryShortName) = function () {

    //     };



    //}


    })();