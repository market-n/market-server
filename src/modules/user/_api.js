const {
  add_user,
  user_list,
  change_allow_user,
const router = express.Router();
let mAddUser = [isloggedIn, hasRole(["super_admin", "admin", "seller"])];
let mListUser = [isloggedIn, hasRole(["super_admin", "admin", "seller"])];
let mChangeAllowUser = [isloggedIn, hasRole(["super_admin", "admin"])];
router.post("/users", mAddUser, add_user);
router.get("/users", mListUser, user_list);
router.post("/users/change/allow/:id", mChangeAllowUser, change_allow_user);
