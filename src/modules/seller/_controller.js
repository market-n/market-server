const express = require("express");
const registerSellerServices = require("./register-seller");

const httpValidator = require("../../shared/http-validator");

const { postRegisterSellerSchemas } = require("./_schemas");
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

module.exports = {
  registerSeller,
};
