var mongodbSort = require('mongodb').MongoClient;
var db_url = 'mongodb://localhost/';

mongodbSort.connect(db_url, { useNewUrlParser: true, useUnifiedTopology: true }, function (error, mdbs) {
  if (error)
    throw error;
  else
    var mdbs_obj = mdbs.db('express_app_db');



  var asc_sort = { name: 1 };
  mdbs_obj.collection('Industry').find().sort(asc_sort).toArray(function (err, sortAscRes) {
    if (error)
      throw error;
    else
      console.log('\n Data is Sorted in Name wise Ascending sort : ');
    console.log(sortAscRes);
    mdbs.close();

  });

  var desc_sort = { name: -1 };
  mdbs_obj.collection('Industry').find().sort(desc_sort).toArray(function (err, sortDescRes) {
    if (error)
      throw error;
    else
      console.log('\n Data is Sorted in Name wise Descending sort : ');
    console.log(sortDescRes);
    mdbs.close();
  });

});