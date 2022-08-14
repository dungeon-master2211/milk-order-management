const express = require('express')
const { getAllOrders, addOrder, updateOrder, updateStatus, deleteOrder, checkCapacity } = require('../controller/orderController')
const router = express.Router()
/**
 * @swagger
 * /getOrders:
 *  get:
 *      description: Get all Orders
 *      responses : 
 *          200:
 *              description: Success
 */

router.get('/getOrders',getAllOrders)

/**
 * @swagger
 * /add:
 *  post:
 *      description: Add a Order
 *      parameters:
 *          -name: Name
 *           required:true
 *          
 *  
 *      responses : 
 *          201:
 *              description: Created
 *          400:
 *              description: Order already exist
 *          
 */
router.post('/add',addOrder)
/**
 * @swagger
 * /update/{id}:
 *  patch:
 *      description: Update a Order
 *      parameters:
 *          -name: Name
 *           required:true
 *          
 *  
 *      responses : 
 *          200:
 *              description: Updated
 *          400:
 *              description: Any Error
 *          
 */
router.patch('/update/:id',updateOrder)
/**
 * @swagger
 * /updateStatus/{id}:
 *  patch:
 *      description: Update a Order Status
 *   
 *      responses : 
 *          200:
 *              description: Updated
 *          400:
 *              description: Any Error
 *          
 */
router.patch('/updateStatus/:id',updateStatus)
/**
 * @swagger
 * /delete/{id}:
 *  get:
 *      description: DELETE a Order
 *   
 *      responses : 
 *          200:
 *              description: Updated
 *          400:
 *              description: Any Error
 *          
 */
router.get('/delete/:id',deleteOrder)
/**
 * @swagger
 * /checkCapacity/{date}:
 *  get:
 *      description: Check Capacity left for given date(D-M-Y)
 *   
 *      responses : 
 *          200:
 *              description: Updated
 *          400:
 *              description: Any Error
 *          
 */
router.get('/checkCapacity/:date',checkCapacity)

module.exports = router