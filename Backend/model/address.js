
import mongoose, { model } from "mongoose";
const {Schema} = mongoose;

const AddressSchema = new Schema({
    userId: {type: String, requires: true},
    houseNumber: {type: Number, required:true},
   
    street: {type:String, required:true},
    city: {type:String, required:true},
    state: {type:String, required:true},
    country: {type:String, required:true},
    zipCode: {type: Number, required:true}
})

export  const Address = mongoose.model('address', AddressSchema)
