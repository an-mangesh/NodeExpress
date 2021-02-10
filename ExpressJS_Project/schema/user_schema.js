const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true, trim: true },
  address: String,
  phone: Number,
  age: { type: String, min: 20, max: 75 },
  updatedate: { type: Date, default: Date.now }
});
module.exports = userSchema;