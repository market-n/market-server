const {
  add_user,
  user_list,
const router = express.Router();
let mAddUser = [isloggedIn, hasRole(["super_admin", "admin", "seller"])];
let mListUser = [isloggedIn, hasRole(["super_admin", "admin", "seller"])];
router.post("/users", mAddUser, add_user);
router.get("/users", mListUser, user_list);
