let data = [{
    "id": 1,
    "name": "Carrol",
    "price": 8,
    "actor": "Leland"
  }, {
    "id": 2,
    "name": "Kelila",
    "price": 13,
    "actor": "Delora"
  }, {
    "id": 3,
    "name": "Wynne",
    "price": 7,
    "actor": "Nikki"
  }, {
    "id": 4,
    "name": "Radcliffe",
    "price": 75,
    "actor": "Lemuel"
  }, {
    "id": 5,
    "name": "Dulcea",
    "price": 16,
    "actor": "Lainey"
  }, {
    "id": 6,
    "name": "Clerc",
    "price": 46,
    "actor": "Carmel"
  }, {
    "id": 7,
    "name": "George",
    "price": 93,
    "actor": "Janis"
  }, {
    "id": 8,
    "name": "Aarika",
    "price": 50,
    "actor": "Lurline"
  }, {
    "id": 9,
    "name": "Sibylla",
    "price": 25,
    "actor": "Tonya"
  }, {
    "id": 10,
    "name": "Lexine",
    "price": 1,
    "actor": "Culley"
  }, {
    "id": 11,
    "name": "Irene",
    "price": 39,
    "actor": "Josiah"
  }, {
    "id": 12,
    "name": "Alva",
    "price": 84,
    "actor": "Whitman"
  }, {
    "id": 13,
    "name": "Xavier",
    "price": 27,
    "actor": "Clayton"
  }, {
    "id": 14,
    "name": "Marybeth",
    "price": 23,
    "actor": "Belva"
  }, {
    "id": 15,
    "name": "Boyd",
    "price": 83,
    "actor": "Rozalin"
  }, {
    "id": 16,
    "name": "Keane",
    "price": 55,
    "actor": "Calli"
  }, {
    "id": 17,
    "name": "Hanna",
    "price": 56,
    "actor": "Codie"
  }, {
    "id": 18,
    "name": "Nickolaus",
    "price": 42,
    "actor": "Shea"
  }, {
    "id": 19,
    "name": "Petronilla",
    "price": 82,
    "actor": "Web"
  }, {
    "id": 20,
    "name": "Cheston",
    "price": 29,
    "actor": "Sunny"
  }, {
    "id": 21,
    "name": "Nolie",
    "price": 8,
    "actor": "Werner"
  }, {
    "id": 22,
    "name": "Franchot",
    "price": 6,
    "actor": "Stirling"
  }, {
    "id": 23,
    "name": "Chloette",
    "price": 76,
    "actor": "Adelle"
  }, {
    "id": 24,
    "name": "Nissa",
    "price": 78,
    "actor": "Tyrone"
  }, {
    "id": 25,
    "name": "Otes",
    "price": 4,
    "actor": "Shaun"
  }];
  
var express = require("express");
var app = express();
// Import the library:
var cors = require('cors');
// Then use it before your routes are set up:
app.use(cors());

app.get("/books", (req, res, next) => {
    res.json(data);
});

app.get("/books/:id", (req, res, next) => {
    const id = parseInt(req.params.id, 10);
    res.json(data[id-1]);
});

app.post("/books/new", (req,res,next) =>{
    let book = {
      id : req.params.id,
      name  : req.params.name,
      price : req.params.price,
      actor : req.params.actor
    }
    data[101] = book;
});

app.listen(3001, () => {
    console.log("Server running on port 3001");
}); 