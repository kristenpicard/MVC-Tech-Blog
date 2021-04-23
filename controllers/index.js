const router = require("express").Router();

const apiRoutes = require("./api");
// K10 NEED TO UPDATE TO VARIOUS ROUTES WE NEED TO CREATE
const homeRoutes = require("./home-routes.js");

router.use("/", homeRoutes);
router.use("/api", apiRoutes);

module.exports = router;
