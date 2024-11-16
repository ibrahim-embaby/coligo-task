const { getSingleUserCtrl } = require("../controllers/userControllers");

const router = require("express").Router();

// /api/v1/users/:id
router.post("/:id", getSingleUserCtrl);

module.exports = router;
