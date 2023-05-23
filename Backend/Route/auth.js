
import express from "express"
export const authRouter = express.Router()
import  {Users}  from "../model/user.js"
import {body, validationResult} from "express-validator"
import bcrypt from "bcrypt"
import  jwt  from "jsonwebtoken"
import {allverifytoken} from "../middleware/authmiddleware.js"
import {Address} from "../model/address.js"
import { Product } from "../model/productschema.js"
import stripe from "stripe";





// authRouter.get("/",(req,res)=>{
//     res.send(" auth link is active")
// })

//user entry in the database regsitration 
authRouter.post("/createuser", 

body('firstName',"Enter a proper first name").isLength({min:3}),
body('lastName',"Enter a proper lastname").isLength({min:3}),
body('email',"enter a proper email address").isEmail(),
body('password',"enter password of length atleast 5").isLength({min:5}),


    async (req, res) => {
let success = false 
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        let user = await Users.findOne({ email: req.body.email });
        if (user) {
          return res.status(400).json({ error: "Enter a unique Email Id" });
        }

        const securepassword = await bcrypt.hash(req.body.password, 10)
        const userentry = await Users.create(
            {

                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                password: securepassword
            }
        );
        console.log(userentry)

        let data = {
            id: userentry._id
        }
        let token = jwt.sign(data, process.env.JWT_RANDON_STAR);
        success = true
        res.status(200).json({success,'token':token})
       

    })



// login entry
authRouter.post("/login",
    body('email', "enter valid email address").isEmail(),
    body('password', "enter password").exists(),

    async (req, res) => {
        let success = false 
        const errors = validationResult(req);
        if (!errors.isEmpty()) {           
             return res.status(400).json({ errors: errors.array() });
        }

        try {
            // checking weather user exists or not in db
            const user = await Users.findOne({ email: req.body.email })
            if (!user) {
                return res.status(400).send({ errors: "user entry not available" })
            }
            // cheching the password reaceved with the password stored in database
            const isvalid = await bcrypt.compare(req.body.password, user.password)
            console.log(isvalid)
            if (!isvalid) {
                return res.status(400).send({ error: "Credential do not match" })
            }
            let data = {
                id: user._id
            }

            let token = jwt.sign(data, process.env.JWT_RANDON_STAR, {expiresIn:'1h'});
            success= true 
            return res.json({ success,ticket: token })   

        }
        catch (errors) {
            return res.status(400).send({ errors: "internal server error" })
        }
    }

)
// get user details


authRouter.get("/getuser",
allverifytoken,


async(req, res) => {

try{
    const user = await Users.findOne({_id: req.id },{_id:1,firstName:1,lastName:1,email:1,})
    if (!user) {
        return res.status(400).send({ errors: "authontication wrong" })
    }
    res.status(200).send(user)

}
catch(errors)
{
    res.status(400).send({errors:"some internal server error"})
} 
});






// get useraddress details
authRouter.get('/get_address', allverifytoken, async (req, res) => {
    try {
      const userAddresses = await Address.find({ userId: req.id });
      if (!userAddresses || userAddresses.length === 0) {
        return res.status(404).json({ message: 'User addresses not found' });
      }
      res.status(200).json({ addresses: userAddresses });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server Error' });
    }
  });






  
// address entry
    authRouter.post('/addaddress', allverifytoken, async (req, res) => {
    try {
      // Check if all required fields are present
       const { houseNumber, street, city, state, country,zipCode} = req.body;
      if (!houseNumber ||  !street || !city || !state || !country || !zipCode) {
        return res.status(400).json({ message: 'All fields are required' });
      }
  
      const userAddress = new Address({
        userId: req.id,
        houseNumber: houseNumber,
        // Address:Address,
        street: street,
        city: city,
        state: state,
        country: country,
        zipCode:zipCode
        
      });
  
      const existingAddress = await Address.findOne({
        userId: req.id,
        houseNumber: req.body.houseNumber,
        // Address:req.body.Address,
        street: req.body.street,
        city: req.body.city,
        state: req.body.state,
        country: req.body.country,
        zipCode:req.body.zipCode
     
      });
    
      
      if (existingAddress) {
        return res.status(400).json({ message: 'Address already exists' });
      }
      
      const savedAddress = await userAddress.save();
      res.status(201).json({ address: savedAddress });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server Error' });
    }
  });

  //edit address
  authRouter.put('/editaddress/:addressid', allverifytoken, async (req, res) => {
    try {
      // Check if all required fields are present
      const { houseNumber, street, city, state, country, zipCode } = req.body;
      if (!houseNumber || !street || !city || !state || !country || !zipCode) {
        return res.status(400).json({ message: 'All fields are required' });
      }
  
      const updatedAddress = await Address.findOneAndUpdate(
        { _id: req.params.addressid, userId: req.id }, // Find the address to update by ID and user ID
        {
          houseNumber: houseNumber,
          street: street,
          city: city,
          state: state,
          country: country,
          zipCode: zipCode,
        },
        { new: true } // Return the updated address
      );
  
      if (!updatedAddress) {
        return res.status(404).json({ message: 'Address not found' });
      }
  
      res.status(200).json({ address: updatedAddress });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server Error' });
    }
  });
  //delete address 
  authRouter.delete('/deleteaddress/:addressid', allverifytoken, async (req, res) => {
    try {
      const deletedAddress = await Address.findOneAndDelete(
        { _id: req.params.addressid, userId: req.id } // Find the address to delete by ID and user ID
      );
  
      if (!deletedAddress) {
        return res.status(404).json({ message: 'Address not found' });
      }
  
      res.status(200).json({ message: 'Address deleted successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server Error' });
    }
  });
  

  

//addproducts
authRouter.post("/addproduct", 
    async (req, res) => {
try{


        const userentry = await Product.create({
          ProductName: req.body.ProductName,
          Image: req.body.Image,
          category: req.body.category,
          Price: req.body.Price,
          Quantity:req.body.Quantity,
        });
        res.send("added succesfully ")
      
           
      }
      catch(error){
        console.log(error);
      }
    })
//get products
// authRouter.get('/getproduct',//uqpa
// async (req, res) => {
//   try{
//     const userentry= await Product.find({})
//     res.send(userentry)
//   }
//   catch(error) {
//     console.log(error);
//   }
// })
authRouter.get('/getproduct',
  async (req, res) => {
    try {
      const { searchQuery } = req.query;//extracting searchqueryfrom query
      let products = await Product.find({});//all the products from database 

      if (searchQuery) {
        const regex = new RegExp(searchQuery, 'i');
        products = products.filter(product => regex.test(product.ProductName));
      }

      res.send(products);
    } catch (error) {
      console.log(error);
      res.status(500).send('Internal server error');
    }
});

    





// import paypal from 'paypal-rest-sdk';


// paypal.configure({
//   mode: 'sandbox', // or 'live' if you're using production credentials
//   client_id: 'ASHDdYbg-IIU5jhVJwa3XPY2TFT3ChfmNoxnrfCr4kCPQN8dg8t4ZkfZlSWA80X20EuPNs_Z7V35_yZ7',
//   client_secret: 'EO-jepRvPFzbMQo3ToACAVCV3_VCsiQlunNzEpD67WEvpLEVWKw5YAUHhuZjsXpjphVcTlRsSDhaCS-b',
// });


// authRouter.post("/create-payment", 
// async (req, res) => {
//   console.log(req.body.cart)
//   if (!req.body.cart) {
//     return res.status(400).json({ message: 'Shopping cart not found' });
//   }

//   // Extract items from shopping cart and calculate total amount
//   const cartItems = req.body.cart;
//   let totalAmount = 0;

//   const items = req.body.cartItems.cartItems.map((item) => {
//     return {
//       name: item.name,
//       price: item.price,
//       currency: 'USD',
//       quantity: item.quantity,
//     }
//   });

//   // Calculate the total amount
//   const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

//   // Create payment JSON object
//   const payment = {
//     intent: 'sale',
//     payer: {
//       payment_method: 'paypal',
//     },
//     redirect_urls: {
//       return_url: `${process.env.CLIENT_URL}/checkout-success`,
//       cancel_url: `${process.env.CLIENT_URL}/cart`,
//     },
//     transactions: [{
//       item_list: {
//         items,
//       },
//       amount: {
//         total: total.toFixed(2),
//         currency: 'USD',
//       },
//       description: 'Payment description',
//     }],
//   };

//   try {
//     // Create payment on PayPal
//     const createPayment = await new Promise((resolve, reject) => {
//       paypal.payment.create(payment, (err, payment) => {
//         if (err) {
//           reject(err);
//         } else {
//           resolve(payment);
//         }
//       });
//     });

//     // Redirect user to PayPal for approval
//     res.json({ url: createPayment.links.find(link => link.rel === 'approval_url').href, total });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'An error occurred while creating the PayPal payment' });
//   }
// });



// import dotenv from "dotenv";
// // import stripe from "stripe";

// dotenv.config();

// const stripe = new stripe ('stripe')(process.env.STRIPE_KEY, {
//   apiVersion: '2020-08-27',
// });
 

// const authRouter1 = express.Router();

// authRouter1.post("/create-checkout-session", async (req, res) => {
//   const session = await stripe.checkout.sessions.create({
//     cartitems: [
//       {
//         price_data: {
//           currency: "usd",
//           product_data: {
//             name: "T-shirt",
//           },
//           unit_amount: 2000,
//         },
//         quantity: 1,
//       },
//     ],
//     mode: "payment",
//     success_url: `${process.env.CLIENT_URL}/checkout-success`,
//     cancel_url: `${process.env.CLIENT_URL}/cart`,
//   });

//   res.json({ url: session.url });
// });
