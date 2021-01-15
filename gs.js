const MongoClient = require('mongodb').MongoClient;
// Connection URL
const url = 'mongodb://localhost/27017';
// Database Name
const dbName = '27017';
// Create a new MongoClient
const client = new MongoClient(url);
const assert = require('assert');
// Use connect method to connect to the Server
client.connect(function(err, client) {
    assert.equal(null, err);
    console.log("Connected correctly to server");
  
    const db = client.db(dbName);
    createTextIndex(db, function() {
      client.close();
    });
});


const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/27017', { useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});

//flushes the databases
db.dropDatabase();


//creates the schema for the database
const userVoteSchema = new mongoose.Schema({
    userId: String,
    vote: String,
});

//creates the database from the schema
const UserVote = mongoose.model('userVote', userVoteSchema);


//create the first vote
//const userVote1 = new UserVote({ userId:1111, vote:"yes", value:1 });
//userVote1.save();

//UserVote.create({"userId":"1111", "vote":"yes", "value":1 });
//UserVote.create({ "userId":"2222", "vote":"no", "value":1 });


function createTextIndex(db, callback) {
    // Get the restaurants collection
    const collection = db.collection('restaurants');
    // Create the index
    collection.createIndex(
      { userId : "text" }, function(err, result) {
      console.log(result);
      callback(result);
    });
};


//const found = UserVote.find({ userId:555 }).exec();

//found.find({userId:555});

//console.log(found);

/*
function checkIfVoted() {
    return UserVote.find({userId:1111}, function(err,arr) {});
}

console.log(checkIfVoted());
*/
/*
function addRecord() {
    db.userVote1.insertOne({ userId:1111, vote:"yes", value:1 });
}
*/


