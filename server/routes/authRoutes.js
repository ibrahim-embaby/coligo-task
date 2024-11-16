const { registerCtrl } = require("../controllers/authControllers");

const router = require("express").Router();

// /api/v1/auth/register
router.post("/register", registerCtrl);

module.exports = router;
