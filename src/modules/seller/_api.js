const {
  registerSeller,
  loginSeller,
  changeAllowSeller,
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

router.post("/register/seller", registerSeller);
router.post("/login/seller", loginSeller);
router.post("/change/allow/seller/:id", mChangeAllowSeller, changeAllowSeller);

module.exports = router;
