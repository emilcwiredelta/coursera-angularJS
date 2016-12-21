(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com")
.directive('foundItems',FoundItems);

function FoundItems() {
  var ddo = {
    // template: 'Nothing found.',
    templateUrl: "template.html",
    scope: {
      directiveItems: '<myItems',
      eraseElement: '&onRemove'
    },
    controller: NarrowItDownController,
    controllerAs: 'ctrlDirective',
  };
  return ddo
}

// FIRST controller
NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService){
  var menu = this;
  var searchTerm = "";
  var promise = MenuSearchService.getMatchedMenuItems(searchTerm);
  // promise.then(function (response) {
  //   menu.items = MenuSearchService.filterItems(response.data.menu_items,searchTerm);

  // });
  // var promise = MenuSearchService.getMatchedMenuItems(searchTerm);
  //
  // promise.then(function (response) {
  //   menu.found = response.data;
  //
  // })
  // .catch(function (error){
  //   console.log("Something went wrong.");
  // });
  this.logging = function (searchTerm) {
    promise.then(function (response) {
    menu.items = MenuSearchService.filterItems(response.data.menu_items,searchTerm);
  });
}
  this.eraseElement = function(index) {
    menu.items.splice(index,1);
  };

  // End of 1st ctrl.
}

// First service
MenuSearchService.$inject = ['$http','ApiBasePath'];
function MenuSearchService ($http, ApiBasePath) {
  var service = this;
  var itemsUnfiltered = [];
  var itemsfiltered = [];

  service.getMatchedMenuItems = function(searchTerm) {
    var response = $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json")
    });
    return response;
  };


    // old:
  //   .then(function (response) {
  //     itemsUnfiltered = response.data;
  //     itemsfiltered = filterItems(itemsUnfiltered.menu_items,searchTerm);
  //     // console.log('inside loop');
  //   }).catch(function (error) {
  //     console.log("something went wrong: " + error);
  //   }).then(function () {
  //   // console.log('outside loop');
  //   // console.log(itemsfiltered);
  //   return itemsfiltered  ;
  //   })
  // };



  service.filterItems = function(unfilteredObject, searchTerm) {
    var counter = 0;
    var filteredObject = [];
    var i = 0;
    for (i in unfilteredObject) {
      if (unfilteredObject[i].description.search(searchTerm) != -1 ){
        filteredObject[i-counter] = unfilteredObject[i];
      } else {
        counter++;
      }
    }

    return filteredObject;
  }




}


})();



// legacy

// console.log(itemsfiltered);
//   console.log(itemsUnfiltered.menu_items[0].description);
//   console.log(itemsUnfiltered.menu_items.length);
//   console.log(itemsUnfiltered.menu_items[0].description.search('computer'));
