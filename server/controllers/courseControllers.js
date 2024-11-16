const { Course, validateCreateCourse } = require("../models/Course");

/**
 * @description create course
 * @route /api/v1/courses/
 * @method POST
 * @access private (logged user)
 */
module.exports.createCourseCtrl = async (req, res) => {
  try {
    const { error } = validateCreateCourse(req.body);
    if (error) {
      return res
        .status(400)
        .json({ success: false, message: error.details[0].message });
    }

    const newCourse = await Course.create(req.body);

    res
      .status(201)
      .json({ success: true, message: "course created", data: newCourse });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};
