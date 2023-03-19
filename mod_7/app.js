(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService)
.filter('adollar', AngularDollarFilter);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
// the controller managing the list of things to buy
function ToBuyController(ShoppingListCheckOffService) {
    var toBuyController = this;

    toBuyController.items = ShoppingListCheckOffService.toBuyList();

    toBuyController.buyItem = function (itemIndex) {
        ShoppingListCheckOffService.buyItem(itemIndex);
    };

    
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
//Controller managing list of things already bought
function AlreadyBoughtController(ShoppingListCheckOffService) {
    var alreadyBoughtController = this;

    alreadyBoughtController.items = ShoppingListCheckOffService.boughtList();

}

//Service that manages actual data behind controllers
function ShoppingListCheckOffService() {
    var service = this;


    //default to list with stuff in it
    var itemsToBuy = [
        {name: "cookie", quantity: 10, pricePerItem: 1 },
        {name: "soda", quantity: 3, pricePerItem: 2 },
        {name: "apples", quantity: 15, pricePerItem: 0.5 },
        {name: "pizza", quantity: 5, pricePerItem: 15 },
        {name: "chips", quantity: 2, pricePerItem: .75 }
    ]; 

    var itemsBought = [];

    service.toBuyList = function() {
        return itemsToBuy;
    };

    service.boughtList = function() {
        return itemsBought;
    };


    //transitions item from itemsToBuy list to itemsBought list
    service.buyItem = function (itemIndex) {
        console.log("item index  to buy: ", itemIndex);
        var itemRaw = itemsToBuy.splice(itemIndex, 1);
        //splice returns an array, in this case array of 1 item
        var item = itemRaw[0];
        console.log ("item is : ", item);
        itemsBought.push(item);

        console.log("itemsBought now has size: ", itemsBought.length);
        console.log (itemsBought);
        console.log(itemsToBuy);
    };


}

//filter to show the triple $$$ to signify AngularDollars
function AngularDollarFilter() {
    return function (input ) {
        input = "$$$" + input;
        return input;
    };
}

})();