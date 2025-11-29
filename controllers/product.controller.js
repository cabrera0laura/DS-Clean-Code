//const productService = require("../services/product.service");

class ProductController {
    constructor(service) {
    this.productService = service;
  }
    
    list(request,response){
        const products = this.productService.listAll();
        response.json(products);
    }

    delete(request, response){
        try {
            const productId = request.params.id;
            this.productService.delete(productId);

            response.status(200).json({message: "Produto removido com sucesso"});   

        } catch (error) {
            const errorMessage = {
                error: error.message,
            };

            response.status(400).json(errorMessage);
            
        }
    }

    create(request,response){
        try {
         
        const newProduct = this.productService.create(request.body);

        response.status(201).json(newProduct);   
        
        } catch (error) {
            const errorMessage = {
                error: error.message,
            };
            response.status(400).json(errorMessage);
        }
    }

    update(req, res) {
        try {
            const { id, name, price, quantity } = req.body;

            const updated = this.productService.update(id, {name, price, quantity});

            return res.status(200).json(updated);

        } catch (error) {
            return res.status(400).json({ message: error.message });
        }
    }

}

module.exports = new ProductController;