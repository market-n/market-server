const express = require("express");
const addProductServices = require("./add-product");

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

module.exports = {
  addProduct,
};
