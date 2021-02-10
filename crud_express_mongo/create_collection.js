// Node.js MongoDB Create Collection

const MongoClient = require('mongodb').MongoClient;
const exp_app_db = "mongodb://localhost/express_app_db";


MongoClient.connect(exp_app_db, { useNewUrlParser: true, useUnifiedTopology: true }, (error, db) => {
  if (error) {
    throw error;
  }
  else {
    var db_obj = db.db("express_app_db");
    db_obj.createCollection("Industry", function (err, res) {
      if (err)
        throw err;
      else
        console.log("Collection Created!");
      // On Mongo Shell : db.Industry.createIndex( { "name": 1 }, { unique: true } )
      // Avoid Duplication of Records or Documents.  Ensure Name fields exists.
      db.close();
    });

  }
});
