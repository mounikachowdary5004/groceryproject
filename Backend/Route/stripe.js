// import express from "express";
// import Stripe from "stripe";
// import dotenv from "dotenv";
// import bodyParser from 'body-parser';

// // import  allverifytoken  from "../middleware/authmiddleware";
// const authRouter1 = express.Router();

// dotenv.config();

// const stripe = Stripe(process.env.STRIPE_KEY);//clientobject



// authRouter1.post("/checkout", async (req, res) => {
//   // console.log(req.body.cartItems)
//   const customer = await stripe.customers.create({
   
//         metadata: {
//           userid: req.body.userid,
//           cartItems: JSON.stringify(req.body.cartItems.map(item => item.id))
//         }
//       });
//     const Grocery_items = req.body.cartItems.map((item) => {
//     return{
//       price_data: {
//         currency: "INR",
       
//         product_data: {
//           name: item.ProductName,
       
//           metadata:{
//             id:item.id
//           }
//         },
//         unit_amount: item.Price * 100,
//       },
//       quantity: item.Quantity,

//     };

    
  
//    } );
//    const session = await stripe.checkout.sessions.create({//new checkout session
//     customer:customer.id,
//     line_items: Grocery_items,
//     mode: "payment",
//     success_url: `${process.env.CLIENT_URL}/checkout-success`,
//     cancel_url: `${process.env.CLIENT_URL}/cart`,
//     // billing_address_collection: 'never', // Remove the billing address field
//     metadata: {
//       cartItems: JSON.stringify(req.body.cartItems.map(item => ({
//         ProductName: item.ProductName,
//         Price: item.Price,
       
//         TotalPrice: item.TotalPrice,
//       })))
//     }
  
//   });

//   res.json({ url: session.url });
  
 
// });
// let endpointSecret;
// // endpointSecret = 'whsec_14a5260efe3ed942d1054d28720312c5956c59d3214ecb99cd8e1df7a3ea4311';
// authRouter1.post('/stripe-webhook', express.raw({type:'application/json'}), async (req, res) => {
//   const sig = req.headers['stripe-signature'];
//     let data;
//     let eventType;
    

  
// if(endpointSecret){
//     // const rawBody = req.rawBody;
//     let event;
  
//     try {
//       const event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);
  
//       data = event.data.object;
//       eventType = event.type;
//     } catch (err) {
//       console.error(err);
//       return res.sendStatus(400);
//     }
//     data=event.data.object;
//     eventType=event.type;

// }else{
//   data=req.body.data.object;
//   eventType=req.body.type;
// }
//     if (eventType === 'checkout.session.completed') {
//       stripe.customers
//         .retrieve(data.customer)
//         .then((customer) => {
//           console.log(customer);
//           console.log('data:', data);
//         })
//         .catch((err) => console.log(err.message));
//     }
  
//     res.send().end();
//   });
  
//   export default authRouter1;




import express from "express";
import Stripe from "stripe";
import dotenv from "dotenv";
import {allverifytoken} from "../middleware/authmiddleware.js"

import {Order} from "../model/Orderschema.js"
import bodyParser from 'body-parser';

// import  allverifytoken  from "../middleware/authmiddleware";
const authRouter1 = express.Router();

dotenv.config();

const stripe = Stripe(process.env.STRIPE_KEY);//clientobject



authRouter1.post("/checkout", async (req, res) => {
  // console.log(req.body.cartItems)
  console.log(JSON.stringify(req.body.addressList))
  console.log(req.body.cartItems)
 
  const customer = await stripe.customers.create({
  
        metadata: {
          userid: req.body.userid,
          address:JSON.stringify(req.body.addressList),

          cartItems: JSON.stringify(req.body.cartItems.map(item=>({
            userid:item.userid,  
            ProductName: item.ProductName,
            Price: item.Price,
            TotalPrice: item.TotalPrice,
            quantity: item.quantity,
            
          })))
        }
      });
    const Grocery_items = req.body.cartItems.map((item) => {
    return{
      price_data: {
        currency: "INR",
       
        product_data: {
          name: item.ProductName,
       
          metadata:{
            id:item.id
          }
        },
        unit_amount: item.Price * 100,
      },
      quantity: item.Quantity,

    };

    
  
   } );
   const session = await stripe.checkout.sessions.create({//new checkout session
    customer:customer.id,
    line_items: Grocery_items,
    mode: "payment",
    success_url: `${process.env.CLIENT_URL}/Successpage`,
    cancel_url: `${process.env.CLIENT_URL}/cancel`,
    // billing_address_collection: 'never', // Remove the billing address field
    // metadata: {
    //   cartItems: JSON.stringify(req.body.cartItems.map(item => ({
    //     userid:item.userid,  ProductName: item.ProductName,
    //     Price: item.Price,
       
    //     TotalPrice: item.TotalPrice,
    //   })))
    // }
  
  });

  res.json({ url: session.url });
  
 
});
// create order
// const ordercreation = async(customer,data) =>{
  
//   const Items = JSON.parse(customer.metadata.cartItems);
//   const neworder = new Order({
//     deliverstatus: 'pending',
//     userid: customer.metadata.userid,
//     customerid: data.customer,
//     paymentIntendId: data.payment_intent,
//     products: Items,
//     Price:data.amount_Price,
//     TotalPrice:data.amount_TotalPrice,
//     shipping:data.customer_details,
//     paymentStatus:data.paymentStatus,

//   });
 // parses the JSON string stored in customer.metadata.cartItems and assigns the resulting JavaScript object
// try{
//   const savedorder= await neworder.save()
//   console.log("processed Order:",savedorder)


// }catch(err){
//   console.log(err)
// }
// }
const ordercreation = async (customer, data) => {
  const Items = JSON.parse(customer.metadata.cartItems);
 
 const shippingaddress= JSON.parse(customer.metadata.address);
  const neworder = new Order({
    deliverstatus: "pending",
    paymentStatus: "paid",
    userid: customer.metadata.userid,
    customerid:data.customer,

    paymentIntendId: data.payment_intent,
    products: Items,
    TotalPrice: data.TotalPrice, 
    shipping: shippingaddress,
  });

  try {
    const savedorder = await neworder.save();
    console.log("processed Order:", savedorder);
  } catch (err) {
    console.log(err);
  }
};






let endpointSecret;
// endpointSecret = 'whsec_14a5260efe3ed942d1054d28720312c5956c59d3214ecb99cd8e1df7a3ea4311';
authRouter1.post('/stripe-webhook', express.raw({type:'application/json'}), async (req, res) => {
  const sig = req.headers['stripe-signature'];//retrives the value of headerr from the requ
    let data;
    let eventType;
    

  
if(endpointSecret){
   
    let event;
  
    try {
       event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);//create webhook event raw reqybody 
  
  
    } catch (err) {
      console.error(err);
      return res.sendStatus(400);
    } 
    data = event.data.object;//extracts the object property from the data
    eventType = event.type;// assigns value of the type

}else{
  data=req.body.data.object;//assigns the value o to the data data property contains the relevant data for the event
  eventType=req.body.type;
}
    if (eventType === 'checkout.session.completed') {
      stripe.customers
        .retrieve(data.customer)//retrieves the customer object from Stripe 
        .then((customer) => {
      
          ordercreation(customer,data)
        })
        .catch((err) => console.log(err.message));
    }
  
    res.send().end();
  });
  
  export default authRouter1;




































































