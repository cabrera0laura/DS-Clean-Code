let productList = [
    {
        id:1,
        name:"Morango",
        price:10.00,
        quantity:4
    },
];
/*atulizando*/ 
class ProductRepository{

    /**
 * cadastra um novo produto de dados, criando um novo ID Único
 * 
 * @param newProduct os dados do novo produto incluindo nome, preço e quantidade em estoque 
 *  
 * @returns O novo produto adastrado incluindo seu ID unico 
 *
 */

    findAll () {
        return productList
    }

    findById(id){
        return productList.find((product)=> product.id === Number(id));
    }

    findByName(name){
        const product = productList.find(
            product => product.name.toLowerCase() === name.toLowerCase()
        );

        return product;
    }

    create(newProduct){
    const newId = productList.length  +1;
    
    newProduct.id = newId;
    productList.push(newProduct);

    return newProduct
    }

    delete(id){
        const productIndex = productList.findIndex(
            (product) => product.id === Number(id)
        );

        if(productIndex === -1)
        {
            return false;
        }
            // o splice pode apagar uma massa de ids dependendo do que for colocado o parametro
        productList.splice(productIndex, 1)
    }
//A rota deve permitir edição de nome, preço e quantidade em estoque dos produtos
    update(id, values) {
        const productIndex = productList.findIndex((product) => product.id === Number(id));

        if (productIndex === -1) {
            return null;
        }

        if (values.name) {
            productList[productIndex].name = values.name;
        }

        if (values.price) {
            productList[productIndex].price = values.price;
        }

        if (values.quantity) {
            productList[productIndex].quantity = values.quantity;
        }

        return productList[productIndex];
    }

}


module.exports = ProductRepository;