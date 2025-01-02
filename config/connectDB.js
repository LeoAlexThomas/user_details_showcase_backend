const mongoose = require("mongoose");
const mysql = require("mysql2/promise");

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

const createMySQLPool = (dbName, dbPassword) =>
  mysql.createPool({
    host: "localhost",
    user: "root",
    password: dbPassword,
    database: dbName,
  });

module.exports = { connectDB, createMySQLPool };
