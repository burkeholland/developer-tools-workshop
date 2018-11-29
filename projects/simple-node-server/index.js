const express = require("express");
const app = express();
const port = process.env.PORT || 4000;
const runningMessage = "Server is running on port " + port;

app.get("/", (req, res) => {
  console.log("API was successfully requested");
  res.send(runningMessage);
});

app.listen(port, () => {
  console.log(runningMessage);
});
