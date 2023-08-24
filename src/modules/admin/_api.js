const express = require("express");
const { register_admin } = require("./_controller");

const router = express.Router();

router.post("/register/admin",register_admin)


module.exports = router 