const mongoose = require("mongoose");
const Joi = require("joi");

const CourseSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
  },
  { timestamps: true }
);

const Course = mongoose.model("Course", CourseSchema);

function validateCreateCourse(object) {
  const schema = Joi.object({
    title: Joi.string().required(),
    description: Joi.string(),
  });

  return schema.validate(object);
}

function validateUpdateCourse(object) {
  const schema = Joi.object({
    title: Joi.string(),
    description: Joi.string(),
  });

  return schema.validate(object);
}

module.exports = {
  Course,
  validateCreateCourse,
  validateUpdateCourse,
};
