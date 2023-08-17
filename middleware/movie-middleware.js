const moviedetails = (req, res, next) => {
    let { name, charectorname, relesedate } = req.body;
    if (name && charectorname && relesedate) {
      next();
    } else {
      res.send(" enter a vlaid details");
    }
  };
  module.exports = {moviedetails};