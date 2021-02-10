var mongoose = require("mongoose");
var Industry = mongoose.model("Industry");


var industryController = {};
industryController.list = function (req, res) {
  Industry.find({}).exec(function (err, industry) {
    if (err) {
      console.log("Error:", err);
    }
    else {
      res.render("../views/industry/index", { industry: industry });
    }
  });
};

industryController.show = function (req, res) {
  Industry.findOne({ _id: req.params.id }).exec(function (err, industry) {
    if (err) {
      console.log("Error:", err);
    }
    else {
      res.render("../views/industry/show", { industry: industry });
    }
  });
};
industryController.create = function (req, res) {
  res.render("../views/industry/create");
};
industryController.save = function (req, res) {
  var industry = new Industry(req.body);
  industry.save(function (err) {
    if (err) {
      console.log(err);
      res.render("../views/industry/create");
    } else {
      console.log("Successfully created an industry.");
      res.redirect("/industry/show/" + industry._id);
    }
  });
};
industryController.edit = function (req, res) {
  Industry.findOne({ _id: req.params.id }).exec(function (err, industry) {
    if (err) {
      console.log("Error:", err);
    }
    else {
      res.render("../views/industry/edit", { industry: industry });
    }
  });
};
industryController.update = function (req, res) {
  Industry.findByIdAndUpdate(req.params.id, { $set: { name: req.body.name, live_age: req.body.live_age } }, { new: true }, function (err, industry) {
    if (err) {
      console.log(err);
      res.render("../views/industry/edit", { industry: req.body });
    }
    res.redirect("/industry/show/" + industry._id);
  });
};
industryController.delete = function (req, res) {
  Industry.remove({ _id: req.params.id }, function (err) {
    if (err) {
      console.log(err);
    }
    else {
      console.log("industry deleted!");
      res.redirect("/industry");
    }
  });
};
module.exports = industryController;
