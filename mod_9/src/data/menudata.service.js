(function () {
    'use strict';
    
    angular.module('data')
    .service('MenuDataService', MenuDataService);
    

    
    MenuDataService.$inject = ['$http']
    function MenuDataService($http) {
        console.log("MenuDataService is alive");

        var service = this;
        
        // //test different way to use http
        // service.getItems = function () {
        //     console.log(" in menudataservice . get Items() - direct http call/return");
        //     return $http.get("https://coursera-jhu-default-rtdb.firebaseio.com/categories.json").then(function (response) {
        //         return response.data;
        //     });
        // }
            
            
        // ref $http pattern at https://ultimatecourses.com/blog/resolve-promises-in-angular-routes
        service.getAllCategories = function () {
            console.log("MenuDataService.getAllCategories() has been called");

            //console.log(" in menudataservice . get Items() - direct http call/return");
            return $http.get("https://coursera-jhu-default-rtdb.firebaseio.com/categories.json").then(function (response) {
                return response.data;
            });
        }


        service.getItemsForCategory = function (categoryShortName) {
            console.log("MenuDataService.getItemsForCategory() COPIED has been called, param was: ", categoryShortName);

            var url = "https://coursera-jhu-default-rtdb.firebaseio.com/menu_items/" + categoryShortName + ".json";

            //console.log(" in menudataservice . get Items() - direct http call/return");
            //return $http.get("https://coursera-jhu-default-rtdb.firebaseio.com/menu_items/A.json").then(function (response) {
            return $http.get(url).then(function (response) {
                console.log("get category data: ", response.data);
                return response.data;
            });
        }

    }
    
    })();