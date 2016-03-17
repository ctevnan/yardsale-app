var mongoose = require('mongoose');

/* mongoose connect */
var db = 'mongodb://localhost/yardsale';
  mongoose.connect(db);

/*create schemas */
var User = require('./model/user');
var Item = require('./model/item');
var Comment = require('./model/comment'); 

/*create a user*/
var user1 = new User({
  name: 'Veridian Dynamics',
  money: 100000000000,
  password: 'soulless conglomerate',
  collectedItems: ['Meat Blob', 'Cryogenic Chamber', 'Octochicken']
});

/*within saving the user*/
user1.save(function (err) {
  if (err) return (err);

  /*create comments within the user save*/
  var comment1 = new comment ({
    commentMsg: "What a great deal for our labrats..I mean lab employees.",
    _owner: user1.id,
    itemLink: "Itchy Chair"
  }),
  var comment2 = new comment ({
    commentMsg: "Veridian Dynamics. Every day, something we make makes your life better. Power. We make that. Technology. We make that. Cows. Well, no. We don’t make cows, although we have made a sheep. Veridian Dynamics. Every day, something we make makes your life better. Usually.",
    _owner: user1.id,
    itemLink: "Whirlpool Tub"
  })
  comment1.save(function (err) {
    if (err) return (err);
  comment2.save(function (err) {
    if (err) return (err);
  });
}); 

  /*item creation */
  var item1 = new Item ({
    itemName: "Itchy Chair",
    _owner: user1.id,
    itemDescription: "Really great office chair created from an odd, but highly durable material!",
    itemPrice: 1000,
    itemSold: false
  });
  
  item1.save(function (err) {
    if (err) return (err);
  })  
  /*within item creation add the comments in */
  Item.update({
    itemName: "Itchy Chair"
  }, {

  /* a bit lost here..*/

  /*test data seed 2*/

  /*create another user*/
    