const mongoose = require("mongoose");
const Joi = require("joi");

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
    },
    role: {
      type: String,
      enum: ["student", "instructor", "admin"],
    },
    courses: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course",
      },
    ],
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);

function validateCreateUser(object) {
  const schema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().required(),
    password: Joi.string().required(),
    photo: Joi.string(),
    role: Joi.string().valid("student", "instructor").required(),
    courses: Joi.array().items(Joi.string()),
  });
  return schema.validate(object);
}

function validateUpdateUser(object) {
  const schema = Joi.object({
    name: Joi.string(),
    email: Joi.string(),
    password: Joi.string(),
    photo: Joi.string(),
    courseId: Joi.string(),
  });

  return schema.validate(object);
}

module.exports = {
  User,
  validateCreateUser,
  validateUpdateUser,
};
