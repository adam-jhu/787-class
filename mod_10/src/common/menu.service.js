(function () {
"use strict";

angular.module('common')
.service('MenuService', MenuService);



MenuService.$inject = ['$http', 'ApiPath'];
function MenuService($http, ApiPath) {
  var service = this;

  service.getCategories = function () {
    return $http.get(ApiPath + '/categories.json').then(function (response) {
      console.log("category data: ", response.data);
      return response.data;
    });
  };


  service.getMenuItems = function (category) {
    return $http.get(ApiPath + '/menu_items/' + category + '.json').then(function (response) {
      return response.data;
    });
  };



  service.getSingleMenuItem  = function (shortname) {
    console.log ("getSingleMenuItem received param: ", shortname);
    if(shortname){
      //parse shortname into 2 parts of URL to match pattern:
      //https://coursera-jhu-default-rtdb.firebaseio.com/menu_items/L/menu_items/3.json
      //assume first character is letter, then the rest is a number. (subtract 1 since URL is zero-based numbering)
      var shortLetter = shortname.substring(0,1); //first character shoudl always be a letter
      var shortNumber = shortname.substring(1); //from char 1 to the end
      shortNumber = shortNumber -  1 ; //subtract 1 
      console.log ("menu service should look up: " + shortLetter + " , " + shortNumber);
      
      var url = ApiPath + '/menu_items/' + shortLetter + '/menu_items/' + shortNumber + '.json';
      
      console.log("should request url: " + url);
      //TODO: handle null response for bad URL/non-existent item?
      return $http.get(ApiPath + '/menu_items/' + shortLetter + '/menu_items/' + shortNumber + '.json').then(function (response) {
        console.log("menuservice received" + response.data);
        console.log("menuservice received" + response);
        console.log(response.data);
        console.log( response);
        return response.data;
      });
    }
    else 
    {
      console.log("ERROR: passed in empty/null shortname to getSingleMenuItem");
      return null;
    }
  };

}




})();
