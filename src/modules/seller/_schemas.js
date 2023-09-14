const Joi = require("joi");

const postRegisterSellerSchemas = {
  body: Joi.object({
    first_name: Joi.string().min(4).max(64).required().messages({
      "string.empty": "Firstname kiritilishi kerak!",
      "string.min": "Firstname uzunligi 4 tadan ko'p bolishi kerak!",
      "string.max": "Firstname uzunligi 64 tadan kam bolishi kerak!",
      "any.required": "Firstname kiritilishi kerak!",
    }),
    last_name: Joi.string().min(4).max(64).required().messages({
      "string.empty": "Lastname kiritilishi kerak!",
      "string.min": "Lastname uzunligi 4 tadan ko'p bolishi kerak!",
      "string.max": "Lastname uzunligi 64 tadan kam bolishi kerak!",
      "any.required": "Lastname kiritilishi kerak!",
    }),
    address: Joi.string().min(4).max(124).required().messages({
      "string.empty": "Address kiritilishi kerak!",
      "string.min": "Address uzunligi 4 tadan ko'p bolishi kerak!",
      "string.max": "Address uzunligi 124 tadan kam bolishi kerak!",
      "any.required": "Address kiritilishi kerak!",
    }),
    email: Joi.string().min(6).max(64).required().messages({
      "string.empty": "Email kiritilishi kerak!",
      "string.min": "Email uzunligi 6 tadan ko'p bolishi kerak!",
      "string.max": "Email uzunligi 64 tadan kam bolishi kerak!",
      "any.required": "Email kiritilishi kerak!",
    }),
    phone_number: Joi.string().length(13).required().messages({
      "string.empty": "Email kiritilishi kerak!",
      "string.min": "Email uzunligi 6 tadan ko'p bolishi kerak!",
      "string.max": "Email uzunligi 64 tadan kam bolishi kerak!",
      "any.required": "Email kiritilishi kerak!",
    }),
    username: Joi.string().min(6).max(64).required().messages({
      "string.empty": "Username kiritilishi kerak!",
      "string.min": "Username uzunligi 6 tadan ko'p bolishi kerak!",
      "string.max": "Username uzunligi 64 tadan kam bolishi kerak!",
      "any.required": "Username kiritilishi kerak!",
    }),
    password: Joi.string().min(6).max(64).required().messages({
      "string.empty": "Password kiritilishi kerak!",
      "string.min": "Password uzunligi 6 tadan ko'p bolishi kerak!",
      "string.max": "Password uzunligi 64 tadan kam bolishi kerak!",
      "any.required": "Password kiritilishi kerak!",
    }),
  }),
};

const postLoginSellerSchemas = {
  body: Joi.object({
    username: Joi.string().min(6).max(64).required().messages({
      "string.empty": "Username kiritilishi kerak!",
      "string.min": "Username uzunligi 6 tadan ko'p bolishi kerak!",
      "string.max": "Username uzunligi 64 tadan kam bolishi kerak!",
      "any.required": "Username kiritilishi kerak!",
    }),
    password: Joi.string().min(6).max(64).required().messages({
      "string.empty": "Password kiritilishi kerak!",
      "string.min": "Password uzunligi 6 tadan ko'p bolishi kerak!",
      "string.max": "Password uzunligi 64 tadan kam bolishi kerak!",
      "any.required": "Password kiritilishi kerak!",
    }),
  }),
};

const postChangeAllowSellerSchemas = {
  params: Joi.object({
    id: Joi.string().required().length(24).message({
      "string.empty": "Id kiritilishi kerak!",
      "string.length": "Id Xato kiritilgan!",
      "any.required": "Id kiritilishi kerak!",
    }),
  }),
};

const deleteRemoveSellerSchemas = {
  params: Joi.object({
    id: Joi.string().required().length(24).message({
      "string.empty": "Id kiritilishi kerak!",
      "string.length": "Id Xato kiritilgan!",
      "any.required": "Id kiritilishi kerak!",
    }),
  }),
};

const deleteUnRemoveSellerSchemas = {
  params: Joi.object({
    id: Joi.string().required().length(24).message({
      "string.empty": "Id kiritilishi kerak!",
      "string.length": "Id Xato kiritilgan!",
      "any.required": "Id kiritilishi kerak!",
    }),
  }),
};

const getListSellerSchemas = {};

const getShowSellerSchemas = {
  params: Joi.object({
    id: Joi.string().required().length(24).message({
      "string.empty": "Id kiritilishi kerak!",
      "string.length": "Id Xato kiritilgan!",
      "any.required": "Id kiritilishi kerak!",
    }),
  }),
};

const patchEditSellerSchemas = {
  body: Joi.object({
    first_name: Joi.string().min(4).max(64).messages({
      "string.empty": "Firstname kiritilishi kerak!",
      "string.min": "Firstname uzunligi 4 tadan ko'p bolishi kerak!",
      "string.max": "Firstname uzunligi 64 tadan kam bolishi kerak!",
    }),
    last_name: Joi.string().min(4).max(64).messages({
      "string.empty": "Lastname kiritilishi kerak!",
      "string.min": "Lastname uzunligi 4 tadan ko'p bolishi kerak!",
      "string.max": "Lastname uzunligi 64 tadan kam bolishi kerak!",
    }),
    address: Joi.string().min(4).max(124).messages({
      "string.empty": "Address kiritilishi kerak!",
      "string.min": "Address uzunligi 4 tadan ko'p bolishi kerak!",
      "string.max": "Address uzunligi 124 tadan kam bolishi kerak!",
    }),
    email: Joi.string().min(6).max(64).messages({
      "string.empty": "Email kiritilishi kerak!",
      "string.min": "Email uzunligi 6 tadan ko'p bolishi kerak!",
      "string.max": "Email uzunligi 64 tadan kam bolishi kerak!",
    }),
    phone_number: Joi.string().length(13).messages({
      "string.empty": "Email kiritilishi kerak!",
      "string.min": "Email uzunligi 6 tadan ko'p bolishi kerak!",
      "string.max": "Email uzunligi 64 tadan kam bolishi kerak!",
    }),
    username: Joi.string().min(6).max(64).messages({
      "string.empty": "Username kiritilishi kerak!",
      "string.min": "Username uzunligi 6 tadan ko'p bolishi kerak!",
      "string.max": "Username uzunligi 64 tadan kam bolishi kerak!",
    }),
    password: Joi.string().min(6).max(64).messages({
      "string.empty": "Password kiritilishi kerak!",
      "string.min": "Password uzunligi 6 tadan ko'p bolishi kerak!",
      "string.max": "Password uzunligi 64 tadan kam bolishi kerak!",
    }),
  }),
  params: Joi.object({
    id: Joi.string().required().length(24).message({
      "string.empty": "Id kiritilishi kerak!",
      "string.length": "Id Xato kiritilgan!",
      "any.required": "Id kiritilishi kerak!",
    }),
  }),
};

module.exports = {
  postRegisterSellerSchemas,
  postLoginSellerSchemas,
  postChangeAllowSellerSchemas,
  deleteRemoveSellerSchemas,
  deleteUnRemoveSellerSchemas,
  getListSellerSchemas,
  getShowSellerSchemas,
  patchEditSellerSchemas,
};
