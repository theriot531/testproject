//Declaring depenencies
const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const Rentals = require("../../models/Rentals");

router.use(bodyParser.json());
//backend side of the my rentals page
router.post("/", async (req, res) => {
  const { email } = req.body;
  console.log(email);
  console.log("Animal Get Attempted");
  const rentals = await Rentals.find({ email: email });
  console.log("Find complete...");
  res.send(rentals);
  console.log(rentals);
  console.log("All done...");
});

module.exports = router;
