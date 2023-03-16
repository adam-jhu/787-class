(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
    var toBuyController = this;

    toBuyController.items = ShoppingListCheckOffService.toBuyList();

    toBuyController.buyItem = function (itemIndex) {
        ShoppingListCheckOffService.buyItem(itemIndex);
    };

    
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
    var alreadyBoughtController = this;

    alreadyBoughtController.items = ShoppingListCheckOffService.boughtList();

}

function ShoppingListCheckOffService() {
    var service = this;


    //default to list with stuff in it
    var itemsToBuy = [
        {name: "cookie", quantity: 10},
        {name: "soda", quantity: 3},
        {name: "apples", quantity: 15},
        {name: "pizza", quantity: 5},
        {name: "chips", quantity: 2}
    ]; 

    var itemsBought = [];

    service.toBuyList = function() {
        return itemsToBuy;
    };

    service.boughtList = function() {
        return itemsBought;
    };


    service.buyItem = function (itemIndex) {
        console.log("item index  to buy: ", itemIndex);
        var itemRaw = itemsToBuy.splice(itemIndex, 1);
        var item = itemRaw[0];
        console.log ("item is : ", item);
        itemsBought.push(item);

        console.log("itemsBought now has size: ", itemsBought.length);
        console.log (itemsBought);
        console.log(itemsToBuy);
    };


}


})();