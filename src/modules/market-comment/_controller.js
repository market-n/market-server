const express = require("express");
const addMarketCommentServices = require("./add-market-comment");
const listMarketCommentServices = require("./list-market-comment");
const editMarketCommentServices = require("./edit-market-comment");
const removeMarketCommentServices = require("./remove-market-comment");

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */

const addMarketComment = async (req, res, next) => {
  try {
    const result = await addMarketCommentServices({
      body: req.body,
      user: req.user,
    });
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

const listMarketComment = async (req, res, next) => {
  try {
    const result = await listMarketCommentServices({
      params: req.params,
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

const editMarketComment = async (req, res, next) => {
  try {
    const result = await editMarketCommentServices({
      body: req.body,
      user: req.user,
      params: req.params,
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

const removeMarketComment = async (req, res, next) => {
  try {
    const result = await removeMarketCommentServices({
      user: req.user,
      params: req.params,
    });
    res.status(200).json({ data: result });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  addMarketComment,
  listMarketComment,
  editMarketComment,
  removeMarketComment,
};
