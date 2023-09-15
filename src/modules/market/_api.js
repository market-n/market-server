const express = require("express");

const {
  all_markets,
  add_market,
  edit_market,
  remove_market,
  unremove_market,
  change_allow,
} = require("./_controller");

const { isloggedIn, hasRole } = require("../../shared/auth");
const isMongoId = require("../../shared/validator/isMongoId");

let router = express.Router();

let mAddMarket = [isloggedIn, hasRole(["seller"])];
let mListMarket = [];
let mEditMarket = [
  isloggedIn,
  hasRole(["super_admin", "admin", "seller"]),
  isMongoId,
];
let mRemoveMarket = [isloggedIn, hasRole(["super_admin", "admin"]), isMongoId];

let mUnremoveMarket = [
  isloggedIn,
  hasRole(["super_admin", "admin"]),
  isMongoId,
];

let mChangeAllowMarket = [
  isloggedIn,
  hasRole(["super_admin", "admin"]),
  isMongoId,
];

router.get("/market", mListMarket, all_markets);
router.post("/market", mAddMarket, add_market);
router.patch("/market/:id", mEditMarket, edit_market);
router.delete("/market/:id", mRemoveMarket, remove_market);
router.delete("/market/un/:id", mUnremoveMarket, unremove_market);
router.post("/market/change/allow/:id", mChangeAllowMarket, change_allow);

module.exports = router;
