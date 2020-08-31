//Declaring depenencies
const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const User = require("../../models/User");
const config = require("../../config/mongooseConnect");
const jwt = require("jsonwebtoken");

router.use(bodyParser.json());

//web token function
function jwtSignUser(user) {
  const ONE_WEEK = (60 * 60 * 24) & 7;
  return jwt.sign(user, config.authentication.jwtSecret, {
    expiresIn: ONE_WEEK,
  });
}
//backend functions for the register page
router.post("/register", (req, res) => {
  const { name, email, password, password2 } = req.body;
  let errors = [];
  console.log("We got this far...");
  if (!name || !email || !password || !password2) {
    errors.push({ msg: "Please enter all fields" });
  }

  if (password != password2) {
    errors.push({ msg: "Passwords do not match" });
  }

  if (password.length < 6) {
    errors.push({ msg: "Password must be at least 6 characters" });
  }

  if (errors.length > 0) {
    console.log("There are errors...");
  } else {
    User.findOne({ email: email }).then((user) => {
      if (user) {
        console.log("Email already exists");
        res.json("Email already exists");
      } else {
        const newUser = new User({
          name,
          email,
          password,
        });
        console.log("We got this far...");
        newUser.save().then(function (err, result) {
          console.log("User Created");
          res.json("User Created");
        });
      }
    });
  }
});
//backend side of the login page
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({
    email: email,
  });
  console.log(email);
  if (!user) {
    console.log("No such user...");
    return res.status(403).send({
      error: "The login information was incorrect",
    });
  }

  const isPasswordValid = password === user.password;
  if (!isPasswordValid) {
    console.log("Password was invalid...");
    return res.status(403).json("Error");
  }

  const userJson = user.toJSON();
  const webToken = jwtSignUser(userJson);
  res.send({
    user: userJson,
    token: webToken,
  });
  console.log(userJson);
  console.log(webToken);
});

module.exports = router;
