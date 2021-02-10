const MongoInsert = require('mongodb').MongoClient;
const db_url = "mongodb://localhost/express_app_db";

MongoInsert.connect(db_url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, (error, mdb) => {
  if (error) {
    throw error;
  } else {
    var mdbObj = mdb.db("express_app_db");
    var insertObjet = {
      name: "PQR",
      live_age: 10,
      website: "https://www.xyz.com",
      address: "USA"
    };
    mdbObj.collection("Industry").insertOne(insertObjet, (err, res) => {
      if (err) {
        throw err;
      } else {
        console.log("New document added to collection!");
        mdb.close();
      }
    });
  }
});