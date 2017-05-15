'use strict';

var mongoose = require('mongoose');

var postSchema = new mongoose.Schema({
    type: String,
    age: Number,
    color: String
  },
  // Tells mongoose which collection to put this partical object in
  { collection: 'animals' });

var model = mongoose.model('Post',postSchema);

module.exports = model;