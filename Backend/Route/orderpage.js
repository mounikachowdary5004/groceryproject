import express from "express";
import Stripe from "stripe";
import {Order} from "../model/Orderschema.js"
import {allverifytoken} from "../middleware/authmiddleware.js"

export const orderRouter1 = express.Router();


orderRouter1.get('/getorders',  allverifytoken,
async (req, res) => {
  try{
    const orderslist= await Order.find({userid:req.id})
    res.send(orderslist)
    console.log(orderslist)
  }
  catch(error) {
    console.log(error);
  }
})
orderRouter1.put('/cancelOrders/:orderId', allverifytoken, async (req, res) => {
  try {
    const orderId = req.params.orderId;
    const userId = req.id;

    // Find the order by orderId and userId
    const updatedOrder = await Order.findOneAndUpdate(
      { _id: orderId, userid: userId },
      {
        status: 'Cancelled',
        payment: {
          success: false
        }
      },
      { new: true }
    );

    if (!updatedOrder) {
      return res.status(404).json({ message: 'Order not found' });
    }

    res.json({ success: true, message: 'Order Cancelled' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});
