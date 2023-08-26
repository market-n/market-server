const express = require("express");
const addAdmin = require("./add-admin");
const loginAdmin = require("./login-admin");

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */

const add_admin = async (req, res, next) => {
  try {
    let result = await addAdmin({ body: req.body });
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

const login_admin = async (req, res, next) => {
  try {
    let result = await loginAdmin({ body: req.body });
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

const list_admin = async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
};

module.exports = { add_admin, login_admin, list_admin };
