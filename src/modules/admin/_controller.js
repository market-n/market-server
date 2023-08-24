const express = require("express");
const registerAdmin = require("./register-admin");

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */

const register_admin = async (req, res, next) => {
  try {
    let result = await registerAdmin({ body: req.body });
    res.status(201).json({data:result})
  } catch (error) {
    next(error);
  }
};
module.exports = {register_admin}
