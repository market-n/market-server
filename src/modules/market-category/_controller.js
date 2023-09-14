const express = require("express");
const AddMarketCategoryServices = require("./add-market-category");
const ListMarketCategoryServices = require("./list-market-category");

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */

const AddMarketCategory = async (req, res, next) => {
  try {
    const result = await AddMarketCategoryServices({
      body: req.body,
      user: req.user,
    });
    return res.status(200).json({ data: result });
  } catch (error) {
    next(error);
  }
};

const ListMarketCategory = async (req, res, next) => {
  try {
    const result = await ListMarketCategoryServices();
    return res.status(200).json({ data: result });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  AddMarketCategory,
  ListMarketCategory,
};
