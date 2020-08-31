//Exporting the Url to connect to the database and the authentication for json token
module.exports = {
  MongoURI: "mongodb://localhost:27017/animalrentalexpress",
  authentication: {
    jwtSecret: process.env.JWT_SECRET || "secret",
  },
};
