var mongoQuery = require('mongodb').MongoClient;
var db_url = 'mongodb://localhost/';


/*  Filter the Result */
mongoQuery.connect(db_url, { useNewUrlParser: true, useUnifiedTopology: true }, function (error, dbq) {
  if (error)
    throw error;
  else
    var dbq_obj = dbq.db("express_app_db");
  var filter_qry = { name: 'LMN' };
  dbq_obj.collection("Industry").find(filter_qry).toArray(function (err, resultantData) {
    if (err)
      throw err;
    else
      console.log('\n ------------------------------------------------------------------------------------------');
    console.log('\n 1 \n -----> The Record whose name is LMN is :');
    console.log(resultantData);
    console.log('\n ------------------------------------------------------------------------------------------');

    dbq.close();
  });
});

/*  Filter With Regular Expressions */
mongoQuery.connect(db_url, { useNewUrlParser: true, useUnifiedTopology: true }, function (error, dbq1) {
  if (error)
    throw error;
  else

    // Case Sensitive
    var dbq1_obj = dbq1.db('express_app_db');
  var filter_qry1 = { name: /^P/ };
  dbq1_obj.collection('Industry').find(filter_qry1).toArray(function (err, resultantData1) {
    if (err)
      throw err;
    else
      console.log('\n 2 \n -----> The Names whose starting is with P(Case Sensitive) is : ');
    console.log(resultantData1);
    console.log('\n ------------------------------------------------------------------------------------------');
    // dbq1.close();
  });

  // Case InSensitive : uses --> i in pattern matching query.

  var dbq2_obj = dbq1.db('express_app_db');
  var filter_qry2 = { name: /^p/i };                              // Option i($options) is added direct in pattern match string.
  var filter_qry3 = { name: { $regex: /^a/, $options: "i" } };    // Option i($options) is taken seperately in pattern match string.

  dbq2_obj.collection('Industry').find(filter_qry2).toArray(function (err, resultantData2) {
    if (err)
      throw err;
    else
      console.log('\n 3 \n -----> The Names whose starting is with p or P (Case InSensitive) With out option seperation is : ');
    console.log(resultantData2);
    console.log('\n ------------------------------------------------------------------------------------------');
    // dbq1.close();
  });


  dbq2_obj.collection('Industry').find(filter_qry3).toArray(function (err, resultantData3) {
    if (err)
      throw err;
    else
      console.log('\n 4 \n -----> The Names whose starting is with a or A (Case InSensitive) With option seperation is : ');
    console.log(resultantData3);
    console.log('\n ------------------------------------------------------------------------------------------');
    //dbq1.close();
  });

  // Find the records which are end(used $) with t or T (used option as i).
  var filter_qry4 = { name: { $regex: /t$/, $options: "i" } };
  dbq2_obj.collection('Industry').find(filter_qry4).toArray(function (err, resultantData4) {
    if (err)
      throw err;
    else
      console.log('\n 5 \n -----> The Names whose ending is with t or T (Case InSensitive) is : ');
    console.log(resultantData4);
    console.log('\n ------------------------------------------------------------------------------------------');
    //dbq1.close();
  });


  // Find the records which contains with b or B.
  var filter_qry5 = { name: { $regex: /b/, $options: "i" } };
  dbq2_obj.collection('Industry').find(filter_qry5).toArray(function (err, resultantData5) {
    if (err)
      throw err;
    else
      console.log('\n 6 \n -----> The Names whose contains with b or B (Case InSensitive) is : ');
    console.log(resultantData5);
    console.log('\n ------------------------------------------------------------------------------------------');
    //dbq1.close();
  });

  // Find the records whose names are IN "ABC", "LMN", "XYZ".
  var filter_qry6 = { name: { $in: ["ABC", "LMN", "XYZ"] } };
  dbq2_obj.collection('Industry').find(filter_qry6).toArray(function (err, resultantData6) {
    if (err)
      throw err;
    else
      console.log('\n 7 \n -----> The Names whose names are IN "ABC", "LMN", "XYZ". : ');
    console.log(resultantData6);
    console.log('\n ------------------------------------------------------------------------------------------');
    //dbq1.close();
  });

  // Find the records whose names are NOT IN "LMN", "XYZ".
  var filter_qry7 = { name: { $nin: ["LMN", "XYZ"] } };
  dbq2_obj.collection('Industry').find(filter_qry7).toArray(function (err, resultantData7) {
    if (err)
      throw err;
    else
      console.log('\n 8 \n -----> The Names whose names are NOT IN "LMN", "XYZ". : ');
    console.log(resultantData7);
    console.log('\n ------------------------------------------------------------------------------------------');
    dbq1.close();
  });

});