const { isloggedIn, hasRole } = require("../../shared/auth");
const { AddMarketCategory, ListMarketCategory } = require("./_controller");

const router = require("express").Router();

const mAddCategoryMarket = [isloggedIn, hasRole(["super_admin", "admin"])];

router.post("/market-category", mAddCategoryMarket, AddMarketCategory);
router.get("/market-category", ListMarketCategory);

module.exports = router;
