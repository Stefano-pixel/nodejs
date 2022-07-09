const express = require('express')
const mongoose = require("mongoose");

//connect to the database
const mongooseConnect = require('./mongoose/mongoose_connect')

const univeristyRouter = require('./routers/university')
const userRouter = require('./routers/user')
const cors = require('cors')
const mongoDbUrl = 'mongodb+srv://Stefano:Transcode_1@clusteruniversity.nssnt.mongodb.net/university-database?retryWrites=true&w=majority';

const app = express()
const port = process.env.PORT || 3002

app.use(express.json())
app.use(cors())
app.use(univeristyRouter) 
app.use(userRouter)

mongooseConnect.initDb((error) => {
                            if(error){
                                console.error(error)
                            }
                            app.listen(port, ()=>{
                                console.log('Server is up on port ' + port)
                            })
                        })



