const {
  addMarketComment,
  listMarketComment,
  editMarketComment,
  removeMarketComment,
} = require("./_controller");
const { isloggedIn, hasRole } = require("../../shared/auth");
const MongoId = require("../../shared/validator/isMongoId");
const router = require("express").Router();

const mAddMarketComment = [isloggedIn, hasRole(["user"])];
const mListMarketComment = [MongoId];
const mEditMarketComment = [isloggedIn, MongoId, hasRole(["user"])];
const mRemoveMarketComment = [isloggedIn, MongoId];

router.post("/market-comment", mAddMarketComment, addMarketComment);
router.get("/market-comment/:id", mListMarketComment, listMarketComment);
router.patch("/market-comment/:id", mEditMarketComment, editMarketComment);
router.delete("/market-comment/:id", mRemoveMarketComment, removeMarketComment);

module.exports = router;
