const express = require("express");
const app = express();
//HTTP METHODS
//GET-retrive data
//POST-create/insert data
//PUT-completely update data
//PATCH-patially update data
//DELETE-delete data
//ALL-any http request method

app.get("/", (req, res) => {
  res.send("<h1>home page</h1>");
});
app.listen(5000, () => {
  console.log("server up");
});
