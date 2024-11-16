const mongoose = require("mongoose");
const Joi = require("joi");

const QuizSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      enum: ["quiz", "assignment"],
    },
    title: {
      type: String,
      required: true,
    },
    courseId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
    },
    creatorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    topic: {
      type: String,
      required: true,
    },
    questions: [{ question: String, options: [String], answer: String }],
    dueDate: {
      type: Date,
      required: true,
    },
  },
  { timestamps: true }
);

const Quiz = mongoose.model("Quiz", QuizSchema);

function validateCreateQuiz(object) {
  const schema = Joi.object({
    type: Joi.string().valid("quiz", "assignment").required(),
    title: Joi.string().required(),
    courseId: Joi.string().required(),
    creatorId: Joi.string().required(),
    questions: Joi.array()
      .items(
        Joi.object({
          question: Joi.string(),
          options: Joi.array().items(Joi.string()),
          answer: Joi.string(),
        })
      )
      .required(),
    topic: Joi.string().required(),
    dueDate: Joi.date().required(),
  });

  return schema.validate(object);
}

function validateUpdateQuiz(object) {
  const schema = Joi.object({
    title: Joi.string(),
    courseId: Joi.string(),
    questions: Joi.array().items(
      Joi.object({
        question: Joi.string(),
        options: Joi.array().items(Joi.string()),
        answer: Joi.string(),
      })
    ),
    topic: Joi.string(),
    dueDate: Joi.date(),
  });

  return schema.validate(object);
}

module.exports = {
  Quiz,
  validateCreateQuiz,
  validateUpdateQuiz,
};
