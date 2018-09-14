'use strict';
/* 
  Import modules/files you may need to correctly run the script. 
  Make sure to save your DB's uri in the config file, then import it with a require statement!
 */
var fs = require('fs'),
    mongoose = require('mongoose'), 
    _ = require('lodash'),
    buildingData = require('./listings.json'),
    Schema = mongoose.Schema, 
    Listing = require('./ListingSchema.js'), 
    config = require('./config.js');

/* Connect to your database */
mongoose.connect('mongodb://OiledNarwhal:StarshipEcho3@ds255282.mlab.com:55282/cen3031oilednarwhal', {useMongoClient: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function()
{
  console.log("conncected");
});
/* 
  Instantiate a mongoose model for each listing object in the JSON file, 
  and then save it to your Mongo database 
 */

var chessDude = buildingData;
console.log(chessDude.entries.length);
console.log(chessDude.entries[0]);
//console.log(chessDude);
 
for(var i = 0; i < chessDude.entries.length; i++)
 {
   console.log(i);
   new Listing(chessDude.entries[i]).save();
   console.log(chessDude.entries[i].code);
 }
/*
  Once you've written + run the script, check out your MongoLab database to ensure that 
  it saved everything correctly. 
 */