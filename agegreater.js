var mongo = require('mongodb').MongoClient;
var mongourl = 'mongodb://localhost:27017/learnyoumongo';
var collection = 'parrots';
var age = {age: {$gt: +process.argv[2]}};
mongo.connect(mongourl, function(err, db){
    if (err) throw err;
    db.collection(collection).find(age).toArray(function(err,documents){
        if (err) throw err;
        console.log(documents);
        db.close();
    });
});



// Here we will learn how to search for documents.

// For all of the exercises, the database is learnyoumongo.
// So, the url would be something like: mongodb://localhost:27017/learnyoumongo

// Use the parrots collection to find all documents where age
// is greater than the first argument passed to your script.

// Using console.log, print the documents to stdout.

// -------------------------------------------------------------------------------

// ## HINTS

// To connect to the database, one can use something like this:

//     var mongo = require('mongodb').MongoClient
//     mongo.connect(url, function(err, db) {
//       // db gives access to the database
//     })

// To get a collection, one can use db.collection('<collection name>').

// To find a document or documents, one needs to call find() on the collection.

// Find is a little bit different than what we are used to seeing.

// Keep in mind, process.argv is an array of strings. To convert to an integer, you could use parseInt()

// Here is an example:

//     collection.find({
//       name: 'foo'
//     }).toArray(function(err, documents) {
    
//     })

// If your program does not finish executing, you may have forgotten to
// close the db. That can be done by calling db.close() after you
// have finished.