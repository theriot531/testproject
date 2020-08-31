//Declaring depenencies
const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const Rentals = require("../../models/Rentals");

router.use(bodyParser.json());
//backend side of the rental request page
router.post("/", async (req, res) => {
  const { name, email, date, text } = req.body;
  const newRental = new Rentals({
    name,
    email,
    date,
    text,
  });
  newRental.save().then(function (err, results) {
    console.log(newRental);
    console.log("Rental Created...");
    res.json("Rental Created...");
  });
});

module.exports = router;
