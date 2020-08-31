//requiring dependencies
const mongoose = require("mongoose");
//declaring the schema for the rentals
const RentalsSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  date: {
    type: Date,
  },
  text: {
    type: String,
  },
});
//using mongoose model to declare the schema
const Rentals = mongoose.model("Rentals", RentalsSchema);

module.exports = Rentals;
