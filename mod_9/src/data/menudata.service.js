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
        
        //test different way top use http
        service.getItems = function () {
            console.log(" in menudataservice . get Items() - direct http call/return");
            return $http.get("https://coursera-jhu-default-rtdb.firebaseio.com/categories.json").then(function (response) {
                return response.data;
            });
        }
            
            

        service.getAllCategories = function () {
            console.log("MenuDataService.getAllCategories() has been called");

            //console.log(" in menudataservice . get Items() - direct http call/return");
            return $http.get("https://coursera-jhu-default-rtdb.firebaseio.com/categories.json").then(function (response) {
                return response.data;
            });

            // var response = $http ( {
            //         method: "GET",
            //         url: " https://coursera-jhu-default-rtdb.firebaseio.com/categories.json"
            // });

            // return $http ( {
            //     method: "GET",
            //     url: " https://coursera-jhu-default-rtdb.firebaseio.com/categories.json"
            //  });


            // console.log("in menuDataService, data: " , response);

            // return response;
        };


        // //test a service method with no promise/http component
        // service.getAllCategories = function () {
        //     var items = [
        //         {name: "SHRIMP", short_name: "01"}, {name: "KANGAROO", short_name: "02"}
        //     ];

        //     return items;
        // };


        // service.getItemsForCategory(categoryShortName) = function () {

        // };

      // Simulates call to server
      // Returns a promise, NOT items array directly
        // service.getItems = function () {

        //     var items = [
        //         {name: "SHRIMP", short_name: "01"}, {name: "KANGAROO", short_name: "02"}
        //     ];

        //     var deferred = $q.defer();
        
        //     // Wait 2 seconds before returning
        //     $timeout(function () {
        //     // deferred.reject(items);
        //     deferred.resolve(items);
        //     }, 800);
        
        //     return deferred.promise;
        // };

    }
    
    })();