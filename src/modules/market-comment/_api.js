const { addMarketComment, listMarketComment } = require("./_controller");
const { isloggedIn, hasRole } = require("../../shared/auth");
const MongoId = require("../../shared/validator/isMongoId");
const router = require("express").Router();

const mAddMarketComment = [isloggedIn, hasRole(["user"])];
const mListMarketComment = [MongoId];
const mEditMarketComment = [isloggedIn, MongoId, hasRole(["user"])];
const mRemoveMarketComment = [isloggedIn, MongoId];

router.post("/market-comment", mAddMarketComment, addMarketComment);
router.get("/market-comment/:id", mListMarketComment, listMarketComment);

module.exports = router;
