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
    itemLink: "Mimmoth"
  }),
  var comment2 = new comment ({
    commentMsg: "You had us at angry robot from space. Is there a limit to how many Daleks we can buy?",
    _owner: user1.id,
    itemLink: "Dalek"
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
    itemName: "Bio Computer"
    _owner: user1.id,
    itemDescription: "Half organic living matter and half computer."
    itemPrice: 200000,
    itemSold: false
  });

  var item3 = new Item ({
    itemName: "Fire Flowers"
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
    itemName: "Itchy Chair",
    commentMsg: "Do you have any clanks?",
    _owner: user2.id
  }), {
   Item.update({
    itemName: "Bio Computer",
    commentMsg: "I don't know how I feel about this Bio Computer business."
    _owner: user3.id
  }), {
   Item.update({
    itemName: "Fire Flowers",
    commentMsg: "Fire Flowers are cool.",
    _owner: user3.id
  }); 

  /* a bit lost here ^ ^ ^ */

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
    commentMsg: "I do find bowties to be cool.",
    _owner: user2.id,
    itemLink: "Bowtie"
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
    itemName: "Airship",
    _owner: user2.id,
    itemDescription: "Who wouldn't want a flying city with their own personal laboratory?",
    itemPrice: 500000,
    itemSold: false
  });

  var item5 = new Item ({
    itemName: "Mimmoth"
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

    item4.save(function (err) {
      if (err) return (err);
      console.log('done');
    })
    item5.save(function (err) {
      if (err) return (err);
      console.log('done');
    })
    item6.save(function (err) {
      if (err) return (err);
      console.log('done');
    })
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
      commentMsg: "This Gypsy Coach is great.",
      _owner: user3.id,
      itemLink: "Victorian Gypsy Coach"
    )}
    var comment5 = new Comment ({
      commentMsg: "Fire flowers are cool.",
      _owner: user3.id,
      itemLink: "Fire Flowers"
    )}
    var comment6 = new Comment ({
      commentMsg: "I dont know how I feel about this Bio Computer business.",
      _owner: user3.id,
      itemLink: "Bio Computer"
    })

    comment4.save(function (err) {
      if (err) return (err);
      console.log('done');
    })
    comment5.save(function (err) {
      if (err) return (err);
      console.log('done');
    })
    comment6.save(function (err) {
      if (err) return (err);
      console.log('done');
    })  
  )}; 

   /* item creation */
  var item7 = new Item ({
    itemName: "Bowtie",
    _owner: user3.id,
    itemDescription: "Bowties are cool.",
    itemPrice: 45,
    itemSold: false
  });

  var item8 = new Item ({
    itemName: "Weeping Angel",
    _owner: user3.id,
    itemDescription: "Conventional gothic marble statue, nothing to worry about here..",
    itemPrice: 9000,
    itemSold: false
  });

  var item9 = new Item ({
    itemName: "Dalek",
    _owner: user3.id,
    itemDescription: "Angry robot from space. Great at extermination.",
    itemPrice: 15,
    itemSold: false
  });

    item7.save(function (err) {
      if (err) return (err);
      console.log('done');
    })
    item8.save(function (err) {
      if (err) return (err);
      console.log('done');
    })
    item9.save(function (err) {
      if (err) return (err);
      console.log('done');
    })
  });   
    