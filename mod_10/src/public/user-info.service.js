(function () {
    "use strict";
    
    angular.module('public')
    .service('UserInfoService', UserInfoService);
    
    
    
    function UserInfoService() {
      var service = this;
    
        

        //store the user 'object' with  preferences
        // initialize to empty 
        // don't define properties since this is JS and people can add arbitraty properties anyway
        // if we leave it empty we can prob check for null/empty to see if data has been saved
        service.user = {
            // firstname: "",
            // lastname: "",
            // email: "",
            // phone: "",
            // favdish: ""
        };



        //way to tell if the user prefs exist or not
        service.prefsExist = function () {
            if (service.user.firstname) {
                return true;
            }
            else 
            {
                return false;
            }
        }
    
        service.getUserInfo = function () {
            return service.user;
        }


        service.getTest = function () {
            return {firstname: "foo"};
        }

    }
    
    
    
    })();