const express = require("express");
const AddproductCategoryServices = require("./add-product-category");
const ListproductCategoryServices = require("./list-product-category");

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

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */

const ListproductCategory = async (req, res, next) => {
  try {
    const result = await ListproductCategoryServices();
    return res.status(200).json({ data: result });
  } catch (error) {
    next(error);
  }
};

