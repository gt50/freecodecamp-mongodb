var mongo = require('mongodb').MongoClient;
var mongourl = 'mongodb://localhost:27017/learnyoumongo';
var mydocument = {firstName:  process.argv[2], lastName: process.argv[3]};
mongo.connect(mongourl, function(err, db){
    if (err) throw err;
    db.collection('docs').insert(mydocument,function(err,documents){
        if (err) throw err;
        console.log(JSON.stringify(mydocument));
        db.close();
    });
});