const express = require("express");
const router = express.Router();
const { getUsers, createUser } = require("../controllers/userController");

// 'router.route' => used to add route for our application api
router.route("/users").get(getUsers);
router.route("/user/create").post(createUser);

module.exports = router;
