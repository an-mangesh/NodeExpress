const express = require('express');
const router = express.Router();
const cust_controller = require('../controllers/custom_controller');
const GetData = require('../models/custom_model');

router.get('/', cust_controller.getpage);

module.exports = router;

// Command Prompt Command : nexususer@comopen12:~/myproject/nodeapp$ nodemon server.js
// Browser HIT URL : http://localhost:3000/custom
