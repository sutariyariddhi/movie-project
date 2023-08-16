const getdir = require("../components");
const movie = require("../model/movie-schema");
const moviedata = async (req, res) => {
  try {
    console.log(req.body);
    await moviedetails.create(req.body);
    res.send("movie details added");
  } catch (error) {
    res.send(error.message);
  }
}
  const movieImage = async (req, res) => {
    console.log(req.file);
    let path = getdir();
    await movie.findByIdAndUpdate(req.params.id, {
      image: path + "/" + req.file.path,
    });
    res.send("image added successfully");

    
    let images=[]
    for (let i = 0; i < req.files.length; i++) {
      images.push(path + "/" + req.files[i].path);
    }
  }
// dtabase
const moviedetails = async (req, res) => {
  let data = await movie.find();
  res.send(data);
  console.log("addesd");
};
module.exports = { moviedata, movieImage ,moviedetails}
