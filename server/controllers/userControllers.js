const { User } = require("../models/User");

/**
 * @description get single user
 * @route /api/v1/courses/
 * @method POST
 * @access private (logged user)
 */
module.exports.getSingleUserCtrl = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).populate("course");
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "user not found" });
    }
    res.status(200).json({ success: true, message: "success", data: user });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
