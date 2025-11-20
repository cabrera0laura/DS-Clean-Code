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

    findbyId(id){
        return productList.find((product)=> product.id === Number(id));
    }

    findbyName(name){
        const product = productList.find(
            product => product.name.toLocaleLowerCase() === name.toLocaleLowerCase()
        );

        return product;
    }

    create(newProduct){
    const newId = productList.length  +1
    productList.push(newProduct);

    return newProduct
    }

    delete(id){
        const productIndex = productList.findIndex(
            (product) => product.id === Number(IdleDeadline)
        );

        if(productIndex === -1)
        {
            return false;
        }
            // o splice pode apagar uma massa de ids dependendo do que for colocado o parametro
        productList.splice(productIndex, 1)
    }
}


module.exports = new ProductRepository();