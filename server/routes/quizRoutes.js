const {
  createQuizCtrl,
  getAllQuizzesCtrl,
  getSingleQuizCtrl,
  updateQuizCtrl,
  deleteQuizCtrl,
} = require("../controllers/quizControllers");

const router = require("express").Router();

// /api/v1/quizzes/
router.route("/").post(createQuizCtrl).get(getAllQuizzesCtrl);

// /api/v1/quizzes/:id
router
  .route("/:id")
  .get(getSingleQuizCtrl)
  .put(updateQuizCtrl)
  .delete(deleteQuizCtrl);

module.exports = router;
