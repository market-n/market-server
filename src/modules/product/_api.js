const router = require("express").Router();
const { hasRole, isloggedIn } = require("../../shared/auth");
const isMongoId = require("../../shared/validator/isMongoId");
const { addProduct, listProduct, showProduct } = require("./_controller");

const mAddProduct = [isloggedIn, hasRole(["seller"])];
const mShowProduct = [isloggedIn, isMongoId];

router.post("/product", mAddProduct, addProduct);
router.get("/product", listProduct);
router.get("/product/:id", mShowProduct, showProduct);

module.exports = router;
