const { registerSeller, loginSeller } = require("./_controller");

const router = require("express").Router();

router.post("/register/seller", registerSeller);
router.post("/login/seller", loginSeller);

module.exports = router;
