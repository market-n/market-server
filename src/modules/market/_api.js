const express = require("express");
const { all_markets, add_market, edit_market } = require("./_controller");
let router = express.Router();

router.get("/market", all_markets);
router.post("/market", add_market);
router.patch("/market/:id", edit_market);
module.exports = router;
