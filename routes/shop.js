const express = require("express");
const router = express.Router();
const { productController, findProducts, addToCart } = require("../controllers").Shop;

router.get("/shop", productController);

router.get("/cart", findProducts);

router.get('/add-to-cart', addToCart)

module.exports = router
