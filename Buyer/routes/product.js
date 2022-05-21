const express = require('express');
const router = express.Router();

const { product } = require('../controllers/product')

router.route("/:productID").post(product)


module.exports = router;