const router = require("express").Router();
const resumesController = require("../../controllers/resumesController");

// Matches with "/api/books"
router.route("/")
  .get(resumesController.findAll)
  .post(resumesController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(resumesController.findById)
  .put(resumesController.update)
  .delete(resumesController.remove);

module.exports = router;
