(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/templates/home.template.html'
  })

  .state('categories', {
    url: '/categories',
    templateUrl: 'src/templates/categories.template.html',
    controller: 'MenuCategoryController as $ctrl',
    resolve: {
      categories: ['MenuDataService',
            function (MenuDataService) {
              return MenuDataService.getAllCategories()
                .then(function (categories) {
                  return categories.data;
                });
            }]
    }
  })

  .state('items', {
    url: '/items/{categoryShortName}',
    templateUrl: 'src/templates/items.template.html',
    controller: 'MenuDataController as $ctrl',
    resolve: {
      items: ['$stateParams', 'MenuDataService',
            function ($stateParams, MenuDataService) {
              return MenuDataService.getItemsForCategory($stateParams.categoryShortName)
                .then(function (items) {
                  console.log("runs item function, items are ");
                  console.log(items.data);
                  return items.data;
                });
            }]

    }
  })

  // Premade list page
  // .state('mainList', {
  //   url: '/main-list',
  //   templateUrl: 'src/shoppinglist/templates/main-shoppinglist.template.html',
  //   controller: 'MainShoppingListController as mainList',
  //   resolve: {
  //     items: ['ShoppingListService', function (ShoppingListService) {
  //       return ShoppingListService.getItems();
  //     }]
  //   }
  // });
}

})();
