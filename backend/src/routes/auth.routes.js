const router = require("express").Router();
const jwt = require("jsonwebtoken");

router.post("/login", (req, res) => {
  const { email } = req.body;
  const token = jwt.sign({ id: "user1", role: "customer" }, process.env.JWT_SECRET);
  res.json({ token, user: { id: "user1", email, role: "customer" } });
});

router.post("/register", (req, res) => {
  const { email } = req.body;
  const token = jwt.sign({ id: "user1", role: "customer" }, process.env.JWT_SECRET);
  res.json({ token, user: { id: "user1", email, role: "customer" } });
});

module.exports = router;
