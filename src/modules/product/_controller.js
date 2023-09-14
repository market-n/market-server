const express = require("express");
const addProductServices = require("./add-product");
const listProductServices = require("./list-product");

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
const addProduct = async (req, res, next) => {
  try {
    const result = await addProductServices({ body: req.body, user: req.user });
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
const listProduct = async (req, res, next) => {
  try {
    const result = await listProductServices();
    res.status(200).json({ data: result });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  addProduct,
  listProduct,
};
