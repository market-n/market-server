const express = require("express");
const AddMarketCategoryServices = require("./add-market-category");
const ListMarketCategoryServices = require("./list-market-category");
const editMarketCategoryServices = require("./edit-market-category");
const removeMarketCategoryServices = require("./remove-market-category");
const unremoveMarketCategoryServices = require("./unremove-market-category");

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
    return res.status(201).json({ data: result });
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

const ListMarketCategory = async (req, res, next) => {
  try {
    const result = await ListMarketCategoryServices();
    return res.status(200).json({ data: result });
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

const EditMarketCategory = async (req, res, next) => {
  try {
    const result = await editMarketCategoryServices({
      body: req.body,
      user: req.user,
      params: req.params,
    });
    return res.status(200).json({ data: result });
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

const removeMarketCategory = async (req, res, next) => {
  try {
    let result = await removeMarketCategoryServices({
      params: req.params,
      user: req.user,
    });
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

const unremoveMarketCategory = async (req, res, next) => {
  try {
    let result = await unremoveMarketCategoryServices({
      params: req.params,
      user: req.user,
    });
    res.status(200).json({ data: result });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  AddMarketCategory,
  ListMarketCategory,
  EditMarketCategory,
  removeMarketCategory,
  unremoveMarketCategory,
};
