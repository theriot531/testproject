//Dependencies requires
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

//Route Requires
const { notFound, errorHandler } = require("./middlewares");
const user = require("./routes/api/user");
const animals = require("./routes/api/animals");
const animalRental = require("./routes/api/animalRental");
const rentalCancellation = require("./routes/api/rentalCancellation");
const activeRental = require("./routes/api/activeRental");
const rentalUpdate = require("./routes/api/rentalUpdate");
const path = require("path");

//Port or Deploy Location
const port = process.env.PORT || 5000;

//Initiating the app
const app = express();

//configuring the app
require("./config/mongooseConnect");
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static(path.join(__dirname, "public")));

//Root Page that will not be used
app.get("/", (req, res) => {
  res.json({
    message: "Do not know how you got here but hi",
  });
});

//Routes for the app
app.use("/user", user);
app.use("/animals", animals);
app.use("/animalRental", animalRental);
app.use("/rentals", activeRental);
app.use("/cancelRental", rentalCancellation);
app.use("/rentalup", rentalUpdate);
app.use("/rentalup/rentalUpCommit", rentalUpdate);

// DB Config
const db = require("./config/mongooseConnect").MongoURI;
console.log(`Your database is running on ${db}...`);

//Inserting documents
require("./resources/inserts").Insert;

// Connect to MongoDB
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

//Error Routes Go Here
app.use(notFound);
app.use(errorHandler);

//Starting up the app
app.listen(port, function (error) {
  if (error) {
    throw error;
  }
  console.log("NODE       ¯_(ツ)_/¯        VUE");
  console.log(`Running on port ${port}`);
  console.log(`http://localhost:${port}`);
  console.log("The Block is Hot...");
});
