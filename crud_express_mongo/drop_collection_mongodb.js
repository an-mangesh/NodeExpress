var dropCollectionMongo = require('mongodb').MongoClient;
var db_url = 'mongodb://localhost/';

dropCollectionMongo.connect(
  db_url,
  { useNewUrlParser: true, useUnifiedTopology: true },
  function (error, mdbdel) {
    if (error) throw error;
    else
      var mdbdrop_coll_obj = mdbdel.db('express_app_db');
    mdbdrop_coll_obj.collection('employee').drop(function (err, delCollection) {
      if (err) throw err;
      if (delCollection) console.log('The Collection Is Deleted Sucessfully');
      mdbdel.close();
    });
  });
