import  express  from "express";
import ConnectToMongoDBsserver from "./database.js"
// import {Users}  from "./model/user.js";
import { authRouter } from "./Route/auth.js";
import cors from "cors";
import dotenv from "dotenv";
import authRouter1 from "./Route/stripe.js";
import { orderRouter1 } from "./Route/orderpage.js";

// import paymentRouter from "./Route/payment.js";
dotenv.config();
const app = express()
app.use(cors())
const port = process.env.PORT;

app.use(express.json())

app.use('/api/auth',authRouter)
app.use('/api/stripe',authRouter1);
app.use('/api/orderpage',orderRouter1)
// app.use('/api/stripe', paymentRouter);

// app.get('/api/createuser', (req,res)=> {
    
//     let doc1 = new usermodel(req.body)
    // instead of creating for every single we can use req.body
    // doc1.name = req.body.name
    // doc1.email= req.body.email
    // doc1.password=req.body.password
    // doc1.save()
    // res.send("successfully updated the document in the user collection of database")
    // })

ConnectToMongoDBsserver()
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

