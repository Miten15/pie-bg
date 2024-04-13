const mongoose = require("mongoose");

const TemplesSchema = new mongoose.Schema({
    title:{type:String,require:true},
    img:{type:String,require:true},
    des: {type:String,require:true},
    contact: {type:String,require:true},
    address: {type:String,require:true},
    city: {type:String,require:true},
    country: {type:String,require:true},
    pincode: {type:String,require:true},

    
},{timestamps:true});

module.exports = mongoose.model("Temples",TemplesSchema);