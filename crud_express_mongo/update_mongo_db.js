var updateCollectionMongo = require('mongodb').MongoClient;
var db_url = 'mongodb://localhost/';
updateCollectionMongo.connect(db_url, { useNewUrlParser: true, useUnifiedTopology: true }, function (error, mdb_update) {
  if (error)
    throw error;
  else
    var mdb_update_obj = mdb_update.db('express_app_db');
  var updateInput = { name: 'XYZ' };
  var updateRes = { $set: { live_age: 12, website: 'https://xyz.com', address: 'XYZ Location' } };
  mdb_update_obj.collection('Industry').updateOne(updateInput, updateRes, function (err, DelColl) {
    if (err)
      throw err;
    else
      console.log('\n The Collection Is Updated. ');
    mdb_update.close();
  });
});