const db = require('mongoose')

const orderSchema = new db.Schema({
    name:{
        type:"String",
        require:[true,'Name is required'],
        unique:true
    },
    date:{
        type:String,
        default: Date.now
    },
    quantity:{
        type:Number,
        required:[true,'Quantity is required']
    },
    orderStatus:{
        type:String,
        default:'placed'
    }
})

orderSchema.pre('save',async function(next){
    const cdate = await new Date(Date.now())
    
    const dt = cdate.getDate()
    const month = cdate.getMonth()+1
    const year = cdate.getFullYear()
    const newDate = dt+'-'+month+'-'+year
    
    this.date = newDate
    
    next()
})

const orderModel = db.model('Milkorder',orderSchema)

module.exports = orderModel
