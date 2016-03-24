angular.module('yardsaleApp', [])
  .controller('ItemListController', function($http) {
    var ItemList = this;
    itemList.items= [];
    itemList.itemBoxes= [];
    itemList.itemBoxCounter = 1;
  })

  itemList.addItem = function() {
    console.log
  }