const productRepository = require("../repositories/product.repository");
class ProductService {
    listAll(){
        return productRepository.findAll();

    }

    create(newProduct){
        return productRepository.create(newProduct);
    }
}

module.exports = new ProductService();