const express = require("express");
const router = express.Router();
const {
  productController,
  findProducts,
  displayOneProduct,
  checkOut,
  finalCheckout,
  dogProductController,
  displayOneDogProduct,
  updateStatus
} = require("../controllers").Shop;

router.get("/shop", productController);
router.get("/dog-shop", dogProductController);
router.get("/find/:id", displayOneProduct);
router.get("/find-dog/:id", displayOneDogProduct);
router.post("/cart/:id", findProducts);

// router.get("/add-to-cart/:id", addToCart);

router.post("/checkout", checkOut);
router.get("/checkout/:id", finalCheckout);
router.put("/checkout/:id", updateStatus)

module.exports = router;
