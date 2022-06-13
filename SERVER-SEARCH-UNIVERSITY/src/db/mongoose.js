const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27019/univeristy-api', {
    useNewUrlParser: true,
})

// mongoose.connect('mongodb://127.0.0.1:27019/univeristy-api',function(){
//     /* Drop the DB */
//     mongoose.connection.db.dropDatabase();
// })