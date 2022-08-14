const express = require('express')
const swaggerUi = require('swagger-ui-express')
const swaggerJsDoc = require('swagger-jsdoc')


require('dotenv').config({path:"./config.env"})
const orderRouter = require('./router/orderRouter')
const swaggerJSDoc = require('swagger-jsdoc')
require('./db/connection')

const port = process.env.PORT || 8000



const app = express()
app.use(express.json())
app.use(orderRouter)

const swaggerOptions = {
    swaggerDefinition :{
        info:{
            'title':'Milk Order Management',
            'version':'0.1'
        }
    },
    apis:['./router/orderRouter.js']
}

const swaggerDocs = swaggerJSDoc(swaggerOptions)

app.use('/api-doc',swaggerUi.serve,swaggerUi.setup(swaggerDocs))
app.listen(port,()=>{
    console.log(`listening on ${port}`)
})