import mongoose from "mongoose";

const doctor=new mongoose.Schema({
    "Name":String,
    "Email":String,
    "SelectDate":Date,
    "SelectDepartment":String,
    "PhoneNumber":Number,
    "AdditionalMessage":String,
});

const doctors=mongoose.model("doctors",doctor);

export default doctors;