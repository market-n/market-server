const { registerUser } = require("./_controller");

const router = require("express").Router();

router.post("/user/register", registerUser);

module.exports = router;
