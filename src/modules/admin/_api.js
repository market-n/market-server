const express = require("express");
const { register_admin, login_admin } = require("./_controller");

const router = express.Router();

router.post("/register/admin", register_admin);
router.post("/login/admin", login_admin);

module.exports = router;
