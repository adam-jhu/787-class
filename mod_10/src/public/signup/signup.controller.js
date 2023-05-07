(function () {
    "use strict";
    
    angular.module('public')
    .controller('SignupController', SignupController);
    
    SignupController.$inject = ['UserInfoService'];
    function SignupController(UserInfoService) {
        var $ctrl = this;

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


            UserInfoService.user = $ctrl.user;

            console.log("service info: ", UserInfoService.user);

            $ctrl.signupComplete = true;

            console.log("signup complete: ", $ctrl.signupComplete);
        }
    }
    
    
    })();