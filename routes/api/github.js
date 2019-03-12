const router = require("express").Router();
const githubController = require("../../controllers/githubController");

// Matches with "/api/github"
router
  .route("/")
  .get(githubController.findAll);

module.exports = router;