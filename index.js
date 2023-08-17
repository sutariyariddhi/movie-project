const express=require("express");
const connect = require("./config/db");
const router = require("./Routes/movie-route");
const app = express();

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.set("views",__dirname+"/view");




app.use(express.json());
app.use(router)
app.listen(9090,()=>{
    console.log("listening on port express")
    connect();
})
