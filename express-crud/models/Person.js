var mongoose = require('mongoose');
var PersonSchema = new mongoose.Schema({
  name: String,
  contact_number: Number,
  address: String,
  email_id: String,
  qualification: Array,
  position: String
});
module.exports = mongoose.model('Person', PersonSchema);