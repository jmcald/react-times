const router = require("express").Router();
const bookRoutes = require("./books");
const path = require("path");
const googleAPIRoutes = require("./googleAPI")

router.use("/books", bookRoutes);

router.use("googleAPI", googleAPIRoutes);

router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

module.exports = router;