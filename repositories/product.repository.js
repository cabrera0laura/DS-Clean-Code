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

    create(newProduct){
    const newId = productList.length  +1
    productList.push(newProduct);

    return newProduct
}
}


module.exports = new ProductRepository();