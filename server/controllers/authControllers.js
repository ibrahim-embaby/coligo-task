const { Course } = require("../models/Course");
const { User, validateCreateUser } = require("../models/User");

module.exports.registerCtrl = async (req, res) => {
  try {
    const { error } = validateCreateUser(req.body);
    if (error) {
      return res
        .status(400)
        .json({ success: false, message: error.details[0].message });
    }
    if (req.body.courseId) {
      const course = await Course.findById(req.body.courseId);
      if (!course) {
        return res
          .status(404)
          .json({ success: false, message: "course not found" });
      }
    }
    const newUser = await User.create(req.body);
    res
      .status(201)
      .json({ success: true, message: "user created", data: newUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};
