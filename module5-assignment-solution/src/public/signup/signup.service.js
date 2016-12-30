(function() {
"use strict";

angular.module('public')
.service('SignupService', SignupService);


SignupService.$inject = [];
function SignupService() {
  var service = this;

  service.validateCategory = function (categoryChoice,menuMenuItems) {
    var messageRespond = false;
    var menuMenuItems = menuMenuItems.menu_items;
    var counter = 0;
    var i,y;
    for (i = 0, y = menuMenuItems.length; i < y; i++) {
      if (menuMenuItems[i].short_name== categoryChoice){
        counter++;
      }
    }
    if (counter > 0) {
      messageRespond = true;
    }
    return messageRespond;
  };

  service.setMenuListBoolean = function (boolean) {
    if (boolean){
      boolean = false;
    } else if (!boolean) {
      boolean = true;
    }
    return boolean;
  };

  service.menuItemToCategory


}

})();
