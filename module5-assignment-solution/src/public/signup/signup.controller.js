(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['menuMenuItems','SignupService', '$rootScope'];
function SignUpController(menuMenuItems,SignupService,$rootScope) {
  var $ctrl = this;
  $ctrl.user = {
    firstname: "",
    surname: "",
    email: "",
    phonenumber: "",
    favoritemenu: "",
    registred: false
  };

  $ctrl.menuListVisible = false;
  $ctrl.setMenuListBoolean = function(menulistboolean){
    $ctrl.menuListVisible = SignupService.setMenuListBoolean(menulistboolean);
  }

  $ctrl.submit = function () {
  $ctrl.completed = true;
  $ctrl.user.registred = true;
  $rootScope.$emit('submitted', {user : $ctrl.user});
  };


  $ctrl.menuMenuItems = menuMenuItems;
  $ctrl.validateCategory = function(category) {
    return SignupService.validateCategory(category,menuMenuItems);
  }
}



})();
