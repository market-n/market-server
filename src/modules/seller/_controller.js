const express = require("express");
const registerSellerServices = require("./register-seller");

const httpValidator = require("../../shared/http-validator");

const {
  postRegisterSellerSchemas,
  postLoginSellerSchemas,
  postChangeAllowSellerSchemas,
  deleteRemoveSellerSchemas,
  deleteUnRemoveSellerSchemas,
  getListSellerSchemas,
  getShowSellerSchemas,
} = require("./_schemas");
const loginSellerServices = require("./login-seller");
const changeAllowSellerServices = require("./change-allow-seller");
const removeSellerServices = require("./remove-seller");
const unremoveSellerServices = require("./unremove-seller");
const listSellerServices = require("./list-seller");
const showSellerServices = require("./show-seller");
const editSellerServices = require("./edit-seller");

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

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */

const changeAllowSeller = async (req, res, next) => {
  try {
    httpValidator({ params: req.params }, postChangeAllowSellerSchemas);
    const result = await changeAllowSellerServices({
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

const removeSeller = async (req, res, next) => {
  try {
    httpValidator({ params: req.params }, deleteRemoveSellerSchemas);
    let result = await removeSellerServices({ params: req.params });
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

const unremoveSeller = async (req, res, next) => {
  try {
    httpValidator({ params: req.params }, deleteUnRemoveSellerSchemas);
    let result = await unremoveSellerServices({ params: req.params });
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

const listSeller = async (req, res, next) => {
  try {
    httpValidator({}, getListSellerSchemas);
    let result = await listSellerServices();
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

const showSeller = async (req, res, next) => {
  try {
    httpValidator({ params: req.params }, getShowSellerSchemas);
    let result = await showSellerServices({ params: req.params });
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

const editSeller = async (req, res, next) => {
  try {
    // httpValidator(
    //   { body: req.body, params: req.params },
    //   patchEditAdminSchemas,
    // );
    let result = await editSellerServices({
      params: req.params,
      body: req.body,
    });
    res.status(200).json({ data: result });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  registerSeller,
  loginSeller,
  changeAllowSeller,
  removeSeller,
  unremoveSeller,
  listSeller,
  showSeller,
  editSeller,
};
