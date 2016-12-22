(function () {
'use strict';

angular.module('data')
.component('categories', {
  templateUrl: '.html',
  bindings: {
    items: '<'
  }
});

})();
