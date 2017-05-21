const express = require('express');
const router = express.Router();

var Post = require('../../server/models/posts.js');

// Database connection from database.js file
const db = require('../../server/database.js');

// declare axios for making http requests
const axios = require('axios');
// Base URL when connecting to MONGODB wherever it is found
const API = 'https://jsonplaceholder.typicode.com';

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

// Get all posts
router.get('/posts', (req, res) => {
  // Get posts from the remote db
  Post.find({}, function(err, posts) {
    if (err) throw res.status(500).send(error);
      // object of all the posts
      console.log(posts);
      res.status(200).json(posts);
  });
});

// Post a post
router.post('/posts', (req, res) => {
  var animal = new Post(req.body);
  console.log('Adding animal: ' + animal.type);
  // Mongoose knows to save the animal in the correct database collection
  // Connection is already open to database from the database.js file
  animal.save(function (err, createdAnimalObject) {  
    if (err) throw res.status(500).send(err);
    // This createdTodoObject is the same one we saved, but after Mongo
    // added its additional properties like _id.
    res.send(createdAnimalObject);
  });
});

// Update a post
router.put('/posts', (req, res) => {
  var updatedAnimal = req.body;
  var animalId = req.body._id;
  Post.findOneAndUpdate( { "_id":animalId } , updatedAnimal,
    function (err, updatedAnimalObject) {  
    if (err) throw res.status(500).send(err);
      res.status(200).send(updatedAnimalObject);
    });
});

// Delete a post
router.delete('/posts', (req, res) => {
  var animalId = req.body;
  Post.findOneAndRemove(animalId, function(err) {
    if (err) throw res.send(err);
    res.status(200).json(animalId);
  });
});

module.exports = router;