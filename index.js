const express = require("express");
const data = require("express");
const app = express();
const port = 5000;

app.get("/", (req, res) => {
  res.send("Hello from server");
});
app.get("/data", (req, res) => {
  res.send("Hello from server");
});

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
