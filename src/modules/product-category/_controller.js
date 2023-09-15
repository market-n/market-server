const express = require("express");
const AddproductCategoryServices = require("./add-product-category");
const ListproductCategoryServices = require("./list-product-category");
const editproductCategoryServices = require("./edit-product-category");
const removeproductCategoryServices = require("./remove-product-category");
const unremoveproductCategoryServices = require("./unremove-product-category");

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

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */

const EditproductCategory = async (req, res, next) => {
  try {
    const result = await editproductCategoryServices({
      body: req.body,
      user: req.user,
      params: req.params,
    });
    return res.status(200).json({ data: result });
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

const removeproductCategory = async (req, res, next) => {
  try {
    let result = await removeproductCategoryServices({
      params: req.params,
      user: req.user,
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

const unremoveproductCategory = async (req, res, next) => {
  try {
    let result = await unremoveproductCategoryServices({
      params: req.params,
      user: req.user,
    });
    res.status(200).json({ data: result });
  } catch (error) {
    next(error);
  }
};

