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
  db.collection('animals').find().toArray(function (err, result) {
    if (err) throw res.status(500).send(error)
    res.status(200).json(result);
    console.log(result)
    })
});

// Post a post
router.post('/posts', (req, res) => {
  var animal = new Post(req.body);
  console.log('Adding animal: ' + animal.type);
  // Mongoose knows to save the animal in the correct database collection // Connection is already open to database
  // from the database.js file // This code is way shorten and requires less work than the long hand method below
  animal.save(function (err, createdAnimalObject) {  
    if (err) {
        res.send(err);
    }
    // This createdTodoObject is the same one we saved, but after Mongo
    // added its additional properties like _id.
    res.send(createdAnimalObject);
});

  // Get posts from the remote db using mongo db syntax but not mongoose
  // This is the long shitty way to add stuff to a database

    // db.collection('animals')
    //     .insert(animal, {safe:true}, function(err, result) {
    //         if (err) {
    //             res.send({'error':'An error has occurred'});
    //         } else {
    //             console.log('Success: ' + result);
    //             res.send(result);
    //         }
    //     });

});

module.exports = router;