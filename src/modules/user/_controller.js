const addUser = require("./add-user");
const UserList = require("./list-user");
/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 * @returns
 */

const add_user = async (req, res, next) => {
  try {
    let result = await addUser({ body: req.body });
    return res.status(201).json({ msg: "created", data: result });
  } catch (error) {
    next(error);
  }
};

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 * @returns
 */

const user_list = async (req, res, next) => {
  try {
    let result = await UserList();
    return res.status(200).json({ msg: "nice", data: result });
  } catch (error) {
    next(error);
  }
};

  add_user,
  user_list,
