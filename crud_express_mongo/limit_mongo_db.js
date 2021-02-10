var LimitMongo = require('mongodb').MongoClient;
var db_url = 'mongodb://localhost/';
LimitMongo.connect(
  db_url,
  { useNewUrlParser: true, useUnifiedTopology: true },
  function (error, mdb_limit) {
    if (error) throw error;
    else var mdb_limit_obj = mdb_limit.db('express_app_db');
    var updateInput = { live_age: 15 };
    var updateRes = { $set: { live_age: 25 } };
    mdb_limit_obj
      .collection('Industry').find().limit(5).toArray(function (err, Res) {
        if (err) throw err;
        else
          console.log(Res);
        mdb_limit.close();
      });
  }
);
