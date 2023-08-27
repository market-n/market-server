const Admin = require("./Admin");
const {
  NotFoundError,
  ForbiddenError,
  BadRequestError,
} = require("../../shared/errors");
const { compareSync, hashSync } = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("../../shared/config");

const changePasswordAdmin = async ({ body, admin }) => {
  return { msg: "Your password was successfull changed!" };
};

module.exports = changePasswordAdmin;
