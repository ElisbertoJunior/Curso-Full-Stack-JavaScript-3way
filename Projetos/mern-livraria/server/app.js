const express = require("express");
const connectDB = require("./config/db");

const booksRouter = require("./routes/api/books");

const cors = require("cors");

const app = express();

//Conecta o banco de dados
connectDB();

//Middleware
app.use(express.json({ extended: false }));
app.get("/", (req, res) => {
  res.send("Hello world!");
});

// Cors
app.use(cors({ origin: true, credentials: true }));

//Route
app.use("/api/books", booksRouter);

const PORT = process.env.PORT || 8082;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
