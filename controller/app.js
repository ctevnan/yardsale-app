angular.module('yardsaleApp', [])
  .controller('ItemListController', function($http) {
    var ItemList = this;
    itemList.items= [];
    itemList.itemBoxes= [];
    itemList.itemBoxCounter = 1;
  })

  itemList.addItem = function() {
    console.log("adding item");
    var newItem = {
      itemName: itemList.name,
      itemDescription: itemList.description,
      itemPrice: itemList.price,
      itemSold: itemList.sold,
      comments: itemList.comments,
    };
    $http({
      method: 'POST',
      url: '/newItem',
      data: newItem,  
    }).then(function (result) {
      itemList.items.push(result.data);
    })
  }