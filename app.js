const express = require('express');
const app = express();

/**
 * Route statique vers dossier public
 */
app.use(express.static('public'))

/**
 * Route vers Index.html
 */
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
})



var MongoClient = require('mongodb').MongoClient
    , assert = require('assert');

// Connection URL
var url = 'mongodb://localhost:27017/Adama';

// Use connect method to connect to the server
MongoClient.connect(url, function (err, db) {
    assert.equal(null, err);
    console.log("Connected successfully to server");

    db.close();
});


// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/";

// MongoClient.connect(url, function (err, db) {
//     if (err) throw err;
//     var dbo = db.db("Adama");
//     dbo.collection("personnages").findOne({}, function (err, result) {
//         if (err) throw err;
//         console.log(result);
//         db.close();
//     });
// });


app.get('/data', function (req, res) {
    var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb://localhost:27017/";

    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("Adama");
        dbo.collection("personnages").findOne({}, function (err, result) {
            if (err) throw err;
            console.log(result);
            res.send(result);
            db.close();
        });
    });
});
/**
//  * Port d'écoute
//  */
app.listen(5099, function () { console.log("Listening on port 5099") });
