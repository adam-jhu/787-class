(function () {
    "use strict";

    //code to add custom validation to the form, demo code copied from:
    // https://docs.angularjs.org/guide/forms#custom-validation
    angular.module('public')
    .directive('validatedish', ['MenuService',  function(MenuService) {
        return {
          require: 'ngModel',
          //controller: SingupController,
          link: function(scope, elm, attrs, ctrl) {
            var allItems = {};
            MenuService.getAllMenuItems().then(function (response){
                console.log('in directive then, resp.d: ', response);
                allItems = response;
            });
            console.log('in directive, all items: ', allItems);

            ctrl.$validators.validatedish = function(modelValue, viewValue) {


                console.log('model value: ', modelValue);
                console.log('view value: ',viewValue);
                if(viewValue) { //don't process if empty/null
                    //ref: https://reactgo.com/javascript-get-first-number-in-a-string/
                    var numPart = viewValue.match(/[0-9]+/);
                    var numIndex = viewValue.indexOf(numPart);
                    console.log('numeric index: ', numIndex);
                    if(! (numIndex === -1)) {
                        var letterPart = viewValue.substring(0, numIndex);
                        console.log("viewmodel letter: " + letterPart + ", numeric:" + numPart);
                        //check whether this is actually a valid menu item
                        console.log('all items in dir: ', ctrl.allItems);
                        //only attempt to read if the letter partat least matches something
                        if(allItems[letterPart]){
                            var singleItem = allItems[letterPart].menu_items[numPart-1];
                            console.log('singleItem', singleItem);
    
                            if (singleItem) {
                                // it is valid
                                return true;
                              }
                        }
                        else{
                            console.log('not a valid letter, dish invalid');
                            return false;
                        }


                    }
                }
      
              // it is invalid
              return false;
            };
          }
        };
      }]);

})();