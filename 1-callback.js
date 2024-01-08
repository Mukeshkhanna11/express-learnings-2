const express = require("express");
const app = express();
const cb1 = (req, res, next) => {
  console.log("first call back");
  next();
};
const cb2 = (req, res, next) => {
  console.log("second call back");
  next();
};
app.get("/callback", [cb1, cb2], (req, res) => {
  res.send("<h1>home page</h1>");
});
app.listen(5000, () => {
  console.log("server up");
});
