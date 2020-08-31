//requiring dependencies
const mongoose = require("mongoose");
//declaring the schema for the users
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});
//using mongoose model to declare the schema
const User = mongoose.model("User", UserSchema);

module.exports = User;
