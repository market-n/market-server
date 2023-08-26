const express = require("express");
const { UnauthorizedError } = require("../errors");

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */

const isLoggedIn = async (req, res, next) => {
  try {
    const token = req.headers.authorization;

    if (!token) {
      throw new UnauthorizedError("Unauthorized.");
    }

    next();
  } catch (error) {
    next(new UnauthorizedError(error.message));
  }
};

module.exports = isLoggedIn;
