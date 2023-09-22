const { hasRole, isloggedIn } = require("../../shared/auth");
const isMongoId = require("../../shared/validator/isMongoId");

const {
  registerUser,
  loginUser,
  listUser,
  showUser,
  removeUser,
  unremoveUser,
} = require("./_controller");

const router = require("express").Router();

const mShowUser = [isloggedIn, isMongoId];

router.post("/user/register", registerUser);
router.post("/user/login", loginUser);
router.get("/user", listUser);
router.get("/user/:id", mShowUser, showUser);
router.delete("/user/:id", removeUser);
router.delete("/user/un/:id", unremoveUser);

module.exports = router;
