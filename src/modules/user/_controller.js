const express = require("express");
const addUser = require("./add-user");
const UserList = require("./list-user");
const DeleteUser = require("./delete-user");
const UnDeleteUser = require("./un-delete-user");
const changeAllowUser = require("./change-allow-market");

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 * @returns
 */

const add_user = async (req, res, next) => {
  try {
    let result = await addUser({ body: req.body });
    return res.status(201).json({ msg: "created", data: result });
  } catch (error) {
    next(error);
  }
};

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 * @returns
 */

const user_list = async (req, res, next) => {
  try {
    let result = await UserList();
    return res.status(200).json({ msg: "nice", data: result });
  } catch (error) {
    next(error);
  }
};

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 * @returns
 */

const delete_user = async (req, res, next) => {
  try {
    let result = await DeleteUser({ params: req.params });
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
 * @returns
 */

const undelete_user = async (req, res, next) => {
  try {
    let result = await UnDeleteUser({ params: req.params });
    res.status(200).json({ data: result });
  } catch (error) {
    next(error);
  }
};

const change_allow_user = async (req, res, next) => {
  try {
    let result = await changeAllowUser({ params: req.params, user: req.user });
    res.status(200).json({ data: result });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  add_user,
  user_list,
  delete_user,
  undelete_user,
  change_allow_user,
};
