const express = require("express");
const ErrorHandler = require("./middleware/ErrorHandler");
const ProductRepository = require("./repositories/product.repository");
const ProductService = require("./services/product.service");
const ProductController = require("./controllers/product.controller");

// estara utilizando o express como base 
const server = express();
server.use(express.json());
const port= 3000;

/*let productList = [
    {
        id:1,
        name:"Morango",
        price:10.00,
        quantity:4
    },
];*/

const productRepository = new ProductRepository();
const productService = new ProductService(productRepository);
const productController = new ProductController(productService);

// Criando a API das ... rota? ...
server.get("/products", productController.list.bind(productController));

server.post("/products", productController.create.bind(productController));

server.delete("/products/:id", productController.delete.bind(productController));
server.put("/products/:id", productController.update.bind(productController));

server.get("/", (request,response)=>{
    response.send("Hello World");
});

server.use(ErrorHandler);

server.listen(port, ()=>{
 console.log("projeto rodando na porta: "+ port);
});