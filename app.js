const express = require('express')
require('dotenv').config({path:"./config.env"})
const orderRouter = require('./router/orderRouter')
require('./db/connection')

const port = process.env.PORT || 8000



const app = express()
app.use(express.json())
app.use(orderRouter)


app.listen(port,()=>{
    console.log(`listening on ${port}`)
})