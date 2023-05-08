(function () {
    "use strict";
    
    angular.module('public')
    .controller('MyinfoController', MyinfoController);
    
    // MyinfoController.$inject = ['UserInfoService', 'MenuService', 'userInfo'];
    // function MyinfoController(UserInfoService, MenuService, userInfo) {
    MyinfoController.$inject = ['userInfo'];
    function MyinfoController( userInfo) {
        var $ctrl = this;

        //$ctrl.user = UserInfoService.user;

        //expose data from injected resolve
        $ctrl.userInfo = userInfo;

        //requires user info service, refactor?
        //$ctrl.userPrefsExist = UserInfoService.prefsExist();
        
        //check if non-truthy value exists
        $ctrl.userPrefsExist = function () {
            //console.log("test firstname:", $ctrl.userInfo.firstname);
            if ($ctrl.userInfo.firstname){
                return true;
            }
            else
            {
                return false;
            }
        }

        //convenience method to populate data for testing
        $ctrl.fakeit = function () {
            console.log("faking data now");
            $ctrl.user = {
                firstname: "fakeFirst",
                lastname: "fakeLast",
                phone: "111-222-1234",
                email: "fake@fake.net",
                favdish: "L1"
            };
            $ctrl.userPrefsExist = true;
        }


        //$ctrl.favdish = MenuService.getSingleMenuItem($ctrl.user.favdish);

        // $ctrl.getDish = function (shortname) {
        //     console.log("myinfoctrl getdish called");
        //     var dishInfo = MenuService.getSingleMenuItem(shortname);
        //     console.log("controller received data from menuservice: " + dishInfo);

        //     return dishInfo;
        // }

        // $ctrl.submit = function () {
        //     console.log('form submitted');
        //     console.log('userinfo from ctrl: ', $ctrl.user);
        //     //console.log('firstname: ', $ctrl.firstname);
        //     //save current user info to the service
        //     UserInfoService.user = $ctrl.user;

        //     console.log("service info: ", UserInfoService.user);
        // }
    }
    
    



    })();