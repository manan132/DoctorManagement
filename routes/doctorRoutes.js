import express from "express"
import doctors from "../model/doctorschema.js";

const router=express.Router();
router.post("/add",async(req,res)=>{
    try{
      const newdoctor=new doctors(req.body);
      await newdoctor.save();
      res.status(201).json({ message: "doctor added successfully" });
    }
    catch(error){
        res.status(500).json({ error: "An error occurred" });

    }
})
export default router;
 