(function () {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.message       = ""; //This is the message to the view mode (goes into the index.html)
  $scope.lunchItems    = ""; //This is the string of lunch items entered by the client. Binded using ng-model.
  $scope.messageColor  = "black"; //Sets the initial color of the message in the view mode. Binded using ng-style.
  $scope.showMessage   = function(){ // This function is called by the client once the button is pressed. It returns the correct messaged conditional on the list of lunch items entered by the client.
    var noOfLunchItems  = countNoOfLunchItems($scope.lunchItems);
    var messageObject   = conductMessage(noOfLunchItems);
    $scope.message      = messageObject.content;
    $scope.messageColor = messageObject.color;
    $scope.buttonColor  = messageObject.color;
  }
}

// This function counts the number of items by converting the string into an array and returns the number of element in the array.
function countNoOfLunchItems(lunchString) {
  var lunchString      = removeEmptyItems(lunchString); // Removes empty items such as ",   ,"

  if (lunchString.trim().length>0 ){
    var lunchArray     = lunchString.split(",");
    var noOfLunchItems = lunchArray.length;
  } else {
    var noOfLunchItems = 0;
  }
  return noOfLunchItems;
}


// This function conducts the message for the view mode, conditionally on the number
// of lunch times entered by the client.
function conductMessage(noOfLunchItems) {
 var message = {};
 message.content = "";
 message.color   = "";

  if (noOfLunchItems <= 0){
    message.content = "Please enter data first";
    message.color   = "red";
  }
  else if (noOfLunchItems > 0 && noOfLunchItems < 4) {
    message.content = "Enjoy!";
    message.color   = "green";
  }
  else if (noOfLunchItems > 3) {
    message.content = "Too much!";
    message.color   = "green";
  }
  else { //This is added debugging purposes.
    message.content = "Something didn't go as planned. Please contact the admin of this website.";
    message.color   = "red";
  }
  return message;
}


// This function removes food items which are just white spaces.
// Additionally it removes blank items at the end, such that a plain comma does not count as an item.
function removeEmptyItems(string) {
  var newString = string.replace(/\s+/g,'').replace(",,",",");
  if (newString.slice(-1) == ",") {
    newString = newString.substring(0,newString.length-1);
  }
  return newString;
}

})();
