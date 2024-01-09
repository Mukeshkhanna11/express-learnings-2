const express = require("express");
const app = express();

app.use(express.json());

const displayUsers = [
  { id: 1, username: "joeys" },
  { id: 2, username: "ross" },
  { id: 3, username: "rachel" },
];
app.get("/", (req, res) => {
  res.send({ id: 1, name: "rejesh" });
});
app.get("/api/users", (req, res) => {
  console.log(req.query);
  const {
    query: { filter, value },
  } = req;
  if (!filter && !value) return res.send(displayUsers);
  if (filter && value) {
    return res.send(
      displayUsers.filter((user) => user[filter].includes(value))
    );
  }
});
app.post("/api/users", (req, res) => {
  console.log(req.body);
  const { body } = req;
  const newUsers = {
    id: displayUsers[displayUsers.length - 1].id + 1,
    ...body,
  };
  displayUsers.push(newUsers);

  return res.status(201).send(newUsers);
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

app.put("/api/users/:id", (req, res) => {
  const {
    body,
    params: { id },
  } = req;
  const parsedId = parseInt(id);
  if (isNaN(parsedId)) return res.sendStatus(400);
  const findUserIndex = displayUsers.findIndex((user) => user.id === parsedId);
  if (findUserIndex === -1) return res.sendStatus(404);
  displayUsers[findUserIndex] = { id: parsedId, ...body };
  return res.sendStatus(200);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`running port ${PORT}`);
});
