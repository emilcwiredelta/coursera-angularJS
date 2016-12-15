(function () {
'use strict';


angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController',ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService',ShoppingListCheckOffService)
;


// FIRST CONTROLLER
ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var showItemsToBuy = this;
  showItemsToBuy.items    = ShoppingListCheckOffService.getItemsToBuy();
  showItemsToBuy.transfer = function (index) {
    ShoppingListCheckOffService.bougthItem (index);
  }
  showItemsToBuy.checkIfAllBought = function () {
    ShoppingListCheckOffService.checkIfAllBought();
    console.log(ShoppingListCheckOffService.checkIfAllBought());
  }

// END 1ST CTRL
}


// SECOND CONTROLLER
AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var showItemsAlreadyBought = this;
  showItemsAlreadyBought.items = ShoppingListCheckOffService.getItemsAlreadyBought();
  showItemsAlreadyBought.checkIfAllBought = function () {
    ShoppingListCheckOffService.checkIfAllBought();
      }
// END 2ND CTRL
}

// SERVICE function

function ShoppingListCheckOffService() {
  var service = this;

  // List of items to buy
  var itemsToBuy = [
    {
      name: 'milk',
      quantity: "2 litres"
    },
    {
      name: 'chocolate',
      quantity: "3 packages"
    },
    {
      name: 'peanuts',
      quantity: "2 bags"
    },
    {
      name: 'diamonds',
      quantity: "0.5 gram"
    },
    {
      name: 'coffee beans',
      quantity: "2 kilos"
    }
  ];

  // List of items already bougth
  var itemsAlreadyBought = [];

  // Transfer item from to buy list to already bougth list
  service.bougthItem = function(index) {
    itemsAlreadyBought.push(itemsToBuy[index]);
    itemsToBuy.splice(index,1);
  }



  //  Get items to buy
  service.getItemsToBuy = function () {
    return itemsToBuy;
  };

  //  Get items already bought
  service.getItemsAlreadyBought = function () {
    return itemsAlreadyBought;
  };


  // Check if everything is bought
  service.checkIfAllBought = function () {
    var condition = false;
    if (itemsToBuy.length === 0){
      condition = true;
    }
    return condition;
  };



// End of service
}


})();
