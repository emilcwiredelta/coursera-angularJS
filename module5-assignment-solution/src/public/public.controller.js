(function () {
'use strict';

angular.module('public')
.controller('publicController', publicController);

publicController.$inject = ['$rootScope'];
function publicController($rootScope) {
  var $ctrl = this;
  var listener;


$ctrl.$onInit = function() {
  listener = $rootScope.$on('submitted', onRegistration);
};


  var onRegistration = function(ev,user){
    console.log('publicController fires ', user.user.firstname);
    $rootScope.user = user.user;

  };


  $ctrl.$onDestroy = function() {
  listener();
};

};




})();
