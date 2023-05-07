(function() {
'use strict';

angular.module('public')
.config(routeConfig);

/**
 * Configures the routes and views
 */
routeConfig.$inject = ['$stateProvider'];
function routeConfig ($stateProvider) {
  // Routes
  $stateProvider
    .state('public', {
      abstract: true,
      templateUrl: 'src/public/public.html'
    })
    .state('public.home', {
      url: '/',
      templateUrl: 'src/public/home/home.html'
    })
    .state('public.menu', {
      url: '/menu',
      templateUrl: 'src/public/menu/menu.html',
      controller: 'MenuController',
      controllerAs: 'menuCtrl',
      resolve: {
        menuCategories: ['MenuService', function (MenuService) {
          return MenuService.getCategories();
        }]
      }
    })
    .state('public.menuitems', {
      url: '/menu/{category}',
      templateUrl: 'src/public/menu-items/menu-items.html',
      controller: 'MenuItemsController',
      controllerAs: 'menuItemsCtrl',
      resolve: {
        menuItems: ['$stateParams','MenuService', function ($stateParams, MenuService) {
          return MenuService.getMenuItems($stateParams.category);
        }]
      }
    })
    .state('public.signup', {
      url: '/signup',
      templateUrl: 'src/public/signup/signup.html',
      controller: 'SignupController',
      controllerAs: 'signupCtrl'
    })
    .state('public.myinfo', {
      url: '/myinfo',
      templateUrl: 'src/public/myinfo/myinfo.html',
      controller: 'MyinfoController',
      controllerAs: 'myinfoCtrl',
      resolve: {
        //userInfo: ['UserInfoService', function () {
        userInfo: ['UserInfoService', function (UserInfoService) {
          console.log('in routes, resolving userInfo prop');
          return UserInfoService.getUserInfo();
          //return UserInfoService.getTest();
          //return UserInfoService.user;
        }]
        // userInfo: function ()  {
        //   return  {firstname: "me", lastname: "last", phone: "123", email: "foo@bar", favdish: "B2"}
        // }
      }
      // resolve: {
      //   userInfo: ['UserInfoService', function () {
      //     //return UserInfoService.getUserInfo();
      //     return UserInfoService.getTest();
      //   }]
      //}
    })
    ;
}
})();
