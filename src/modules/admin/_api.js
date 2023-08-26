const express = require("express");
const { isloggedIn } = require("../../shared/auth");
const MongoId = require("../../shared/validator/isMongoId");
const {
  add_admin,
  login_admin,
  list_admin,
  show_admin,
  remove_admin,
} = require("./_controller");

const router = express.Router();

// Middlewarelarni bitta arrayga saqlab olib berib yuboramiz.
const mRegisterAdmin = [isloggedIn];
const mListAdmin = [isloggedIn];
const mShowAdmin = [isloggedIn, MongoId];
const mRemoveAdmin = [isloggedIn, MongoId];

// Routes
router.post("/register/admin", mRegisterAdmin, add_admin);
router.post("/login/admin", login_admin);
router.get("/admin", mListAdmin, list_admin);
router.get("/admin/:id", mShowAdmin, show_admin);
router.delete("/admin/:id", mRemoveAdmin, remove_admin);

module.exports = router;
