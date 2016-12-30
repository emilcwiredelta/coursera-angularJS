(function() {
  'use strict';

angular.module('public')
.controller('myinfoController',myinfoController);

myinfoController.$inject = ["$rootScope","menuItems","myinfoService", "ApiPath"];
function myinfoController($rootScope,menuItems,myinfoService, ApiPath) {
  var $ctrl = this;
  $rootScope.$on('submittedRevieved', function(ev,user){
    console.log('myinfoController fires ', user.user.firstname);
  });

  $ctrl.user = $rootScope.user;
  $ctrl.menuItems = menuItems;

  $ctrl.lookUpTitle = function(favoriteMenuItem) {
    return myinfoService.lookUpTitle(favoriteMenuItem, menuItems.menu_items);
  }

  $ctrl.basePath = ApiPath;
};

})();
