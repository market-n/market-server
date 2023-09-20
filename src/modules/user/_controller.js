const addUser = require("./add-user");
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
