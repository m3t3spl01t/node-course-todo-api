//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/logApp', (err,db)=>{
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('We can connect to the MongoDB server');

/*    db.collection('logApp').find({
        _id: new ObjectID('595f4b3b0e44e060c9f0082f')
    }).toArray().then((docs)=>{
        console.log('logApp');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch logApp records',err);
    });

    db.collection('logApp').find().count().then((count)=>{
        console.log(`logApp count: ${count}`);
    }, (err) => {
        console.log('Unable to fetch logApp records',err);
    });*/

    db.collection('Users').find({
        "user.name": 'Metehan Öner'
    }).toArray().then((docs) => {
        console.log(JSON.stringify(docs, undefined, 2));
    });

    //db.close();
});
