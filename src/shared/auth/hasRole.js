const express = require("express");
const { ForbiddenError } = require("../errors");

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */

const hasRole = (roles) => {
  return async (req, res, next) => {
    try {
      const { role } = req.admin;

      if (!roles.includes(role)) {
        throw new ForbiddenError("This admin is not allowed this right!");
      }

      next();
    } catch (error) {
      next(error);
    }
  };
};

module.exports = hasRole;