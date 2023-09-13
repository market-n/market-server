const express = require("express");
const listMarket = require("./list-market");
const addMarket = require("./add-market");
const editMarket = require("./edit-market");
const changeAllow = require("./change-allow-market");

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

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */

const edit_market = async (req, res, next) => {
  try {
    let result = await editMarket({ body: req.body, params: req.params });
    res.status(200).json({ data: result });
  } catch (error) {
    next(error);
  }
};

module.exports = { all_markets, add_market, edit_market };

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */

const change_allow = async (req, res, next) => {
  try {
    let result = await changeAllow({ params: req.params, user: req.user });
    res.status(200).json({ data: result });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  all_markets,
  add_market,
  edit_market,
  remove_market,
  unremove_market,
  change_allow,
};
