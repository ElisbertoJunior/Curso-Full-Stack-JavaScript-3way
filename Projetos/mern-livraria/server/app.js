const express = require("express");
const connectDB = require('./config/db')
const PORT = process.env.PORT || 8082;

const app = express();

//Conecta o banco de dados
connectDB();

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
