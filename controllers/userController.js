const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const { mysqlPool: db } = require("../config/connectDB");
const lodash = require("lodash");

//@desc Get all users
//@route GET /api/users
const getUsers = asyncHandler(async (req, res) => {
  try {
    // NOTE: This is how we can get all users from MongoDB
    // const users = await User.find();

    // NOTE: This is how we can get all users from MySQL
    const users = await db.query("SELECT * FROM users");
    if (lodash.isNil(users)) {
      res.status(404);
      throw new Error("No users found");
    }

    res.status(200).json({
      users: users[0],
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
