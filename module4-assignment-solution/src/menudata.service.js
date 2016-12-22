(function () {
'use strict';

angular.module('data')
.service('MenuDataService', MenuDataService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");


MenuDataService.$inject = ['$http','ApiBasePath']
function MenuDataService($http, ApiBasePath) {
  var service = this;

  // Defines a method that retrieves all menu items through REST API using $https promise
  service.getAllCategories = function() {
    var response = $http({
      method: "GET",
      url: (ApiBasePath + "/categories.json")
    });
    return response;
  };

  // Defines a method to retrieve a menu items of a specific menu category using the $https promise with a parameter state
  service.getItemsForCategory = function (categoryShortName) {
    var response = $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json"),
      params: {
        category: categoryShortName
      }
    });
    return response;
  };

}

})();
