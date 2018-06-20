

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




// exemple pour connard
// db.personnages.update( { "Age": "33", "_id.id": '5b29e66869efc0df193dcfe8' },
// { upsert: true } )




db.personnages.update({ name: 'Adama' }, { $set: { Age: 33 } })
db.personnages.update({ name: 'Adama' }, { $set: { Toto: 'toto' } })
db.personnages.update({ name: 'Adama' }, { $set: { Test: 'Momo' } })
db.personnages.update({ name: 'Adama' }, { $set: { Test: 'Momo' } })

db.personnages.insert({ name: "Mich", genre: "f" });



