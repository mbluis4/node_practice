const express = require("express");

const app = express();

const showUrl = (req, res, next) => {
  console.log(req.url);
  next();
};

app.use(express.json());

app.use(showUrl);

app.get("/user", (req, res) => {
  res.json({
    name: "Luis Enrique",
    lastname: "Millan Brito",
    age: 41,
  });
});

app.listen(5000, () => console.log("server listening on port 5000"));

app.post("/user", (req, res) => {
  console.log(req.body);
  res.end("data received");
});

app.post("/user/:id", (req, res) => {
  console.log(req.params);
  res.end("got it");
});
