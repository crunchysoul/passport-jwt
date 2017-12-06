const Product = require("./Product.js");

Product.deleteMany().then(() => {
  console.log("Delete products");
  // process.exit();
});
