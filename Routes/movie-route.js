const { Router } = require("express");
const multer = require("multer");

const { movieImage, moviedetails } = require("../Controller/movie-controller");
const router = Router();
router.get("/",(req,res)=>{
    res.send("welcome to home")
})
let storage = multer.diskStorage({
  destination: "images",
  filename: (req, file, cb) => {
    cb(null, Date.now() + file.originalname);
  },
});
const upload = multer({
  storage: storage,
}).single("profile");

router.post("/image", upload,movieImage);
// router.post("/image",(req,res)=>{
//   movie.create(req.body)
//   await moviedetails.create(req.body)
//    console.log(req.body);
//   res.send(req.body)
// })

router.get("/image",(req,res)=> {
    res.render("imgupload");
  });
//   databse
router.get("/moviedetails",(req,res)=>{
    console.log(req.body);
    res.send("movie details added")
    
} )

  module.exports = router;