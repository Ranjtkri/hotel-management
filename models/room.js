const mongoose =require("mongoose");

const roomsSchema =mongoose.Schema({

    name :{
        type:String,
        required:true
    },
    maxcount:{
        type:Number,
        required :true
    },
    phonenumber :{
        type:Number,
        required : true
    },
    rentperday :{
        type :Number,
        required :true
    },
    imageurls :[],
    currentbookings : [],
    type:{
        type:string,
        required : true,
    },
    descripition :{
        type:string,
        required: true
    },
      timestamps :true,
    
})
const roomModel =mongoose.model("rooms",roomsSchema)

module.exports -roomModel