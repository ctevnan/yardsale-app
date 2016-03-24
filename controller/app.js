angular.module('yardsaleApp', [])
  .controller('ItemListController', function($http) {
    var ItemList = this;
    itemList.items= [];
    itemList.itemBoxes= [];
    itemList.itemBoxCounter = 0;
  })

  itemList.addItem = function() {
    console.log("adding item");
    var newItem = {
      itemName: itemList.name,
      itemDescription: itemList.description,
      itemSold: itemList.sold,
      comments: itemList.comments,
    };
    $http({
      method: 'POST',
      url: '/newItem',
      data: newItem,  
    }).then(function (result) {
      itemList.items.push(result.data);
      itemList.name = '';
      itemList.description = '';
      itemList.sold = boolean;
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
      name:"item" + itemList.itemBoxCounter
    });
    itemList.itemBoxCounter++;
  };

itemList.getItems();
});  
