'use strict';

var mongoose = require('mongoose');

mongoose.connect('mongodb://jnmabry:interapt4life@ds137101.mlab.com:37101/testdatabase', function(err) {
  if(err){
    console.log('Failed connecting to Mongodb!');
  } else {
    console.log('Successfully connected to Mongo!');
  }
});

const db = mongoose.connection;

module.exports = db;