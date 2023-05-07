(function () {
    "use strict";
    
    angular.module('public')
    .service('UserInfoService', UserInfoService);
    
    
    UserInfoService.$inject = ['MenuService'];
    function UserInfoService(MenuService) {

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


        service.savePrefs = function (userPrefs) {
            console.log('in userinfoservice.saveprefs func');
            service.user = userPrefs;

            //now fetch the details of the favorite dish from the menuservice
            // console.log("about to fetch menu item for dish: " + service.user.favdish);
            // var dishDetails = MenuService.getSingleMenuItem(service.user.favdish).then (function (response) {
            //     console.log ('sub call in savePrefs, data: ' + response.data);
            // });
            // console.log('after menuservice call');
            // console.log(dishDetails);
        }


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
                console.log ("in userinfoservice.getuserinfo, should retreive menu info for dish: " + service.user.favdish);
                // MenuService.getSingleMenuItem(service.user.favdish).then(function(details) {
                //     console.log ('details returned: ', details);
                //     service.user.details = details;
                //     return service.user;

                // })
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