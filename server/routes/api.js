const express = require('express');
const router = express.Router();
// const todos = require('../../mock/todos.json');
var Todo = require('../../server/models/todos.js');
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
  var animal = req.body
  console.log('Adding animal: ' + animal.type);
  // Get posts from the remote db
    db.collection('animals')
        .insert(animal, {safe:true}, function(err, result) {
            if (err) {
                res.send({'error':'An error has occurred'});
            } else {
                console.log('Success: ' + result);
                res.send(result);
            }
        });
});

// Get Todos List
router.get('/todos', (req, res) =>{
  Todo.find({}, function (err,todos) {
    if(err) {
      return res.status(500).json({message: err.message});
    }
      res.json({todos: todos})
  }); 
});

// Create New Todos
router.post('/todos', (req, res) => {
  var todo = req.body;
  // Store New Todo in Database
  Todo.create(todo, (err, todo) => {
    if(err) {
      return res.status(500).json({err: err.message});
    }
    res.json({'todo': todo, message: 'Todo Created'});
  })
});

module.exports = router;