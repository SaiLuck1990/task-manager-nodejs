const express = require('express')
require('./db/mongoose')

const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()

const port = process.env.PORT || 3000

//Automatically parse incoming json to object
app.use(express.json())

// To link the router files where API is defined 
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('Your server is up at port : ' + port)
})