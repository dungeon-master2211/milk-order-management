const express = require('express')
const { getAllOrders, addOrder, updateOrder, updateStatus, deleteOrder, checkCapacity } = require('../controller/orderController')
const router = express.Router()

router.get('/getOrders',getAllOrders)
router.post('/add',addOrder)
router.patch('/update/:id',updateOrder)
router.patch('/updateStatus/:id',updateStatus)
router.get('/delete/:id',deleteOrder)
router.get('/checkCapacity/:date',checkCapacity)

module.exports = router