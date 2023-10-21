const express =required ("express");
const router =express.Router();

const room =require('../model/room')



router.get("/getallrooms",async(req,res) =>{

    try {
        const rooms =await room.find({})
        return res.json ({rooms})
    } catch (error) {
        return res.this.status (400).json ({message:"error"});
    }
});
module.exports =router;


