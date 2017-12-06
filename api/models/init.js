const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

mongoose
  .connect(
    "mongodb://localhost/amazon-clone-api",
    { useMongoClient: true },
    error => {
      console.error();
    }
  )
  .then(() => {
    console.log("Successfully connected to database");
  })
  .catch(error => {
    console.error("Error connecting to MongoDB database", error);
  });

module.exports = mongoose;
