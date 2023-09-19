const { registerUser, loginUser, listUser } = require("./_controller");

const router = require("express").Router();

router.post("/user/register", registerUser);
router.post("/user/login", loginUser);
router.get("/user", listUser);

module.exports = router;
