const Joi = require("joi");

const postAddAdminSchemas = {
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
    image: Joi.string().required().messages({
      "string.empty": "Image kiritilishi kerak!",
      "any.required": "Image kiritilishi kerak!",
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

const postLoginAdminSchemas = {
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

const getShowAdminSchemas = {
  params: Joi.object({
    id: Joi.string().required().length(24).message({
      "string.empty": "Id kiritilishi kerak!",
      "string.length": "Id. Xato kiritilgan!",
      "any.required": "Id kiritilishi kerak!",
    }),
  }),
};

const deletetAdminSchemas = {
  params: Joi.object({
    id: Joi.string().required().length(24).message({
      "string.empty": "Id kiritilishi kerak!",
      "string.length": "Id. Xato kiritilgan!",
      "any.required": "Id kiritilishi kerak!",
    }),
  }),
};

const unDeletetAdminSchemas = {
  params: Joi.object({
    id: Joi.string().required().length(24).message({
      "string.empty": "Id kiritilishi kerak!",
      "string.length": "Id. Xato kiritilgan!",
      "any.required": "Id kiritilishi kerak!",
    }),
  }),
};

const patchEditAdminSchemas = {
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
    image: Joi.string().messages({
      "string.empty": "Image kiritilishi kerak!",
    }),
    username: Joi.string().min(6).max(64).messages({
      "string.empty": "Username kiritilishi kerak!",
      "string.min": "Username uzunligi 6 tadan ko'p bolishi kerak!",
      "string.max": "Username uzunligi 64 tadan kam bolishi kerak!",
    }),
  }),
  params: Joi.object({
    id: Joi.string().required().length(24).message({
      "string.empty": "Id kiritilishi kerak!",
      "string.length": "Id. Xato kiritilgan!",
      "any.required": "Id kiritilishi kerak!",
    }),
  }),
};
