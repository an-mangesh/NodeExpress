

var MongoManyInsert = require('mongodb').MongoClient;
var db_url = 'mongodb://localhost/express_app_db';

MongoManyInsert.connect(
  db_url,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  function (error, mdb) {
    if (error) throw error;
    else
      var mongodbManyInsert = mdb.db('express_app_db');
    var manyInsertObj = [
      {
        name: 'LMN',
        live_age: 10,
        website: 'https://www.LMN.com',
        address: 'USA',
        emp_id: 1
      },
      {
        name: 'XYZ',
        live_age: 12,
        website: 'https://www.XYZ.com',
        address: 'USA',
        emp_id: 2
      },
      {
        name: 'ABC',
        live_age: 20,
        website: 'https://www.ABC.com',
        address: 'USA',
        emp_id: 3
      },
      {
        name: 'PQRST',
        live_age: 18,
        website: 'https://www.PQRST.com',
        address: 'USA',
        emp_id: 4
      },
      {
        name: 'ABCD',
        live_age: 12,
        website: 'https://www.ABCD.com',
        address: 'USA',
      },
      {
        name: 'PQR',
        live_age: 09,
        website: 'https://www.PQR.com',
        address: 'USA',
      },
      {
        name: 'ASDF',
        live_age: 05,
        website: 'https://www.xyz.com',
        address: 'USA',
      },
    ];
    mongodbManyInsert.collection('Industry').insertMany(manyInsertObj, function (err, res) {
      if (err) throw err;
      else console.log('Number of documents inserted: ' + res.insertedCount);
      mdb.close();
    });
  }
);
