const mongoose = require('mongoose');
const user_schema = require('../schema/user_schema');
module.exports = mongoose.model('user', user_schema);