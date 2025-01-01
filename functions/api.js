const express = require("express");
const dotenv = require("dotenv").config();
const connectDB = require("../config/connectDB");
const errorHandler = require("../middlewares/errorHandler");
const cors = require("cors");
const Serverless = require("serverless-http");

// NOTE: Initiate the connection to database
connectDB();

const app = express();

const port = process.env.PORT || 8081;

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

app.listen(port, () => {
  console.log("listening on port ", port);
});

const handler = Serverless(app);

module.exports.handler = async (event, context) => {
  const result = await handler(event, context);
  return result;
};
