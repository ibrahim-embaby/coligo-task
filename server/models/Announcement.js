const mongoose = require("mongoose");
const Joi = require("joi");

const AnnouncementSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    creatorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    courseId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
    },
    content: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Announcement = mongoose.model("Announcement", AnnouncementSchema);

function validateCreateAnnouncement(object) {
  const schema = Joi.object({
    title: Joi.string().required(),
    creatorId: Joi.string().required(),
    courseId: Joi.string().required(),
    content: Joi.string().required(),
  });

  return schema.validate(object);
}

function validateUpdateAnnouncement(object) {
  const schema = Joi.object({
    title: Joi.string(),
    content: Joi.string(),
  });

  return schema.validate(object);
}

module.exports = {
  Announcement,
  validateCreateAnnouncement,
  validateUpdateAnnouncement,
};
