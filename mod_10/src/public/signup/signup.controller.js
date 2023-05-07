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


            //UserInfoService.user = $ctrl.user;
            UserInfoService.savePrefs($ctrl.user);

            console.log("service info: ", UserInfoService.user);

            $ctrl.signupComplete = true;

            console.log("signup complete: ", $ctrl.signupComplete);
        }
    }
    

    //code to add custom validation to the form, demo code copied from:
    // https://docs.angularjs.org/guide/forms#custom-validation
    angular.module('public')
    .directive('validatedish', function() {
        return {
          require: 'ngModel',
          link: function(scope, elm, attrs, ctrl) {
            ctrl.$validators.validatedish = function(modelValue, viewValue) {

                console.log('model value: ', modelValue);
                console.log('view value: ',viewValue);
            //   if (ctrl.$isEmpty(modelValue)) {
            //     // consider empty models to be valid
            //     return true;
            //   }
      
              if (viewValue == "L1") {
                // it is valid
                return true;
              }
      
              // it is invalid
              return false;
            };
          }
        };
      });

    
    })();