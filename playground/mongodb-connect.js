//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/logApp', (err,db)=>{
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('We can connect to the MongoDB server');

    db.collection('Users').insertOne({
        user: {
            userId: int,
            userName: String,
            name: String,
            profilePicture: String,
            currentLocation: {
                latitude: 0,
                longtitude: 0
            }
        },

        }, (err, result) => {
        if(err){
            console.log('Unable to insert data');
        }

        console.log(JSON.stringify(result.ops, undefined, 2));

    });

    db.close();
});