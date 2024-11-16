const {
  Quiz,
  validateCreateQuiz,
  validateUpdateQuiz,
} = require("../models/Quiz");
const { User } = require("../models/User");

/**
 * @description create quiz
 * @route /api/v1/quizzes/
 * @method POST
 * @access private (logged user)
 */
module.exports.createQuizCtrl = async (req, res) => {
  try {
    const { error } = validateCreateQuiz(req.body);
    if (error) {
      return res
        .status(400)
        .json({ success: false, message: error.details[0].message });
    }
    const { creatorId, courseId } = req.body;
    const user = await User.findById(creatorId);
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "user not found" });
    }

    if (user.role !== "instructor") {
      return res.status(401).json({
        success: false,
        message: "you are not authorized to do this action",
      });
    }

    if (!user.courses.includes(courseId)) {
      return res.status(401).json({
        success: false,
        message: "you are not authorized to do this action",
      });
    }
    const newQuiz = await Quiz.create(req.body);

    res.status(201).json({
      success: true,
      message: "Quiz created successfully",
      data: newQuiz,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

/**
 * @description get all quizzes
 * @route /api/v1/quizzes/
 * @method GET
 * @access public
 */
module.exports.getAllQuizzesCtrl = async (req, res) => {
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

    const quizzes = await Quiz.find({
      courseId: { $in: user.courses },
    })
      .populate("creatorId courseId")
      .skip(pageSize * page)
      .limit(pageSize);

    res.status(200).json({
      success: true,
      message: "Quizzes retrieved successfully",
      data: quizzes,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

/**
 * @description get single quiz
 * @route /api/v1/quizzes/:id
 * @method GET
 * @access public
 */
module.exports.getSingleQuizCtrl = async (req, res) => {
  try {
    const user = await User.findById(req.query.userId);
    const quiz = await Quiz.findOne({
      _id: req.params.id,
      courseId: { $in: user.courses },
    });
    if (!quiz) {
      return res.status(404).json({
        success: false,
        message: "Quiz not found",
      });
    }
    res.status(200).json({
      success: true,
      message: "Quiz retrieved successfully",
      data: quiz,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

/**
 * @description update quiz
 * @route /api/v1/quizzes/:id
 * @method PUT
 * @access private (logged user)
 */
module.exports.updateQuizCtrl = async (req, res) => {
  try {
    const { error } = validateUpdateQuiz(req.body);
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

    const updatedQuiz = await Quiz.findOneAndUpdate(
      { _id: req.params.id, creatorId: userId },
      req.body,
      {
        new: true,
      }
    );

    if (!updatedQuiz) {
      return res.status(404).json({
        success: false,
        message: "Quiz not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Quiz updated successfully",
      data: updatedQuiz,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

/**
 * @description delete quiz
 * @route /api/v1/quizzes/:id
 * @method DELETE
 * @access private (logged user)
 */
module.exports.deleteQuizCtrl = async (req, res) => {
  try {
    const { userId } = req.query;
    const user = await User.findById(userId);
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "user not exist" });
    }
    const deletedQuiz = await Quiz.findOneAndDelete({
      _id: req.params.id,
      creatorId: userId,
    });
    res.status(200).json({
      success: true,
      message: "Quiz deleted successfully",
      data: deletedQuiz,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};
