const { registerSeller } = require("./_controller");

const router = require("express").Router();

router.post("/register/seller", registerSeller);

module.exports = router;
