const { createCourseCtrl } = require("../controllers/courseControllers");

const router = require("express").Router();

// /api/v1/courses/
router.route("/").post(createCourseCtrl);

module.exports = router;
