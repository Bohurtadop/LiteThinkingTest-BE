const express = require("express");
const productController = require("../controllers/product");

var router = express.Router();

// Basic CRUD
router.get("/", async function (req, res) {
    await productController.getProducts(function (result) {
        res.send(result);
    });
});

router.post("/", async function (req, res) {
    await productController.createProduct(req.body, function (result) {
        res.send(result);
    });
});

router.put("/", function (req, res) {

});

router.delete("/", function (req, res) {

});

// Additional routes
router.get("/:id", async function (req, res) {
    const { id } = req.params;
    await productController.getProduct(id, function (result) {
        res.send(result);
    });
});

module.exports = router;