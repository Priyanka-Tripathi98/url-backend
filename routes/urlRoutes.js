const express = require("express");
const router = express.Router();
const { createShortUrl, redirectUrl, analyticUrl } = require("../controller/urlController");

router.post("/shorten", createShortUrl);
router.get("/:code", redirectUrl);
router.get("/analytics/:code", analyticUrl);

module.exports = router;