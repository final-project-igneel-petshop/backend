const express = require("express");
const router = express.Router();
const { productController, findProducts, addToCart } = require("../controllers/shop");

router.get("/shop", productController);

router.get("/cart", findProducts);

router.get('/add-to-cart', addToCart)
