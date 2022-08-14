const Orders = require('../models/orderModel')
exports.getAllOrders = async(req,res,next)=>{
    try {
        const orders = await Orders.find()
        return res.status(200).send({orders})

    } catch (error) {
        return res.status(500).send({"error":error})
    }
}

exports.addOrder = async(req,res,next)=>{
    try {
        const body = req.body
        const checkIfExist = await Orders.findOne({name:body.name})
        if(checkIfExist){
            return res.status(400).send({"error":"User already exist."})
        }
        const newOrder = await new Orders(body)
        const saveOrder = await newOrder.save()
        return res.status(201).send({'order':saveOrder})

    } catch (error) {
        return res.status(500).send({"error":error})
    }
}

exports.updateOrder = async(req,res,next)=>{
    try {
        const id = req.params.id
        if(!id){
            return res.status(400).send({"error":"Provide id to update!"})
        }
        const findUser = await Orders.findById({_id:id})
        if(!findUser){
            return res.status(400).send({"error":"User not exist!"})
        }
        const body=req.body
        if(Object.keys(body).length === 0){
            return res.status(400).send({"error":"Provide body"})
        }
        const updatedOrder = await Orders.findByIdAndUpdate({_id:id},body,{new:true})
        
        return res.status(200).send(updatedOrder)
    } catch (error) {
        if(error.name==='CastError'){
            return res.status(400).send({"error":"Id not found"}) 
        }
        return res.status(500).send({"error":error})
    }
}

exports.updateStatus = async(req,res,next)=>{
    try {
        const id = req.params.id
        if(!id){
            return res.status(400).send({"error":"Provide id to update!"})
        }
        const findUser = await Orders.findById({_id:id})
        if(!findUser){
            return res.status(400).send({"error":"User not exist!"})
        }
        const body=req.body
        if(Object.keys(body).length === 0){
            return res.status(400).send({"error":"Provide body"})
        }
        const updatedOrder = await Orders.findByIdAndUpdate({_id:id},body,{new:true})
        
        return res.status(200).send(updatedOrder)
    } catch (error) {
        if(error.name==='CastError'){
            return res.status(400).send({"error":"Id not found"}) 
        }
        return res.status(500).send({"error":error})
    }
}

exports.deleteOrder = async(req,res,next)=>{
    try {
        const id = req.params.id
        if(!id){
            return res.status(400).send({"error":"Provide id to update!"})
        }
        const findUser = await Orders.findById({_id:id})
        if(!findUser){
            return res.status(400).send({"error":"User not exist!"})
        }
        const deletedOrder = await Orders.findByIdAndDelete({_id:id})
        
        return res.status(200).send(deletedOrder)
    } catch (error) {
        if(error.name==='CastError'){
            return res.status(400).send({"error":"Id not found"}) 
        }
        return res.status(500).send({"error":error})
    }
}

exports.checkCapacity = async(req,res,next)=>{
    try {
        const CAPACITY_FOR_DAY = 1000
        const date = req.params.date
        console.log(date)
        const allOrderOnDate = await Orders.find({date:date})
        if(allOrderOnDate.length === 0){
            return res.status(400).send({"error":"No orders on given date","leftMilk":CAPACITY_FOR_DAY})
        }
        let allQuantity=0
        allOrderOnDate.forEach(item=>{
            allQuantity+=item.quantity
        })
        const leftMilk = CAPACITY_FOR_DAY - allQuantity
        return res.status(200).send({"leftMilk":leftMilk})
    } catch (error) {
        return res.status(500).send({"error":error})
    }
}