const express = require("express");
const router = express.Router();
const productController = require("../contollers/productController");
router.post("/createproduct", productController.createProduct);
module.exports = router;
