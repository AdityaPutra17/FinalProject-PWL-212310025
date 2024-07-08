const express = require("express");
const router = express.Router();
const productController = require("../controllers/ProductController");

router.get("/index", productController.index);
router.get("/", productController.getAll);
router.get("/:id", productController.getByID);
router.post("/create", productController.createData);
module.exports = router;
