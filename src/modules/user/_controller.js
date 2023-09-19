const express = require("express");
const registerUserServices = require("./register-user");
const loginUserService = require("./login-user");

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

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */

const loginUser = async (req, res, next) => {
  try {
    const result = await loginUserService({ body: req.body });
    res.status(200).json({ data: { token: result } });
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

const listUser = async (req, res, next) => {
};

module.exports = {
  registerUser,
  loginUser,
};
