// 'use strict';

// var Todo = require('../server/models/todos.js');

// var todos = [
//   'Todo Number 1',
//   'Todo Number 2',
//   'Todo Number 3'
// ];

// todos.forEach(function(todo, index) {
//   Todo.find({'name': todo}, function (err, todos) {
//     if(!err && !todos.length) {
//       Todo.create({completed: false, name: todo});
//     };
//   });
// });