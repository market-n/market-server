const express = require("express");
const registerUserServices = require("./add-user");

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
const registerUser = async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
};

module.exports = {
  registerUser,
};
