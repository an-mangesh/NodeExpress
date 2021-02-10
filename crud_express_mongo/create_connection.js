// Node.js MongoDB Create Database Ref. W3School for this only.

const MongoClient = require('mongodb').MongoClient;
const exp_app_db = "mongodb://localhost/express_app_db";
// express_app_db is database name if exists then connect neither it will create this named database.

MongoClient.connect(exp_app_db, { useNewUrlParser: true, useUnifiedTopology: true }, (error, db) => {
  if (error) {
    throw error;
  } else {
    console.log("Database Connection Successful");
    db.close();
  }
});
