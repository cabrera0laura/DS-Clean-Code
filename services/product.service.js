const Product = require("../entities/product.entity");
const ProductExistsError = require("../errors/ProductExistsError");

class ProductService {
    constructor(repository) {
    this.productRepository = repository;
    }
    
    listAll(){
        return this.productRepository.findAll();

    }

    create(newProduct){
        const existProduct =  this.productRepository.findByName(newProduct.name);
        if(existProduct){
            throw new ProductExistsError();
        }

        const productEntity = new Product(newProduct);
        
        return this.productRepository.create(productEntity);
    }

    delete(id){
        
        this.findById(id)

        this.productRepository.delete(id);
        return;
    }

    // criando um metodo para buscar o produto para utilizar em diferentes lugares
    findById(id){
         const existingProduct = this.productRepository.findById(id);

        if(!existingProduct){
            throw new  Error("Produto não encontrado");
        }

        return existingProduct
    }

    update(id,values){
        const  existingProduct = this.findById(id);

        if(values.name)
            {
                const existingProduct = this.productRepository.findByName(values.name);

                if(existingProduct && existingProduct.id !== id)
                {
                    throw new ProductExistsError();
                }
            }

            return this.productRepository.update(id, values);
    }
}

module.exports =  ProductService;