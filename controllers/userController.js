const asyncHandler = require("express-async-handler");
const {
  User,
  Company,
  Hair,
  Address,
  Bank,
  Crypto,
  Coordinates,
} = require("../models/userModelSequelize");
const lodash = require("lodash");

//@desc Get all users
//@route GET /api/users
const getUsers = asyncHandler(async (req, res) => {
  try {
    // NOTE: This is how we can get all users from MongoDB
    // const users = await User.find();

    // NOTE: This is how we can get all users from MySQL
    // const users = await db.query("SELECT * FROM users");

    // NOTE: This is how we can get all users from Sequelize
    const users = await User.findAll({
      include: [
        {
          model: Company,
          as: "company",
          include: [
            {
              model: Address,
              as: "address",
              include: [
                {
                  model: Coordinates,
                  as: "coordinates",
                },
              ],
            },
          ],
        },
        {
          model: Hair,
          as: "hair",
        },
        {
          model: Address,
          as: "address",
          include: [
            {
              model: Coordinates,
              as: "coordinates",
            },
          ],
        },
        {
          model: Bank,
          as: "bank",
        },
        {
          model: Crypto,
          as: "crypto",
        },
      ],
    });

    if (lodash.isNil(users)) {
      res.status(404);
      throw new Error("No users found");
    }

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

const createUser = asyncHandler(async (req, res) => {
  try {
    const userData = req.body;
    const user = await User.create(userData, {
      include: [
        {
          model: Company,
          as: "company",
          include: [
            {
              model: Address,
              as: "address",
              include: [
                {
                  model: Coordinates,
                  as: "coordinates",
                },
              ],
            },
          ],
        },
        {
          model: Hair,
          as: "hair",
        },
        {
          model: Address,
          as: "address",
          include: [
            {
              model: Coordinates,
              as: "coordinates",
            },
          ],
        },
        {
          model: Bank,
          as: "bank",
        },
        {
          model: Crypto,
          as: "crypto",
        },
      ], // Include associated Company model
    });
    res
      .status(201)
      .json({ success: true, message: "User created", data: user });
  } catch (error) {
    res.status(500);
    throw new Error("Internal Server Error: ", error);
  }
});

module.exports = { getUsers, createUser };
