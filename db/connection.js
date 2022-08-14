const mongoose = require('mongoose')
const uri = process.env.DB_URI
mongoose.connect(uri,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log('database connected')
}).catch((e)=>{
    console.log(e)
})