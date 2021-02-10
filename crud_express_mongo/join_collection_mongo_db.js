// const { lookup } = require('dns');

var joinMongo = require('mongodb').MongoClient;
var db_url = 'mongodb://localhost/';
joinMongo.connect(
  db_url,
  { useNewUrlParser: true, useUnifiedTopology: true },
  function (error, mdb_join) {
    if (error) throw error;
    else var mdb_join_obj = mdb_join.db('express_app_db');
    var updateInput = { live_age: 15 };
    var updateRes = { $set: { live_age: 25 } };
    mdb_join_obj
      .collection('Industry')
      .aggregate([
        {
          $lookup: {
            from: 'Employee',
            localField: 'emp_id',
            foreignField: '_id',
            as: 'Wholedetails',
          },
        },
      ]).toArray(function (err, Res) {
        if (err) throw err;
        else
          console.log(JSON.stringify(Res));
        mdb_join.close();
      });
  }
);
