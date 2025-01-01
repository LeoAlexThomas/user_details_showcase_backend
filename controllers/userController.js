const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

//@desc Get all users
//@route GET /api/users
const getUsers = asyncHandler(async (req, res) => {
  try {
    const users = await User.find();

    res.status(200).json({
      users: users,
      skip: 0,
      total: users.length, // NOTE: Need to show actual total users count
      limit: users.length, // NOTE: Shows how much user should pass per page.
    });
  } catch (error) {
    res.status(500);
    throw new Error("Internal Server Error");
  }
});

module.exports = { getUsers };
