const express = require("express");
const addMarketCommentServices = require("./add-comment");

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

module.exports = {
  addMarketComment,
};