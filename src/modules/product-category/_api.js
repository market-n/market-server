const { isloggedIn, hasRole } = require("../../shared/auth");
const isMongoId = require("../../shared/validator/isMongoId");
const {
  AddproductCategory,
  ListproductCategory,
} = require("./_controller");

const router = require("express").Router();

const mAddCategoryproduct = [
  isloggedIn,
  hasRole(["super_admin", "admin", "seller"]),
];
router.post("/product-category", mAddCategoryproduct, AddproductCategory);
router.get("/product-category", ListproductCategory);
module.exports = router;
