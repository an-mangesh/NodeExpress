// var mongoose = require('mongoose');

// var ProductSchema = new mongoose.Schema({
//   prod_name: String,
//   prod_desc: String,
//   prod_price: Number,
//   updated_at: { type: Date, default: Date.now },
// });

// module.exports = mongoose.model('Product', ProductSchema);

var mongoose = require('mongoose');
var IndustrySchema = new mongoose.Schema({
  name: String,
  live_age: Number,
});
module.exports = mongoose.model('Industry', IndustrySchema);