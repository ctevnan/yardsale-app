angular.module('yardsale', [])
  .controller('ItemListController', function($http) {
    var itemList = this;
    itemList.items = [];
    itemList.itemBoxes = [];
    itemList.itemBoxCounter = 0;

    itemList.addItem = function() {
      console.log("adding item to item list");
      var newItem = {
        itemName: itemList.name,
        comments: itemList.comments,
        items: itemList.itemBoxes,
      };
      $http({
        method: 'POST',
        url: '/newItem',
        data: newItem,  
      }).then(function (result) {
        itemList.items.push(result.data);
        itemList.name = '';
        itemList.comments = '';
        itemList.itemBoxes = [];
        itemList.itemBoxCounter = 0;
      });
    };

    itemList.getItems = function() {
      $http({
        method: 'GET',
        url: '/items'
      }).then (function (result) {
        angular.forEach(result.data, function (eachOne) {
          itemList.item.push(eachOne);
        });
      });
    };

    itemList.addItemBox = function() {
      itemList.itemBoxes.push({
        name:"item" + itemList.itemBoxCounter,
        placeholder: "Item #" +itemList.itemBoxCounter
      });
      itemList.itemBoxCounter++;
    };

   itemList.getItems();
  }); 