const { isloggedIn, hasRole } = require("../../shared/auth");
const isMongoId = require("../../shared/validator/isMongoId");
const {
  AddMarketCategory,
  ListMarketCategory,
  EditMarketCategory,
  removeMarketCategory,
  unremoveMarketCategory,
} = require("./_controller");

const router = require("express").Router();

const mAddCategoryMarket = [isloggedIn, hasRole(["super_admin", "admin"])];
const mEditCategoryMarket = [
  isloggedIn,
  hasRole(["super_admin", "admin"]),
  isMongoId,
];
const mRemoveCategoryMarket = [
  isloggedIn,
  hasRole(["super_admin", "admin"]),
  isMongoId,
];
const mUnRemoveCategoryMarket = [
  isloggedIn,
  hasRole(["super_admin", "admin"]),
  isMongoId,
];

router.post("/market-category", mAddCategoryMarket, AddMarketCategory);
router.get("/market-category", ListMarketCategory);
router.patch("/market-category/:id", mEditCategoryMarket, EditMarketCategory);
router.delete(
  "/market-category/:id",
  mRemoveCategoryMarket,
  removeMarketCategory,
);
router.delete(
  "/market-category/un/:id",
  mUnRemoveCategoryMarket,
  unremoveMarketCategory,
);

module.exports = router;
