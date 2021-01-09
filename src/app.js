const express = require('express')
require('./db/mongoose')

const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()

//Automatically parse incoming json to object
app.use(express.json())

// To link the router files where API is defined 
app.use(userRouter)
app.use(taskRouter)

module.exports = app