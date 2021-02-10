var mongoFindProjection = require('mongodb').MongoClient;
var db_url = 'mongodb://localhost/';

mongoFindProjection.connect(db_url, { useNewUrlParser: true, useUnifiedTopology: true }, function (error, dbs) {
  if (error)
    throw error;
  else
    var db_obj = dbs.db("express_app_db");
  db_obj.collection("Industry").find({}, { projection: { _id: 0, name: 1, website: 1, address: 1 } }).toArray(function (err, res) {
    if (err)
      throw err;
    else
      console.log('\n');
    console.log("The Result of Find Projection with excluding _id And live_age Is :");
    console.log(res);

    console.log('\n');

    console.log('The first Entry is : ');
    console.log(res[0]);

    console.log('\n The first Entry with name is : ' + res[0].name);
    console.log('\n The first Entry with Live Age is : ' + res[0].live_age);       // Undefined Due to NOT Fetched in Current Result(res).
    console.log('\n The first Entry with Address is : ' + res[0].address);
    console.log('\n The first Entry with Website is : ' + res[0].website);
    console.log('\n');

    dbs.close();
  });
});


/* if dont want _id then need to set 0 other hand for other fields not need to mention 0 and 1 at all.
  To exclude the _id field, you must set its value to 0.
   And if you specify both 0 and 1 in same object (like name as 0 and live_age as 1)excluding _id as 0 or 1 then
   it will gives Mongo error such as : Projection cannot have a mix of inclusion and exclusion.
 */

mongoFindProjection.connect(db_url, { useNewUrlParser: true, useUnifiedTopology: true }, function (error, db1) {
  if (error)
    throw error;
  else
    var db_obj2 = db1.db("express_app_db");
  db_obj2.collection("Industry").find({}, { projection: { _id: 0, live_age: 1 } }).toArray(function (err, res1) {
    if (err)
      throw err;
    else
      console.log('\n');
    console.log("The Result of Find Projection with including only live_age Is :");
    console.log(res1);
    console.log('\n');
    console.log('\n The first Entry with Live Age is : ' + res1[0].live_age);       // Fetched in Current Result(res1).
    db1.close();
  });
});