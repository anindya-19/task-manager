const express = require("express");
const app = express();
const tasks = require("./routes/tasks");

app.use(express.json());

app.get("/hello", (req, res) => {
  res.send("<h1>Hello Page</h1>");
});

app.use("/api/v1/tasks", tasks);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`The app is listening on port ${PORT}..`);
});
