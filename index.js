const express = require("express");
const data = require("./data.json");
const cors = require("cors");
const app = express();
const port = 5000;
app.use(cors());
app.get("/", (req, res) => {
  res.send("Hello from server");
});
app.get("/data", (req, res) => {
  res.send(data);
});

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
