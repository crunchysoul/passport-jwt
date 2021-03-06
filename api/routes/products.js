const express = require("express");
const Product = require("../models/Product.js");
const authMiddleware = require("../middleware/auth.js");

const router = new express.Router();

// index
router.get("/products", authMiddleware.requireJWT, (req, res) => {
  Product.find()
    .then(products => {
      res.json(products);
    })
    .catch(error => {
      res.json({ error: error.message });
    });
});

// show
router.get("/products/:id", (req, res) => {
  Product.findOne({ _id: req.params.id })
    .then(product => {
      res.json(product);
    })
    .catch(error => {
      res.json({ error: error.message });
    });
});

module.exports = router;
