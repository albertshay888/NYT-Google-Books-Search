const path = require("path");
const router = require("express").Router();
const bookRoutes = require("./books");
const resumesRoutes = require("./resumes");
const googleRoutes = require("./google");
const githubRoutes = require("./github");
const jobRoutes = require("./jobs");


// Job routes
router.use("/jobs", jobRoutes);
// Book routes
router.use("/books", bookRoutes);

// Book routes
router.use("/resumes", resumesRoutes);

// Github Routes
router.use("/github", githubRoutes);

// Google Routes
router.use("/google", googleRoutes);

// For anything else, render the html page
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

module.exports = router;
