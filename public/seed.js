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
  console.log('done');

  /*create comments within the user save*/
  var comment1 = new comment ({
    commentMsg: "What a great deal for our labrats.",
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

  var item2 = new Item ({
    itemName: "bio computer"
    _owner: user1.id,
    itemDescription: "Half organic living matter and half computer."
    itemPrice: 200000,
    itemSold: false
  });

  var item3 = new Item ({
    itemName: "fire flowers"
    _owner: user1.id,
    itemDescription: "Our scientists at Veridion Dynamics splied plant DNA with fireflies to make these fire flowers just for you."
    itemPrice: 40000,
    itemSold: false
  });

    item1.save(function (err) {
      if (err) return (err);
      console.log('done');
    })
    item2.save(function (err) {
      if (err) return (err);
      console.log('done');
    })
    item3.save(function (err) {
      if (err) return (err);
      console.log('done');
    })

  /*within item creation add the comments in */
  Item.update({
    itemName: "Itchy Chair"
  }, {

  /* a bit lost here..*/

  /*test data seed 2*/

  /*create another user*/
  var user2 = new User ({
    name: 'Agatha Heterodyne',
    money: 700000000,
    password: 'sparks',
    collectedItems: ['Dingbot Prime', 'Locket', 'Lightly Used Death Ray']
  });

  /*within saving the user*/
  user2.save(function (err) {
    if (err) return (err);
    console.log('done');
  },

  /*create comments within user save*/
  var comment3 = new Comment ({
    commentMsg: "Do you have any clanks?",
    _owner: user2.id,
    itemLink: "Itchy Chair"

  var comment4 = new Comment ({
    commentMsg: "",
    _owner: user2.id,
    itemLink: ""
  })

    comment3.save(function (err) {
      if (err) return (err);
      console.log('done');
    })
    comment4.save(function (err) {
      if (err) return (err);
      console.log('done');
    })
  });
  
  /* item creation */
  var item4 = new Item ({
    itemName: "airship",
    _owner: user2.id,
    itemDescription: "Who wouldn't want a flying city with their own personal laboratory?",
    itemPrice: 500000,
    itemSold: false
  });

  var item5 = new Item ({
    itemName: "mimmoth"
    _owner: user2.id,
    itemDescription: "A mouse-sized wooly mammoth."
    itemPrice: 50,
    itemSold: false
  });

  var item6 = new Item ({
    itemName: "Victorian Gypsy Coach"
    _owner: user2.id,
    itemDescription: "The only way to travel if you're into the Victorian era."
    itemPrice: 1000,
    itemSold: false
  });

  /*test data seed 3*/
  /*create user3 */
  var user3 = new User ({
    name: 'Dr. Who',
    money: 900000,
    password: 'the doctor',
    collectedItems: ['Sonic Screwdriver', 'Tardis', 'Jammie Dodgers']  
  })

  /*within saving user3*/
  user3.save(function (err) {
    if (err) return (err);
    console.log('done');
  });

    /*create comments within user save */
    var comment4 = new Comment ({
      commentMsg: "",
      _owner: user3.id,
      itemLink: ""
    )}
    var comment5 = new Comment ({
      commentMsg: "",
      _owner: user3.id,
      itemLink: ""
    )}

    comment4.save(function (err) {
      if (err) return (err);
      console.log('done');
    })
    comment5.save(function (err) {
      if (err) return (err);
      console.log('done');
    })  
  )};  
    