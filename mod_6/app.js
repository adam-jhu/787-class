(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope', '$filter'];

function LunchCheckController($scope, $filter) {
    $scope.judgement = ''; //start with empty non-judgy message

    $scope.messageColor = "black";
    $scope.borderBoxColor = "black";

    $scope.checkLunch = function() {
        console.log($scope.lunchItems);
        if(!$scope.lunchItems) {
            //list is empty
            console.log('list is empty');

            //TURN TEXT message RED
            $scope.messageColor = "red";
            //MAKE TEXTBOX border red
            $scope.borderBoxColor = "red";


            $scope.judgement = 'Please enter data first';
        } else {
            //there is data in the list, check how many
            var items = $scope.lunchItems.split(",");
            console.log("number of items:" + items.length);

            //to start ignore empty items
            //var total = items.length;

            //check for empty items in the list
            var total = 0;
            items.forEach(function (element) { 
                if(element.trim().length > 0) {
                    total += 1 ; //add 1 for every non-empty (non-false) strint item
                    console.log('found item:' + element);
                } else {
                    console.log ("empty item found");
                }
            }) ;



            if(total <= 3 ) {
                $scope.judgement = "Enjoy!";
            } else {
                $scope.judgement = "Too much!";
            }

            //make TEXTBOX border green for both messages
            //make the MESSAGE TEXT color green
            $scope.messageColor = "green";
            $scope.borderBoxColor = "green";
        }
    };

}


})();