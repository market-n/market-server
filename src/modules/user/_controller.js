const express = require("express");
const registerUserServices = require("./register-user");

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
const registerUser = async (req, res, next) => {
  try {
    const result = await registerUserServices({ body: req.body });
    res.status(201).json({ data: result });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  registerUser,
};
