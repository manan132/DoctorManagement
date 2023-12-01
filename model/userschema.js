import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    name:String,
    email:String,
    password:String,
},{
    timestamps:true
});

const users=mongoose.model("users",userSchema);

export default users;