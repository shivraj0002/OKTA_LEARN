const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  // res.render("index");
  const { userContext } = req;
  res.render("index", { userContext });
});

module.exports = router;
