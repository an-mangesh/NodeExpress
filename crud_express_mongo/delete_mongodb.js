var deleteMongo = require('mongodb').MongoClient;
var db_url = 'mongodb://localhost/';
// This IS Executing on SAVE ALSO.
deleteMongo.connect(db_url, { useNewUrlParser: true, useUnifiedTopology: true }, function (error, mdbdel) {
  if (error)
    throw error;
  else
    var mdbdel_obj = mdbdel.db('express_app_db');
  var delQuery = { name: 'LMN' };
  mdbdel_obj.collection('Industry').deleteOne(delQuery, function (err, delRes) {
    if (err)
      throw err;
    else
      console.log('\n Sucess.');
    mdbdel.close();
  });

}
);