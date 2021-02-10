const express = require('express');
const { getMaxListeners } = require('../model/user_model');
const app = express.Router();

//const mongoose = require('mongoose');
//const user_schema = require('../schema/user_schema');
const User = require('../model/user_model');


app.get('/', function (req, res) {
  console.log(`Hey`);
});
// Browser Hit URL : http://localhost:4000/usr/

app.get('/create', (req, res) => {
  User.create(
    {
      name: 'User',
      email: 'User@gmail.com',
      address: 'USA',
      phone: 9999888899,
      age: 25
    }, function (err, resp) {
      if (err) return (err);
      if (resp) {
        console.log('Document is added or created');

      }
    });
});

// Browser HIT URL : http://localhost:4000/usr/create/
module.exports = app;
