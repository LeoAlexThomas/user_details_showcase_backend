const express = require("express");
const dotenv = require("dotenv").config();
const { connectDB, createMySQLPool } = require("../config/connectDB");
const errorHandler = require("../middlewares/errorHandler");
const cors = require("cors");
const Serverless = require("serverless-http");

// NOTE: Initiate the connection to database
// connectDB();

const app = express();

const port = process.env.PORT || 8081;
const dbName = process.env.DBNAME;
const dbPassword = process.env.DBPASSWORD;

app.use(express.json());

// This middleware is to support CORS error handling
app.use(
  cors({
    origin: ["http://localhost:3000"],
  })
);

// To add api routes for our application
app.use("/", require("../routes/userRoutes"));

// To add error handlers for structured error messages
app.use(errorHandler);

// Conditionally Listening for port
createMySQLPool(dbName, dbPassword)
  .query("SELECT 1") // NOTE: To check database connection we use query
  .then(() => {
    console.log("DB Connected");
    app.listen(port, () => {
      console.log("listening on port ", port);
    });
  })
  .catch((err) => {
    console.log("Mysql Pool error: ", err);
  });

const handler = Serverless(app);

module.exports.handler = async (event, context) => {
  const result = await handler(event, context);
  return result;
};
