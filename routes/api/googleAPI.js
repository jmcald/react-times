const router = require("express").Router();
const googleController = require("../../controllers/googleAPIController");

router
  .route("/")
  .get(googleController.findAll);

module.exports = router;