var Mongodb = require('mongodb');
var MongoClient = Mongodb.MongoClient;
var mongodb_config_url = "mongodb://localhost:27017/express_app_db";
MongoClient.connect(mongodb_config_url, { useNewUrlParser: true, useUnifiedTopology: true }, function (error, mongoDB) {
  if (error) {
    throw error;
  }
  else {
    console.log('Database Connection Sucessful');
    mongoDB.close();
  }
});

