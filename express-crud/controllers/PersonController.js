var mongoose = require('mongoose');
//var Person = mongoose.model('Person');
var Person = mongoose.model("Person");

var personController = {};

personController.create = function (req, res) {
  res.render('../views/person/create.ejs', { title: 'Express JS Create Call' });
};

personController.save = function (req, res) {
  var person = new Person(req.body);
  //console.log(req.body);
  person.save(function (err) {
    if (err) {
      console.log(err);
    }
    else {
      console.log('Document Inserted.');
      res.redirect('/person/');
    }
  });
};

personController.list = function (req, res) {
  Person.find({}).exec(function (error, person) {
    if (error) {
      console.log(error);
    }
    else {
      res.render('../views/person/index.ejs', { title: 'ExpressJS Listing', person: person });
    }
  });
};


personController.edit = function (req, res) {
  Person.findOne({ _id: req.params.id }).exec(function (error, person) {
    if (error) {
      console.log('Error Is : ', error);
    }
    else {
      res.render('../views/person/edit.ejs', { title: 'ExpressJS Edit', person: person });
    }
  });
};


personController.update = function (req, res) {
  Person.findByIdAndUpdate(req.params.id, {
    $set: {
      name: req.body.name,
      contact_number: req.body.contact_number,
      address: req.body.address,
      email_id: req.body.email_id
    }
  }, { new: true }, function (error, person) {
    if (error) {
      console.log(error);
      res.render('../views/person/edit.ejs', { title: 'ExpressJS Edit', person: req.body });
    }
    else {
      res.redirect('/person/');
    }
  });
};



personController.delete = function (req, res) {
  Person.remove({ _id: req.params.id }, function (error) {
    if (error) {
      console.log(error);
    }
    else {
      console.log('The Document is Deleted.');
      res.redirect('/person');
    }
  });
};

module.exports = personController;