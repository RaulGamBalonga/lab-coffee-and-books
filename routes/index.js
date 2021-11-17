// const router = require("express").Router();

// /* GET home page */
// router.get("/", (req, res, next) => {
//   res.render("index");
// });

// module.exports = router;
module.exports = app => {
  app.use("/",require("./base.routes"))
  app.use("/places",require("./place.routes"))
}