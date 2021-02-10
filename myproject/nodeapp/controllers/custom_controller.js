var cust_model = require('../models/custom_model');

module.exports = {
  getpage: function (req, res) {
    res.render('custom_view', { title: "Express JS MVC Custom Route" });
  }
};