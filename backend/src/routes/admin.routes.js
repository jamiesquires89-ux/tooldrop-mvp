const router = require("express").Router();
router.post("/bond/capture", (req, res) => res.json({ success: true }));
router.post("/bond/release", (req, res) => res.json({ success: true }));
module.exports = router;
