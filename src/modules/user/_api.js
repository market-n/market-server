const express = require("express");
const {
  add_user,
  user_list,
  undelete_user,
  delete_user,
  change_allow_user,
} = require("./_controller");
const { hasRole, isloggedIn } = require("../../shared/auth/index");

const router = express.Router();

let mAddUser = [isloggedIn, hasRole(["super_admin", "admin", "seller"])];
let mListUser = [isloggedIn, hasRole(["super_admin", "admin", "seller"])];
let mDeleteUser = [isloggedIn, hasRole(["super_admin", "admin"])];
let mUndeleteUser = [isloggedIn, hasRole(["super_admin", "admin"])];
let mChangeAllowUser = [isloggedIn, hasRole(["super_admin", "admin"])];
router.post("/users", mAddUser, add_user);
router.get("/users", mListUser, user_list);
router.delete("/users/:id", mDeleteUser, delete_user);
router.delete("/users/un/:id", mUndeleteUser, undelete_user);
router.post("/users/change/allow/:id", mChangeAllowUser, change_allow_user);

module.exports = router;
