/* Fill out these functions using Mongoose queries*/

var mongoose = require('mongoose');
var Schema = mongoose.Schema; 
var Listing = require('./ListingSchema.js');

mongoose.connect('mongodb://OiledNarwhal:StarshipEcho3@ds255282.mlab.com:55282/cen3031oilednarwhal', {useMongoClient: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function()
{
  console.log("conncected");
});

var findLibraryWest = function() {
  /* 
    Find the document that contains data corresponding to Library West,
    then log it to the console. 
   */
   Listing.find({ code: 'LBW' }, function(err, build){
      if(err)
      {
        console.log('cheese3');
        throw err;
      }

      console.log(build);
   });
};
var removeCable = function() {
  /*
    Find the document with the code 'CABL'. This cooresponds with courses that can only be viewed 
    on cable TV. Since we live in the 21st century and most courses are now web based, go ahead
    and remove this listing from your database and log the document to the console. 
   */

   console.log('CABL cheese');
   Listing.findOneAndRemove({code: 'CABL'}, function(err, build)
   {
     if(err)
     {
       throw err;
     }

     console.log('deleted');
   });
};
var updatePhelpsLab = function() {
  /*
    Phelps Laboratory's address is incorrect. Find the listing, update it, and then 
    log the updated document to the console. 
   */

   Listing.findOneAndUpdate({code: 'PHL'}, {address: '1953 Museum Rd, Gainesville, FL 32603'}, function(err, build)
   {
     if(err)
     {
       throw err;
     }

     console.log(build);
   })
};
var retrieveAllListings = function() {
  /* 
    Retrieve all listings in the database, and log them to the console. 
   */
    console.log('Outside findall');
   Listing.find({}, function(err, buildings)
   {
     console.log('inside findall');
     if(err)
     {
       throw err;
     }

     console.log(buildings);
   });
};

findLibraryWest();
removeCable();
updatePhelpsLab();
retrieveAllListings();
