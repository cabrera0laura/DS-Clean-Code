//import { admin} from "firebase-admin"; //errado
const admin = require("firebase-admin");
class productFirebaseRepository{
    constructor (db){
        this.db = db;

    // estabelecer conexãocom o firebase --> import

    //Caminho da service | renomear arquivo de da credentials para
   /* const serviceAcount = require ("../credentials/credential.js");

    this.firebase = admin.initializeApp({
        credentials: admin.credential.cert(serviceAccount),
    });

        this.db = this.firebase.firestore().collection("products");*/  //PRCISOU SER RETIRADO 
    }
    
    async create(product){

        const newProduct = await this.dbo.add({
            name: product.name,
            price: product.price,
            quantity: product.quantity,
        });

        return {id: newProduct.id,...product };
    }

}
module.exports = productFirebaseRepository;