var mongoose = require('mongoose');
var Schema = mongoose.Schema;

/* Item is an obj in a collection /* Items belong to User /*Items has many Comments
/*_userOwned is an object, refs a User // find owner */
/* itemComments is an array of ids, refs comment schema, populatable //related comments*/

var itemSchema = new Schema ({
  _owner: { type: Schema.Types.ObjectId, ref:'User'},

  itemName: String,
  itemDescription: String,
  itemPrice: Number,
  itemSold: Boolean,
  comments: [{
    type: Schema.Types.ObjectId,
    ref: 'comment'
  }]
});

/*each item thats for sale has an owner which has the objectId of a user*/
/*comments is an array of objectIds which are comments*/

var Item = mongoose.model('Item', itemSchema);

module.exports = Item;