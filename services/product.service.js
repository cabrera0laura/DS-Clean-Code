const productRepository = require("../repositories/product.repository");

class ProductService {
    listAll(){
        return productRepository.findAll();

    }

    create(newProduct){
        const existProduct =  productRepository.findbyName(newProduct.name);
        if(existProduct)
            throw new Error("Produto já cadastrado!. 🤦‍♀️");

        const productEntity = new ProductService(newProduct);
        
        return productRepository.create(productEntity);
    }

    delete(id){
        
        this.findbyId(id)

        productRepository.delete(id);
        return;
    }

    // criando um metodo para buscar o produto para utilizar em diferentes lugares
    findbyId(id){
         const existingProduct = productRepository.findbyId(id);

        if(!existingProduct){
            throw new  Error("Produto não encontrado");
        }

        return existingProduct
    }

    update(id,values){
        const  existingProduct =
    }
}

module.exports = new ProductService();