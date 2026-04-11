const connectDB = require("./db/connect"); // for the database connectivity
const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
require("dotenv").config();
const notFound = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

//middlewares
app.use(express.static("./public"));
app.use(express.json());

app.use("/api/v1/tasks", tasks);

// 404 handler - must be LAST, after all routes
app.use(notFound);

app.use(errorHandlerMiddleware);

const PORT = process.env.PORT || 3000;
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    console.log("Database Connected...");
    app.listen(PORT, () => {
      console.log(`The app is listening on port ${PORT}..`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
