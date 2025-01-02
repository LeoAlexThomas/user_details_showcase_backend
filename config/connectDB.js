const mongoose = require("mongoose");
const mysql = require("mysql2/promise");
const { Sequelize } = require("sequelize");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.CONNECTION_STRING, {
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
      serverSelectionTimeoutMS: 30000, // 30 seconds
      socketTimeoutMS: 30000, // 30 seconds
    });
    console.log("DB Connected");
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

// NOTE: Creating MySQL Pool
const createMySQLPool = () =>
  mysql.createPool({
    host: "localhost",
    user: "root",
    password: process.env.DBPASSWORD,
    database: process.env.DBNAME,
  });

// NOTE: Creating Sequelize Pool for MySQL Database
const sequelizeConnection = new Sequelize(
  process.env.DBNAME,
  "root",
  process.env.DBPASSWORD,
  {
    host: "localhost",
    dialect: "mysql",
  }
);

module.exports = { connectDB, createMySQLPool, sequelizeConnection };
