var express = require('express');
var router = express.Router();
var person = require('../controllers/PersonController');

router.get('/create', person.create);
router.post('/save', person.save);
router.get('/', person.list);

router.get('/edit/:id', person.edit);
router.post('/update/:id', person.update);
router.post('/delete/:id', person.delete);


module.exports = router;