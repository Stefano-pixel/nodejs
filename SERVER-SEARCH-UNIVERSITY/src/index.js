const express = require('express')
const db = require('./db/mongodb_driver')
const univeristyRouter = require('./routers/university')
const cors = require('cors')

const app = express()
const port = process.env.PORT || 3001

app.use(express.json())
app.use(cors())
app.use(univeristyRouter)

//connect to the database
db.initDb((err, db)=>{
    if(err){
        console.log(err);
    }else {
        app.listen(port, ()=>{
            console.log('Server is up on port ' + port)
        })
    }
});
