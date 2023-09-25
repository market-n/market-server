const { addMarketComment } = require("./_controller");
const { isloggedIn, hasRole } = require("../../shared/auth");
const router = require("express").Router();

const mAddMarketComment = [isloggedIn];
router.post("/market-comment", mAddMarketComment, addMarketComment);

module.exports = router;
