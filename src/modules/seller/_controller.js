const express = require("express");
const registerSellerServices = require("./register-seller");

const httpValidator = require("../../shared/http-validator");

const {
  postRegisterSellerSchemas,
  postLoginSellerSchemas,
} = require("./_schemas");
const loginSellerServices = require("./login-seller");
/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
const registerSeller = async (req, res, next) => {
  try {
    httpValidator({ body: req.body }, postRegisterSellerSchemas);
    const result = await registerSellerServices({ body: req.body });
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
const loginSeller = async (req, res, next) => {
  try {
    httpValidator({ body: req.body }, postLoginSellerSchemas);
    const result = await loginSellerServices({ body: req.body });
    res.status(200).json({ data: { token: result } });
  } catch (error) {
    next(error);
  }
};
module.exports = {
  registerSeller,
  loginSeller,
};
