const express = require("express");
const dotenv = require("dotenv").config();
const { sequelizeConnection: sequelize } = require("../config/connectDB");
const errorHandler = require("../middlewares/errorHandler");
const cors = require("cors");
const Serverless = require("serverless-http");

// NOTE: Initiate the connection to database
// connectDB();

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

// Conditionally Listening for port
// const mySqlPool = createMySQLPool();
// mySqlPool
//   .query("SELECT 1") // NOTE: To check database connection we use query
//   .then(() => {
//     console.log("DB Connected");
//     app.listen(port, () => {
//       console.log("listening on port ", port);
//     });
//   })
//   .catch((err) => {
//     console.log("Mysql Pool error: ", err);
//   });

(async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
    // await sequelize.sync({ force: true });
    // console.log("All models were synchronized successfully.");
    app.listen(port, () => {
      console.log("listening on port ", port);
    });
    // await sequelize.sync({ force: true }); // NOTE: This will drop all tables and recreate them
    // console.log("All models were synchronized successfully.");
  } catch (error) {
    console.log("Error in DB Connection: ", error);
  }
})();

const handler = Serverless(app);

module.exports.handler = async (event, context) => {
  const result = await handler(event, context);
  return result;
};
