var mongo = require('mongodb').MongoClient;
var mongourl = 'mongodb://localhost:27017/' + process.argv[2];
mongo.connect(mongourl, function(err, db){
    if (err) throw err;
    db.collection(process.argv[3]).remove({_id: process.argv[4]},function(err,documents){
        if (err) throw err;
        db.close();
    });
});