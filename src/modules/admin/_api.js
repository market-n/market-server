const express = require("express");
const { register_admin, login_admin } = require("./_controller");
const { isloggedIn } = require("../../shared/auth");

const router = express.Router();

router.post("/register/admin", register_admin);
// Middlewarelarni bitta arrayga saqlab olib berib yuboramiz.
const mRegisterAdmin = [isloggedIn];

router.post("/login/admin", login_admin);

module.exports = router;
