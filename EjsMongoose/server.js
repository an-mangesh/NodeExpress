const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const dbConfig = require('./dbConfig.js');
const mongoose = require('mongoose');
var customRouter = require('./controller/custom_controller');
app.use('/custom', customRouter);
app.set('view engine', 'jade');


mongoose.connect(dbConfig.url, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
  console.log('The Database Connection Configured');
}).catch(err => {
  console.log('Some Error Occured Here...!', err);
  process.exit();
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.get('/', (req, res) => {
  res.json({ 'message': 'Express JS Called' });
});

app.listen(3000, (req, res) => {
  console.log("App Is Listening");
});
