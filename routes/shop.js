const express = require("express");
const router = express.Router();
const {
  productController,
  findProducts,
  addToCart,
  displayOneProduct
} = require("../controllers").Shop;

router.get("/shop", productController);
router.get("/find/:id", displayOneProduct);
router.get("/cart/:id", findProducts);

router.get("/add-to-cart/:userId/:productId", addToCart);

module.exports = router;
