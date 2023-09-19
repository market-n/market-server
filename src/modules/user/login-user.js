const loginUserService = async ({ body }) => {
  const { username, password } = body;

  const existing = await User.findOne({ username, is_deleted: false });

  if (!existing) {
    throw new NotFoundError("User Not Found");
  }

};
module.exports = loginUserService;
