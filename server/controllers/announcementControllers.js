const {
  validateCreateAnnouncement,
  Announcement,
  validateUpdateAnnouncement,
} = require("../models/Announcement");
const { Course } = require("../models/Course");
const { User } = require("../models/User");

/**
 * @description create Announcement
 * @route /api/v1/announcements/
 * @method POST
 * @access private (logged user)
 */
module.exports.createAnnouncementCtrl = async (req, res) => {
  try {
    const { error } = validateCreateAnnouncement(req.body);
    if (error) {
      return res
        .status(400)
        .json({ success: false, message: error.details[0].message });
    }

    // check if the course is exist or not
    const course = await Course.findById(req.body.courseId);
    if (!course) {
      return res
        .status(404)
        .json({ success: false, message: "course not exist" });
    }

    // check if the creator is exist or not
    const creator = await User.findById(req.body.creatorId);
    if (!creator) {
      return res
        .status(404)
        .json({ success: false, message: "creator not exist" });
    }

    // check if the creator role is instructor or not
    if (creator.role !== "instructor") {
      return res.status(401).json({
        success: false,
        message: "only instructors can create announcements",
      });
    }

    // check if the creator is authorized to create announcements for this course
    if (!creator.courses.includes(req.body.courseId)) {
      return res.status(401).json({
        success: false,
        message: "you can create announcements for your courses only",
      });
    }

    const newAnnouncement = await Announcement.create(req.body);

    res.status(200).json({
      success: true,
      message: "Announcement created successfully",
      data: newAnnouncement,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

/**
 * @description get all Announcements
 * @route /api/v1/announcements/
 * @method GET
 * @access private (logged user)
 */
module.exports.getAllAnnouncementsCtrl = async (req, res) => {
  try {
    let { page, pageSize } = req.query;
    page = parseInt(page || "0");
    pageSize = parseInt(pageSize || "10");

    const user = await User.findById(req.query.userId);
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "user not found" });
    }

    // query announcements of the user(student/instructor) courses
    const announcements = await Announcement.find({
      courseId: { $in: user.courses },
    })
      .populate("creatorId courseId")
      .skip(pageSize * page)
      .limit(pageSize);

    res.status(200).json({
      success: true,
      message: "success",
      data: announcements,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

/**
 * @description get single Announcement
 * @route /api/v1/announcements/:id
 * @method GET
 * @access private (logged user)
 */
module.exports.getSingleAnnouncementCtrl = async (req, res) => {
  try {
    const user = await User.findById(req.query.userId);
    const announcement = await Announcement.findOne({
      _id: req.params.id,
      courseId: { $in: user.courses },
    }).populate("creatorId");

    if (!announcement) {
      return res
        .status(404)
        .json({ success: false, message: "announcement not found" });
    }

    res.status(200).json({
      success: true,
      message: "success",
      data: announcement,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

/**
 * @description update Announcements
 * @route /api/v1/announcements/:id
 * @method PUT
 * @access private (logged user)
 */
module.exports.updateAnnouncementCtrl = async (req, res) => {
  try {
    const { error } = validateUpdateAnnouncement(req.body);
    if (error) {
      return res
        .status(400)
        .json({ success: false, message: error.details[0].message });
    }
    const { userId } = req.query;
    const user = await User.findById(userId);
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "user not exist" });
    }

    const updatedAnnouncement = await Announcement.findOneAndUpdate(
      { _id: req.params.id, creatorId: userId },
      req.body,
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: "Announcement updated successfully",
      data: updatedAnnouncement,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

/**
 * @description delete Announcement
 * @route /api/v1/announcements/:id
 * @method DELETE
 * @access private (logged user)
 */
module.exports.deleteAnnouncementCtrl = async (req, res) => {
  try {
    const { userId } = req.query;
    const user = await User.findById(userId);
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "user not exist" });
    }

    const announcement = await Announcement.findOneAndDelete({
      _id: req.params.id,
      creatorId: userId,
    });
    if (!announcement) {
      return res
        .status(404)
        .json({ success: false, message: "announcement not found" });
    }

    res.status(200).json({
      success: true,
      message: "success",
      data: announcement,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};
