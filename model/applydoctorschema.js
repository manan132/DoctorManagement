import mongoose from "mongoose";

const doctorSchema=new mongoose.Schema({
    "userId":String,
    "firstName":String,
    "lastName":String,
    "email":String,
    "website":String,
    "address":String,
    "phoneNumber":Number,
    "specialization":String,
    "experience":String,
    "feePerCunsaltation":Number,
    "Status":String,
    "timings":Object
},
{timestamps:true}
);

const applys=mongoose.model("applys",doctorSchema);

export default applys;