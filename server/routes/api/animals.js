//Declaring depenencies
const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const Animals = require("../../models/Animals");

router.use(bodyParser.json());
//backend side of loading the animals data
router.get("/", async (req, res) => {
  console.log("Animal Get Attempted");
  const animals = await Animals.find();
  console.log("find complete...");
  res.send(animals);
  console.log(animals);
  console.log("all done...");
});

module.exports = router;
