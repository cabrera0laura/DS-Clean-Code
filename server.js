const express = require("express");

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

server.get("/Products", (request,response)=>{
    response.json(productList);
});

server.post("/Products", (request,response)=>{
    const newProduct = request.body;
    const newId = productList.length +1;

    newProduct.id = newId;
    productList.push(newProduct);

    response.status(201).json(newProduct);
});

server.get("/", (request,response)=>{
    response.send("Hello World");
});
server.listen(port, ()=>{
 console.log("projeto rodando na porta: "+ port);
});