const { isloggedIn, hasRole } = require("../../shared/auth");
const { AddMarketCategory } = require("./_controller");

const router = require("express").Router();

const mAddCategoryMarket = [isloggedIn, hasRole(["super_admin", "admin"])];

router.post("/market-category", mAddCategoryMarket, AddMarketCategory);

module.exports = router;
