var updateManyCollectionMongo = require('mongodb').MongoClient;
var db_url = 'mongodb://localhost/';
updateManyCollectionMongo.connect(
  db_url,
  { useNewUrlParser: true, useUnifiedTopology: true },
  function (error, mdb_update_many) {
    if (error) throw error;
    else var mdb_update_many_obj = mdb_update_many.db('express_app_db');
    var updateInput = { live_age: 15 };
    var updateRes = { $set: { live_age: 25 } };
    mdb_update_many_obj
      .collection('Industry')
      .updateMany(updateInput, updateRes, function (err, update_many) {
        if (err) throw err;
        else console.log('\n The Total ' + update_many.result.nModified + ' Collections Are Updated. ');
        mdb_update_many.close();
      });
  }
);