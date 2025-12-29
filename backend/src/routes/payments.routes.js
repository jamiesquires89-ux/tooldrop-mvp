const router = require("express").Router();
router.post("/checkout", (req, res) => {
  res.json({ hireClientSecret: "pi_hire_dummy", bondClientSecret: "pi_bond_dummy" });
});
module.exports = router;
