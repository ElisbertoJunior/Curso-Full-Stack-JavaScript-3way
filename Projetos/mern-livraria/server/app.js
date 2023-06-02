const express = require("express");
const connectDB = require('./config/db')
const PORT = process.env.PORT || 8082;

const booksRouter = require('./routes/api/books')

const app = express();

//Conecta o banco de dados
connectDB();

app.get("/", (req, res) => {
  res.send("Hello world!");
});

//Route
app.use(express.json());
app.use('/api/books', booksRouter)

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
