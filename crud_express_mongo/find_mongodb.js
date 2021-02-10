var Mongofind = require('mongodb').MongoClient;
var db_url = 'mongodb://localhost/express_app_db';

Mongofind.connect(db_url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, function (error, mdb) {
  if (error)
    throw error;
  else
    var mongodbFind = mdb.db('express_app_db');
  mongodbFind.collection("Industry").findOne({}, function (err, result) {
    if (error)
      throw error;
    else
      console.log(result.name);
    mdb.close();
  });

});