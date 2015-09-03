var mongo = require('mongodb').MongoClient;
var mongourl = 'mongodb://localhost:27017/' + 'learnyoumongo';
mongo.connect(mongourl, function(err, db){
    if (err) throw err;
    db.collection('prices').aggregate([
        {$match: {size: process.argv[2]}},
        {$group: {
            _id: 'average',
            average: {
                $avg: '$price'
            }
        }
    }]).toArray(function(err,results){
        if (err) throw err;
        console.log(Number(results[0].average).toFixed(2));
        db.close();
    });
});