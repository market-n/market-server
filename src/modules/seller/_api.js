const {
  registerSeller,
  loginSeller,
  changeAllowSeller,
  removeSeller,
  unremoveSeller,
  listSeller,
  showSeller,
  editSeller,
} = require("./_controller");
const { hasRole, isloggedIn } = require("../../shared/auth");
const isMongoId = require("../../shared/validator/isMongoId");
const isLoggedIn = require("../../shared/auth/isLoggedIn");
const router = require("express").Router();

const mChangeAllowSeller = [
  isLoggedIn,
  hasRole(["super_admin", "admin"]),
  isMongoId,
];

const mRemoveSeller = [
  isLoggedIn,
  hasRole(["super_admin", "admin"]),
  isMongoId,
];

const mUnRemoveSeller = [
  isLoggedIn,
  hasRole(["super_admin", "admin"]),
  isMongoId,
];

const mEditSeller = [isLoggedIn, hasRole(["super_admin", "admin"]), isMongoId];
const mGetListSeller = [isLoggedIn, hasRole(["super_admin", "admin"])];
const mGetShowListSeller = [isLoggedIn, hasRole(["super_admin", "admin"])];

router.post("/register/seller", registerSeller);
router.post("/login/seller", loginSeller);
router.post("/change/allow/seller/:id", mChangeAllowSeller, changeAllowSeller);
router.delete("/seller/:id", mRemoveSeller, removeSeller);
router.delete("/seller/un/:id", mUnRemoveSeller, unremoveSeller);
router.get("/seller", mGetListSeller, listSeller);
router.get("/seller/:id", mGetShowListSeller, showSeller);
router.patch("/seller/:id", mEditSeller, editSeller);
module.exports = router;
