(function () {
    "use strict";
    
    angular.module('public')
    .component('userinfo', {
      templateUrl: 'src/public/userinfo/userinfo.html',
      bindings: {
        myinfo: '<'
      }
    });
    
    
    
    })();