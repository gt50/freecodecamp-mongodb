var mongo = require('mongodb').MongoClient;
var mongourl = 'mongodb://localhost:27017/' + 'learnyoumongo';
mongo.connect(mongourl, function(err, db){
    if (err) throw err;
    //console.log(process.argv[2]);
    db.collection('parrots').count({age: {$gt: parseInt(process.argv[2],10)}},function(err,documents){
        if (err) throw err;
        console.log(documents);
        db.close();
    });
});