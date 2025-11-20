const express = require("express");
const producController = require("./controllers/produc.controller");

// estara utilizando o express como base 
const server = express();
server.use(express.json());
const port= 3000;

let productList = [
    {
        id:1,
        name:"Morango",
        price:10.00,
        quantity:4
    },
];

// Criando a API das ... rota? ...
server.get("/Products", producController.list)

server.post("/Products", producController.create)

server.delete("/Products/:id", producController.delete)

server.get("/", (request,response)=>{
    response.send("Hello World");
});
server.listen(port, ()=>{
 console.log("projeto rodando na porta: "+ port);
});