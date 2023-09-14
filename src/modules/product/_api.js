const router = require("express").Router();
const { hasRole, isloggedIn } = require("../../shared/auth");
const isMongoId = require("../../shared/validator/isMongoId");
const { addProduct, listProduct } = require("./_controller");

const mAddProduct = [isloggedIn, hasRole(["seller"])];

router.post("/product", mAddProduct, addProduct);
router.get("/product", listProduct);

module.exports = router;
