const mongoose = require('mongoose');

var Schema = mongoose.Schema;

var SomeModelSchema = new Schema({
  _id: Number,
  name: String,
  address: String,
  live_age: Number

});

mongoose.model('Industry', SomeModelSchema);