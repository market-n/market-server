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
const mEditCategoryproduct = [
  isloggedIn,
  hasRole(["super_admin", "admin", "seller"]),
  isMongoId,
];
router.post("/product-category", mAddCategoryproduct, AddproductCategory);
router.get("/product-category", ListproductCategory);
router.patch(
  "/product-category/:id",
  mEditCategoryproduct,
  EditproductCategory,
);
module.exports = router;
