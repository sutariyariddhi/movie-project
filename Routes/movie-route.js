const { Router } = require("express");
const multer = require("multer");

const { movieImage } = require("../controller/movie-controller");
const router=Router()
router.get("/",(req,res)=>{
    res.send("welcome to home")
})
let storage=multer.diskStorage({
    destination:"images",
    filename:(req,file,cb)=>{

        cb(null,date.now()+ file.originalname);
    },
})
const upload=multer({
    storage:storage,
}).single("profile")

router.post("/image",upload,movieImage);

router.get("/image",(req,res)=>{
    res.render("imgupload");
    // console.log("fgg");
});
router.get('/moviedetails',(req,res)=>{
    console.log(req.body);
    res.send("movie details")
})

module.exports=router