const express = require("express");
const router = express.Router();
const { getUsers } = require("../controllers/userController");

// 'router.route' => used to add route for our application api
router.route("/users").get(getUsers);

module.exports = router;
