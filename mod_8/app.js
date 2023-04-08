(function () {
    'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.constant('ApiURL', 'https://coursera-jhu-default-rtdb.firebaseio.com/menu_items.json')
.directive('foundItems', FoundItemsDirective);


//directive
function FoundItemsDirective() {
    var ddo = {
        templateUrl: 'foundList.html',
        scope: {
          list: '<myFoundItems',
          onRemove: '&'
        }
        // ,
        // controller: FoundItemsDirectiveController,
        // controllerAs: 'foundItems',
        // bindToController: true
    };

    return ddo;
}


function FoundItemsDirectiveController () {
    var items = this;

    //items.

}


//controller 
NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
    var controller = this;
    controller.searchTerm = ""; //default to empty
    controller.found = [];

    controller.search = function () {
        console.log('controller search value is: ', controller.searchTerm);
        var promise = MenuSearchService.getMatchedMenuItems(controller.searchTerm);

        promise.then( function (response){
            controller.found = response; //store returned array of results
            console.log("unwrapping promise, response: ", response);
            console.log('controller found dat: ', controller.found);
        })
        .catch(function (error){
            console.log("error:", error);
        })
        //console.log("controller.found : ", controller.found);
    };

    controller.removeItem = function (itemIndex) {
        console.log('in controller, called remove item on index:', itemIndex);
        MenuSearchService.removeItem(itemIndex);
    };

  
    

}


//service to handle menu searching
MenuSearchService.$inject = ['$http', 'ApiURL'];
function MenuSearchService($http, ApiURL) {
    var service = this;

    //hold the items found
    var foundItems = []; //empty array

    service.getMatchedMenuItems = function (searchTerm) {

        console.log("service will search for: ", searchTerm);

        var response = $http({
            method: "GET",
            url: (ApiURL)
        }).then(function (result)  {
            console.log("data:", result.data);
            //console.log("data.length:", result.data.length);

            
            //loop through all the menu items, checking for searchTerm
            for(var letterCategory in result.data){
            //for(var letter = 0; letter < result.data.length; letter++ ) {
                //console.log("letter : ", letter);
                //console.log("letterCategory : ", letterCategory);
                //console.log("result.data[letterCategory] : ", result.data[letterCategory]);
                //console.log("result.data[letterCategory].menu_items : ", result.data[letterCategory].menu_items);
                
                var categoryItems = result.data[letterCategory]; //individual category
                var categoryMenuItems = result.data[letterCategory].menu_items; //array of menu_items


                for (var menuItem in categoryMenuItems) {
                    //console.log("menuItem: " + menuItem);
                    //console.log("menuItem description: " + categoryMenuItems[menuItem].description);
                    var itemDescription  = categoryMenuItems[menuItem].description
                    if( !(itemDescription.indexOf(searchTerm) === -1) ){
                        //item found
                        console.log("==> FOUND ==> should push found obj:", categoryMenuItems[menuItem]);
                        foundItems.push(categoryMenuItems[menuItem]);
                        //console.log("FOUND FOUND NAME===> item with name: ", categoryMenuItems[menuItem].name);
                    }
                }
            }
            console.log("service found this many found items:", foundItems.length);
            return foundItems;

        }).catch (function (error) {
            console.log("error:" + error)
        });

        return response;
    }


    service.removeItem = function (itemIndex) {
        console.log('in service.removeItem, for index: ', itemIndex);
        foundItems.splice(itemIndex, 1);
    }

}

})();