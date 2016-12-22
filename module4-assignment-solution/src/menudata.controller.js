(function () {
'use strict';

angular.module('data')
.controller('MenuDataController', MenuDataController)
.controller('MenuCategoryController', MenuCategoryController);


MenuCategoryController.$inject = ['MenuDataService','categories'];
function MenuCategoryController(MenuDataService,categories) {
  var $ctrl = this;
  $ctrl.categories = categories;
}

// MainShoppingListController.$inject = ['ShoppingListService'];
// function MainShoppingListController(ShoppingListService) {
MenuDataController.$inject = ['MenuDataService','items'];
function MenuDataController(MenuDataService,items) {
  var $ctrl = this;
  $ctrl.items = items;

  // var promiseCategories = MenuDataService.getAllCategories();
  // var promiseItems = MenuDataService.getItemsForCategory($ctrl.categories);

  // promiseCategories.then(function (response) {
  //    $ctrl.categories = response.data;
  //   //  console.log(response.data);
  // }).catch(function (error) {
  //   console.log("something went wrong, could not access rest API of menu categories");
  // });


 // console.log(items);
  // promiseItems.then(function (response) {
  //    $ctrl.items = response.data;
  //    console.log(response.data);
  // }).catch(function (error) {
  //   console.log("something went wrong, could not access rest API of menu items within categories");
  // });

  // mainList.$onInit = function () {
  //   ShoppingListService.getItems()
  //   .then(function (result) {
  //     mainList.items = result;
  //   });
  // };
}

})();
