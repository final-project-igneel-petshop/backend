const express = require("express");
const router = express.Router();
const {
  productController,
  findProducts,
  addToCart,
  displayOneProduct,
  checkOut,
  finalCheckout
} = require("../controllers").Shop;

router.get("/shop", productController);
router.get("/find/:id", displayOneProduct);
router.post("/cart/:id", findProducts);

router.get("/add-to-cart/:id", addToCart);

router.post("/checkout", checkOut)
router.get('/checkout/:id', finalCheckout)

module.exports = router;
