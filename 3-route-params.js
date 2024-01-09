const express = require("express");
const app = express();
const displayUsers = [
  { id: 1, username: "joeys" },
  { id: 2, username: "ross" },
  { id: 3, username: "rachel" },
];
app.get("/", (req, res) => {
  res.send({ id: 1, name: "rejesh" });
});
app.get("/api/users", (req, res) => {
  res.send(displayUsers);
  console.log(displayUsers);
});
app.get("/api/users/:id", (req, res) => {
  console.log(req.params);
  const parsedId = parseInt(req.params.id);
  console.log(parsedId);
  if (isNaN(parsedId)) {
    return res.status(400).send({ mssge: "bad request" });
  }
  const findUser = displayUsers.find((user) => user.id === parsedId);
  if (!findUser) return res.sendStatus(404);
  else {
    return res.send(findUser);
  }
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`running port ${PORT}`);
});
