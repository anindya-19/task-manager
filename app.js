const connectDB = require("./db/connect"); // for the database connectivity
const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
require("dotenv").config();

//middlewares
app.use(express.static("./public"));
app.use(express.json());

//routes
app.get("/hello", (req, res) => {
  res.send("<h1>Hello Page</h1>");
});

app.use("/api/v1/tasks", tasks);

const PORT = 3000;

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
