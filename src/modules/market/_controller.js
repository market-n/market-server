const listMarket = require("./list-market");
const addMarket = require("./add-market");

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

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */

const add_market = async (req, res, next) => {
  try {
    let result = await addMarket({ body: req.body });
    res.status(201).json({ data: result });
  } catch (error) {
    next(error);
  }
};

