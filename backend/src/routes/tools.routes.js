const router = require("express").Router();
router.get("/", (req, res) => {
  res.json([
    { id: "bundle1", name: "Lawn Care Pack", weekend_price: 150, description: "Lawn mower + trimmer" },
    { id: "bundle2", name: "Garden Tidy Pack", weekend_price: 120, description: "Hedge trimmer + leaf blower" }
  ]);
});
module.exports = router;
