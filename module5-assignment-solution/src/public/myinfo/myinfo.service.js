(function(){
'use strict';

angular.module('public')
.service("myinfoService",myinfoService);

myinfoService.$inject = [];
function myinfoService(){
  var service = this;

  service.lookUpTitle = function (menuItemShortName, menuItems) {
      var title ="no title found. Please contact admin!";
      var i,y;
      for (i = 0, y = menuItems.length; i < y; i++){
        if (menuItems[i].short_name == menuItemShortName){
          title = menuItems[i].name;
        }
      }
      return title;
  }
};

})();
