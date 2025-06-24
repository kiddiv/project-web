"use strict";
const express = require('express');
const http = require('http');
const path = require('path');
const cors = require('cors');

const server = express();
server.use(cors());
server.use(express.static(__dirname));
server.listen(8888, () => console.log('Server is running on port 8888'));

server.get('/', (req, res) => {
  console.log("Під'єднання від дорогоцінного клієнта!");
  res.sendFile(path.join(__dirname, "index.html"));
});

server.get('/books', (req, res) => {
  console.log("Надсилання книжок клієнту...");
  const books = [
    { id: 1, title: "Майстер і Маргарита", author: "Михайло Булгаков", year: 1940 },
    { id: 2, title: "Сто років самотності", author: "Г. Г. Маркес", year: 1967 },
    { id: 3, title: "Харрі Поттер і філософський камінь", author: "Дж. К. Ролінг", year: 1997 }
  ];
  res.json(books);
});
