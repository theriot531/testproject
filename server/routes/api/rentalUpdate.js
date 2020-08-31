//Declaring depenencies
const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const Rentals = require("../../models/Rentals");

router.use(bodyParser.json());
//backend side of the rental update data load
router.post("/", async (req, res) => {
  const { id } = req.body;
  console.log(id);
  console.log("Rental Update Attempted...");
  const record = await Rentals.findOne({ _id: id });
  res.send(record);
  console.log(record);
  console.log("All Done...");
});
//backend side of committing the update
router.post("/rentalUpCommit", async (req, res) => {
  const { id, name, email, date, text } = req.body;
  console.log(id);
  Rentals.findByIdAndUpdate(
    id,
    {
      _id: id,
      name: name,
      email: email,
      date: date,
      text: text,
    },
    function (err, result) {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    }
  );
  console.log("All Done with Update...");
});

module.exports = router;
