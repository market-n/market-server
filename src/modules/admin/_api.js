const express = require("express");
const { isloggedIn } = require("../../shared/auth");
const {
  add_admin,
  login_admin,
  list_admin,
  show_admin,
} = require("./_controller");

const router = express.Router();

// Middlewarelarni bitta arrayga saqlab olib berib yuboramiz.
const mRegisterAdmin = [isloggedIn];
const mListAdmin = [isloggedIn];

// Routes
router.post("/register/admin", mRegisterAdmin, add_admin);
router.post("/login/admin", login_admin);
router.get("/admin", mListAdmin, list_admin);

module.exports = router;
