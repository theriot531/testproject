//Declaring depenencies
const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const Rentals = require("../../models/Rentals");

router.use(bodyParser.json());
//backend side of cancelling a rental
router.post("/", async (req, res) => {
  const { id } = req.body;
  console.log(id);
  console.log("Rental Delete Attempted...");
  Rentals.findByIdAndDelete(id, function (err) {
    if (err) console.log(err);
    console.log("Successful Deletion...");
  });
  console.log("All Done...");
});

module.exports = router;
