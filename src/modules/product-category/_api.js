const { isloggedIn, hasRole } = require("../../shared/auth");
const isMongoId = require("../../shared/validator/isMongoId");
const {
  AddproductCategory,
  ListproductCategory,
  EditproductCategory,
  removeproductCategory,
  unremoveproductCategory,
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
const mRemoveCategoryproduct = [
  isloggedIn,
  hasRole(["super_admin", "admin", "seller"]),
  isMongoId,
];
const mUnRemoveCategoryproduct = [
  isloggedIn,
  hasRole(["super_admin", "admin"]),
  isMongoId,
];

router.post("/product-category", mAddCategoryproduct, AddproductCategory);
router.get("/product-category", ListproductCategory);
router.patch(
  "/product-category/:id",
  mEditCategoryproduct,
  EditproductCategory,
);
router.delete(
  "/product-category/:id",
  mRemoveCategoryproduct,
  removeproductCategory,
);
router.delete(
  "/product-category/un/:id",
  mUnRemoveCategoryproduct,
  unremoveproductCategory,
);

module.exports = router;
