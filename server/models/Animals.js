//requiring dependencies
const mongoose = require("mongoose");
//declaring the schema for the animals
const AnimalsSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  animal_common_name: {
    type: String,
  },
  scientific_name: {
    type: String,
  },
  weight: {
    type: Number,
  },
  size: {
    type: String,
  },
});
//using mongoose model to declare the schema
const Animals = mongoose.model("Animals", AnimalsSchema);

module.exports = Animals;
