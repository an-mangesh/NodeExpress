// const Mongodb = require('mongodb');
// const getSchema = Mongodb.Schema({ name: { type: String, required: true }, live_age: { type: Number, required: true } });
// const custom_model = (module.exports = Mongodb.model('custom_model', getSchema, 'Industry'));


const mongoose = require('mongoose');
const getSchema = mongoose.Schema({ name: { type: String, required: true }, live_age: { type: Number, required: true } });
const custom_model = (module.exports = mongoose.model('custom_model', getSchema, 'Industry'));
