import mongoose, { model } from "mongoose";
const { Schema} = mongoose;

const UserSchema = new Schema({
    firstName: {
        type:String,
        required:true
    },
    lastName: {
        type:String,
        required:true
    },

    email: {
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:new Date()
    }
});

 export const Users= mongoose.model('user',UserSchema);
