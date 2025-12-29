const router = require("express").Router();
router.post("/", (req, res) => res.json({ bookingId: "booking123", status: "pending" }));
router.get("/my", (req, res) => res.json([{ id: "booking123", start_date: "2026-01-10", end_date: "2026-01-12" }]));
module.exports = router;
