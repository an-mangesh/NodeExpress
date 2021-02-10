var dropCollectionMongo = require('mongodb').MongoClient;
var db_url = 'mongodb://localhost/';
dropCollectionMongo.connect(db_url, { useNewUrlParser: true, useUnifiedTopology: true }, function (error, mdb_dc) {
  if (error)
    throw error;
  else
    var mdb_dc_obj = mdb_dc.db('express_app_db');
  mdb_dc_obj.dropCollection('Test', function (err, DelColl) {
    if (err)
      throw err;
    else
      console.log('\n The Collection is dropped from dropCollection() method. ');
    mdb_dc.close();
  });
});