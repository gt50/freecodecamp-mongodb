var mongo = require('mongodb').MongoClient;
var mongourl = 'mongodb://localhost:27017/learnyoumongo';
var collection = 'parrots';
var age = {age: {$gt: +process.argv[2]}};
mongo.connect(mongourl, function(err, db){
    if (err) throw err;
    db.collection(collection).find(age, {_id:0}).toArray(function(err,documents){
        if (err) throw err;
        console.log(documents);
        db.close();
    });
});