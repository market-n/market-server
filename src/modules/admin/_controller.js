const express = require("express");
const addAdmin = require("./add-admin");
const loginAdmin = require("./login-admin");
const listAdmin = require("./list-admins");
const showAdmin = require("./show-admin");
const removeAdmin = require("./remove-admin");
const unremoveAdmin = require("./unremove-admin");

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
    let result = await listAdmin();
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

const show_admin = async (req, res, next) => {
  try {
    let result = await showAdmin({ params: req.params });
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

const remove_admin = async (req, res, next) => {
  try {
    let result = await removeAdmin({ params: req.params });
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

const unremove_admin = async (req, res, next) => {
  try {
    let result = await unremoveAdmin({ params: req.params });
    res.status(200).json({ data: result });
  } catch (error) {
    next(error);
  }
};
module.exports = { add_admin, login_admin, list_admin, show_admin, remove_admin, unremove_admin };
