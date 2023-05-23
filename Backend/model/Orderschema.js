import mongoose, { model } from "mongoose";
const {Schema} = mongoose;
const orderSchema = new Schema(
  {
    userid: { type: String,required: true},
    customerid:{type:String},
    paymentIntendId: { type: String },
    products: [
      {
        id: { type: String },
        ProductName: { type: String },
        Quantity: { type: Number },
        Price: { type: Number },
     
      },
    ],
    TotalPrice: { type: Number},
    shipping: { type: Object, required: true },
    deliverstatus: { type: String, default: "pending" },
    paymentStatus: { type: String, required: true },

  },
  { timestamps: true }
);


export const Order= mongoose.model("Order", orderSchema);
