const mongoose = require("mongoose");
const University = require("./University"); 
const mongoDbUrl = 'mongodb+srv://Stefano:Transcode_1@clusteruniversity.nssnt.mongodb.net/university-database?retryWrites=true&w=majority';
// const mongoDbUrl = "mongodb://127.0.0.1:27019/testdb"

const initDb = callback => {
    if(mongoose.connection.readyState == 1){
        console.log('mongoose is already connected')
        return;
    }
    mongoose.connect(mongoDbUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() =>{
        console.log("mongoose connected")
        callback();
    })
    .catch(err => {
        callback(err);
    });
}

module.exports = {
    initDb
}
