var deleteMongo = require('mongodb').MongoClient;
var db_url = 'mongodb://localhost/';

deleteMongo.connect(db_url, { useNewUrlParser: true, useUnifiedTopology: true }, function (error, mdbdel) {
  if (error) throw error;
  else
    var mdbdel_obj = mdbdel.db('express_app_db');
  var delManyQuery = { name: { $in: ['XYZ', 'PQRST'] } };
  mdbdel_obj.collection('Industry').deleteMany(delManyQuery, function (err, delManyRes) {
    if (err) throw err;
    else console.log('\n The Total ' + delManyRes.result.n + ' Documents are Deleted');
    mdbdel.close();
  });
}
);