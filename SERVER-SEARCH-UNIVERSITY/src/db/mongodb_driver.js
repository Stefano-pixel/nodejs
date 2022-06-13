const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const mongoDbUrl = 'mongodb+srv://Stefano:Transcode_1@clusteruniversity.nssnt.mongodb.net/university-database?retryWrites=true&w=majority';

let _db;

//Assign to initDb the initialization of the db
const initDb = callback => {
    if(_db){
        console.log('Database is already initialized!');
        return callback(null, _db);
    }

    MongoClient.connect(mongoDbUrl)
    .then(client =>{
        _db = client.db();
        callback(null, _db);
    })
    .catch(err => {
        callback(err);
    });
}

const getDb = () => {
    if(!_db){
      throw Error('Database not initialized');
    }
    return _db;
}

module.exports = {
    initDb,
    getDb
}

