import express from "express"
import applys from "../model/applydoctorschema.js";

const router=express.Router();
router.post("/apply",async(req,res)=>{
    try{
      const newDoctor=new applys({...req.body, Status:'pending'});
      await newDoctor.save();
      res.status(201).json({ message: "doctor applied successfully" });
    }
    catch(error){
        res.status(500).json({ error: "An error occurred while applying for doctor" });

    }
})
export default router;
