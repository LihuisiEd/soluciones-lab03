const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("This is my express app");
});

app.get("/clientes", (req, res) => {
  res.send("Pagina de clientes");
});

app.get("/productos", (req, res) => {
    res.send("Pagina de productos");
  });

app.listen(9000, () => {
  console.log("listening");
});