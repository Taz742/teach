const express = require("express");
var cors = require("cors");

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

let currentId = 0;

let items = [
  {
    title: "Hello from back",
    id: ++currentId,
  },
  {
    title: "Hello from back again",
    id: ++currentId,
  },
  {
    title: "Hello from back again and again",
    id: ++currentId,
  },
];

app.get("/todo-items", (req, res) => {
  res.send(items);
});

app.post("/todo-items/create", (req, res) => {
  const newItem = {
    title: req.query.title,
    id: ++currentId,
  };

  items.push(newItem);

  res.send(newItem);
});

app.delete("/todo-items/delete", (req, res) => {
  const id = req.query.id;

  items = items.filter((item) => item.id !== id);

  res.send(items);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
