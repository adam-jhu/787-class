(function () {
    "use strict";
    
    angular.module('public')
    .service('UserInfoService', UserInfoService);
    
    
    
    function UserInfoService() {

        console.log('UserInfoService alive');

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
            console.log("in service getUserInfo call");
            if(service.user){
                console.log(service.user);
                return service.user;
            }
            else 
            {
                return null;
            }
            
        }


        service.getTest = function () {
            console.log('userinfoservice.getTest called');
            return {firstname: "foo", lastname: "bar", phone: "123", email: "foo@bar", favdish: "B27"}.$promise;
        }

    }
    
    
    
    })();