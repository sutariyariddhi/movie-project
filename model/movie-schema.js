const mongoose=require("mongoose")
let movieschema=new mongoose.Schema({
    name:String,
    rating:Number,
    charactorname:String,
    discription:String,
    relesedate:Number,
    language:String,
    image:String
})
const movie=mongoose.model("movie",movieschema)
module.exports=movie