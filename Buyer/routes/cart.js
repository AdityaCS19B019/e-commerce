const express = require('express');
const router = express.Router();

const { getCart, UpdateQuantity, deleteProduct } = require('../controllers/cart')

router.route("/getcart").post(getCart)
router.route("/updatequantity").post(UpdateQuantity)
router.route("/deleteproduct").post(deleteProduct)


module.exports = router;