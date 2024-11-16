const {
  createAnnouncementCtrl,
  getAllAnnouncementsCtrl,
  getSingleAnnouncementCtrl,
  updateAnnouncementCtrl,
  deleteAnnouncementCtrl,
} = require("../controllers/announcementControllers");

const router = require("express").Router();

// api/v1/announcements/
router.route("/").post(createAnnouncementCtrl).get(getAllAnnouncementsCtrl);

// api/v1/announcements/:id
router
  .route("/:id")
  .get(getSingleAnnouncementCtrl)
  .put(updateAnnouncementCtrl)
  .delete(deleteAnnouncementCtrl);

module.exports = router;
