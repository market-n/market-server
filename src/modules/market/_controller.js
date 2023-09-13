const listMarket = require("./list-market");

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */

const all_markets = async (req, res, next) => {
  try {
    let result = await listMarket();

    res.status(200).json({ data: result });
  } catch (error) {
    next(error);
  }
};

