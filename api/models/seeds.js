const Product = require("./Product.js");
const drop = require("./drop.js");

drop;

Product.create([
  {
    brandName: "Black Diamond",
    modelName: "Mens Momentum",
    category: "Climbing Shoes",
    color: "Ash"
  },
  {
    brandName: "Black Diamond",
    modelName: "Womens Momentum",
    category: "Climbing Shoes",
    color: "Merlot"
  },
  {
    brandName: "Evolv",
    modelName: "Defy 2",
    category: "Climbing Shoes",
    color: "Black/Sulphur"
  },
  {
    brandName: "Scarpa",
    modelName: "Force V Mens",
    category: "Climbing Shoes",
    color: "Mangrove/Papaya"
  },
  {
    brandName: "Scarpa",
    modelName: "Velocity L Womens",
    category: "Climbing Shoes",
    color: "Icefall/Mandarin"
  }
])
  .then(products => {
    console.log("Create products:", products);
    process.exit();
  })
  .catch(error => {
    console.error(error);
    process.exit();
  });
