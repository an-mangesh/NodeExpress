var express = require('express');
var router = express.Router();
var industry = require("../controllers/IndustryController.js");


// Get all
router.get('/', industry.list);

// Get single  by id
router.get('/show/:id', industry.show);

// Create
router.get('/create', industry.create);

// Save
router.post('/save', industry.save);

// Edit
router.get('/edit/:id', industry.edit);

// Edit update
router.post('/update/:id', industry.update);

// Edit update
router.post('/delete/:id', industry.delete);

module.exports = router;
