const express = require("express");
const router = express.Router();
const { productController, findProducts, addToCart } = require("../controllers").Shop;
const middlewares = require('../middlewares/auth')

router.get("/shop", productController);

router.get("/cart/:id", findProducts);

router.get('/add-to-cart/:userId/:productId', addToCart)

module.exports = router
