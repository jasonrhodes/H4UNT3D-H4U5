module.exports = function (imageBuffer) {


// do stuff to transform image

  return imageBuffer;

// idk wtf I'm doing. Is this to get the user's uploaded image? IDK IDK IDK

  var fs = require('fs')
  , gm = require('./gm');

// obtain the size of an image so it's not FUKD UP?? IDK

  gm('/path/to/my/img.jpg')
  .size(function (err, size) {
  if (!err)
  console.log(size.width > size.height ? 'wider' : 'taller than you');
});

// output all available image properties

gm('/path/to/img.png')
.identify(function (err, data) {
  if (!err) console.log(data)
});

// These are all the images is this even where it goes? Idk

  -seed 

  $ composite -gravity /images/3_spooky_skelly.gif
  $ composite -gravity /images/candles.gif
  $ composite -gravity /images/ghosts.gif
  $ composite -gravity /images/laff_it_up_ghost.gif
  $ composite -gravity /images/lightning.gif
  $ composite -gravity /images/lightning02.gif
  $ composite -gravity /images/lightning03.gif
  $ composite -gravity /images/mario_ghost.gif
  $ composite -gravity /images/posessed.gif
  $ composite -gravity /images/scary_girl_clean.gif

convert /images/3_spooky_skelly.gif /images/candles.gif -average  anthony_ghosts.jpg

};
