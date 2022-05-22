const express = require('express');
const router = express.Router();

const {getProducts,getAddress,placeOrder ,addToCart,getCart, UpdateQuantity, deleteProduct } = require('../controllers/cart')

router.route("/getcart").post(getCart)
router.route("/updatequantity").post(UpdateQuantity)
router.route("/deleteproduct").post(deleteProduct)
router.route("/addToCart").post(addToCart)
router.route("/placeorder").post(placeOrder)
router.route("/getAddress").post(getAddress)
router.route("/getProducts").post(getProducts)

module.exports = router;