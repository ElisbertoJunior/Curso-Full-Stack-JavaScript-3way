const express = require("express");

const router = express.router();

//Carrega o book model (modelo de dados no MongoDB)

const Book = require("../../models/Book");

//Pegar todos os livros
router.get("/", (req, res) => {
  Book.find()
    .then((books) => res.json(books))
    .catch((err) =>
      res.status(404).json({ noBooksFound: "Nenhum livro encontrado" })
    );
});

//Pegar um livro específico
router.get("/:id", (req, res) => {
  Book.findById(req.params.id)
    .then((book) => res.json(book))
    .catch((err) =>
      res.status(404).json({ noBooksBound: "Nenhum livro encontrado" })
    );
});

//Adicionar livro / salvar livro
router.post("/", (req, res) => {
  Book.create(req.body)
    .then((book) => res.json({msg: 'Livro adicionado com sucesso'}))
    .catch((err) =>
      res.status(404).json({ error: "Nao foi possivel adicionar livro" })
    );
});