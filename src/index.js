const express = require('express')
require('./db/mongoose')

const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT || 3000

// app.use((req, res, next) => {
//     if(req.method === 'GET') {
//         res.send()
//     } else {
//         next()
//     }
// })

// app.use((req,res,next) => {
//     res.status(503).send('Site is currently down . Check back soon')
// })


//Automatically parse incoming json to object
app.use(express.json())

// To link the router files where API is defined 
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('Your server is up at port : ' + port)
})