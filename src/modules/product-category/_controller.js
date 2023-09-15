const express = require("express");
const AddproductCategoryServices = require("./add-product-category");

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */

const AddproductCategory = async (req, res, next) => {
  try {
    const result = await AddproductCategoryServices({
      body: req.body,
      user: req.user,
    });
    return res.status(201).json({ data: result });
  } catch (error) {
    next(error);
  }
};

