/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
const isMongoId = async (req, res, next) => {
  try {
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = isMongoId;
