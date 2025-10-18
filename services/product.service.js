const productRepository = require("../repositories/product.repository");
class ProductService {
    listAll(){
        return productRepository.findAll();

    }

    create(newProduct){
        const existProduct =  productRepository.findbyName(newProduct.name);
        if(existProduct)
            throw new Error("Produto já cadastrado!. 🤦‍♀️");

        return productRepository.create(newProduct);
    }
}

module.exports = new ProductService();