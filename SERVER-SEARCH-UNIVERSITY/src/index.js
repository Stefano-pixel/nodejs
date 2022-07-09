const express = require('express')
const db = require('./db/mongodb_driver')
const univeristyRouter = require('./routers/university')
const userRouter = require('./routers/user')
const cors = require('cors')

const app = express()
const port = process.env.PORT || 3002

app.use(express.json())
app.use(cors())
app.use(univeristyRouter)
app.use(userRouter)

//connect to the database
db.initDb((err, db)=>{
    if(err){
        console.error(err);
    }else {
        app.listen(port, ()=>{
            console.log('Server is up on port ' + port)
        })
    }
});
