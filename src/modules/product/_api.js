const router = require("express").Router();
const { hasRole, isloggedIn } = require("../../shared/auth");
const isMongoId = require("../../shared/validator/isMongoId");
const {
  addProduct,
  listProduct,
  showProduct,
  removeProduct,
  unremoveProduct,
} = require("./_controller");

const mAddProduct = [isloggedIn, hasRole(["seller"])];
const mShowProduct = [isloggedIn, isMongoId];
const mRemoveProduct = [
  isloggedIn,
  hasRole(["admin", "super_admin", "seller"]),
  isMongoId,
];

const mUnRemoveProduct = [
  isloggedIn,
  hasRole(["admin", "super_admin"]),
  isMongoId,
];

router.post("/product", mAddProduct, addProduct);
router.get("/product", listProduct);
router.get("/product/:id", mShowProduct, showProduct);
router.delete("/product/:id", mRemoveProduct, removeProduct);
router.delete("/product/un/:id", mUnRemoveProduct, unremoveProduct);

module.exports = router;
