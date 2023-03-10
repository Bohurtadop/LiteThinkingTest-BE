const express = require("express");
const userController = require("../controllers/user");

var router = express.Router();

// Basic CRUD
router.get("/", async function (req, res) {
    await userController.getUsers(function (result) {
        res.send(result);
    });
});

router.post("/", async function (req, res) {
    await userController.createUser(req.body, function (result) {
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
    await userController.getUser(id, function (result) {
        res.send(result);
    });
});

module.exports = router;