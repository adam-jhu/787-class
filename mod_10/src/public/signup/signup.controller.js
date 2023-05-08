(function () {
    "use strict";
    
    angular.module('public')
    .controller('SignupController', SignupController);
    
    SignupController.$inject = ['UserInfoService', 'allItems'];
    function SignupController(UserInfoService, allItems) {
        var $ctrl = this;


        //list of all menu items from teh menu service
        $ctrl.allItems = allItems;

        $ctrl.signupComplete = false;
        //$ctrl.menuCategories = menuCategories;

        //to hold the user registration data  
        $ctrl.user = {};
        //$ctrl.firstname = "";


        $ctrl.submit = function () {
            console.log('form submitted');
            console.log('userinfo from ctrl: ', $ctrl.user);
            //console.log('firstname: ', $ctrl.firstname);
            //save current user info to the service

            //console.log("WARNING: STORING non-user supplied data for testing FIXME");
            //$ctrl.user.favdish = "L1";

            //first verify the menu choice exists
            // var favDish = $ctrl.user.favdish;
            // var numPart = favDish.match(/[0-9]+/);
            // var numIndex = favDish.indexOf(numPart);
            // console.log('numeric index: ', numIndex);
            // if(! (numIndex === -1)) {
            //     var letterPart = favDish.substring(0, numIndex);
            //     console.log("favDish letter: " + letterPart + ", numeric:" + numPart);
            //     numPart = numPart - 1; //subtract 1, zero based menu numbering/arry numbering
            //     console.log('subtracted number: ', numPart);
            //     //check whether this is actually a valid menu item
            //     //var single = $ctrl.allItems[letterPart]; //works
            //     var single = $ctrl.allItems[letterPart].menu_items[numPart-1];
            //     console.log('single', single);

            // }

            //get the dish the user ented
            console.log("about to call getdish with param: " + $ctrl.user.favdish);
            var dish = $ctrl.getDish($ctrl.user.favdish);
            if(dish){
                console.log("valid dish found: ", dish);
                //extract dish info to save in prefs? like title and shortname components
                $ctrl.user.description = dish.description;
                $ctrl.user.name = dish.name;
                var favDish = $ctrl.user.favdish;
                var numPart = favDish.match(/[0-9]+/);
                var numIndex = favDish.indexOf(numPart);
                var letterPart = favDish.substring(0, numIndex);
                $ctrl.user.shortname_letter = letterPart;
            }
            else
            {
                console.log("dish NOT valid!!");
            }

            //UserInfoService.user = $ctrl.user;
            UserInfoService.savePrefs($ctrl.user);

            console.log("service info: ", UserInfoService.user);

            $ctrl.signupComplete = true;

            console.log("signup complete: ", $ctrl.signupComplete);
        }


        //returns dish by shortname from the list of all dishes
        $ctrl.getDish = function (shortname) {
            console.log("in ctrl.getDish, param was:" + shortname);
            var favDish = shortname;
            var numPart = favDish.match(/[0-9]+/);
            var numIndex = favDish.indexOf(numPart);
            //console.log('numeric index: ', numIndex);
            if(! (numIndex === -1)) {
                var letterPart = favDish.substring(0, numIndex);
                
                numPart = numPart - 1; //subtract 1, zero based menu numbering/arry numbering
                console.log("favDish letter: " + letterPart + ", numeric:" + numPart);
                //console.log('subtracted number: ', numPart);
                //check whether this is actually a valid menu item
                //var single = $ctrl.allItems[letterPart]; //works

                //the (number part of the shortname) -1 = the array index for the category
                var single = $ctrl.allItems[letterPart].menu_items[numPart];
                //var single = $ctrl.allItems[letterPart].menu_items[shortname];
                console.log('single', single);

                return single;
            }

            //dish not found
            return null;
        }



    }
    



    
    })();