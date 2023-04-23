(function () {
    'use strict';
    
    angular.module('data')
    .service('MenuDataService', MenuDataService);
    

    // angular.module('MenuApp')
    // .service('MenuDataService', MenuDataService);

    
    MenuDataService.$inject = ['$http']
    function MenuDataService($http) {
        console.log("MenuDataService is alive");

        var service = this;
        
        // //test different way top use http
        // service.getItems = function () {
        //     console.log(" in menudataservice . get Items() - direct http call/return");
        //     return $http.get("https://coursera-jhu-default-rtdb.firebaseio.com/categories.json").then(function (response) {
        //         return response.data;
        //     });
        // }
            
            

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
        // service.getItemsForCategory(categoryShortName) = function () {
        //     console.log("in menuDataService getItemsForCategory, cat: ", categoryShortName);
        //     // var url = "https://coursera-jhu-default-rtdb.firebaseio.com/menu_items/" + categoryShortName + ".json";
        //     // console.log("service.getItemsForCategory about to request url:", url);

        //     // var url = "https://coursera-jhu-default-rtdb.firebaseio.com/menu_items/A.json";
        //     return $http.get("https://coursera-jhu-default-rtdb.firebaseio.com/menu_items/A.json").then(function (response) {
        //         return response.data;
        //     });


        //     // return $http.get("https://coursera-jhu-default-rtdb.firebaseio.com/categories.json").then(function (response) {
        //     //     return response.data;
        //     // });

        // }

        // service.getItemsForCategory(foo) = function () {
        //     console.log ("in getitemsforcategory FOO");

        //     return $http.get("https://coursera-jhu-default-rtdb.firebaseio.com/menu_items/A.json").then(function (response) {
        //         return response.data;
        //     });
        // };


        // //test a service method with no promise/http component
        // service.getAllCategories = function () {
        // service.getItemsForCategory(categoryShortName) = function () {
        //     var items = [
        //         {name: "SHRIMP", short_name: "01"}, {name: "KANGAROO", short_name: "02"}
        //     ];

        //     return items;
        // };






    }
    
    })();