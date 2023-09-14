const { isloggedIn, hasRole } = require("../../shared/auth");
const isMongoId = require("../../shared/validator/isMongoId");
const {
  AddMarketCategory,
  ListMarketCategory,
  EditMarketCategory,
} = require("./_controller");

const router = require("express").Router();

const mAddCategoryMarket = [isloggedIn, hasRole(["super_admin", "admin"])];
const mEditCategoryMarket = [
  isloggedIn,
  hasRole(["super_admin", "admin"]),
  isMongoId,
];

router.post("/market-category", mAddCategoryMarket, AddMarketCategory);
router.get("/market-category", ListMarketCategory);
router.patch("/market-category/:id", mEditCategoryMarket, EditMarketCategory);

module.exports = router;
