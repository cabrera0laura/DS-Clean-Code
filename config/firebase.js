 const admin = require("firebase-admin");
 
 const serviceAcount = require ("../credentials/credential.json");

    this.firebase = admin.initializeApp({
        credentials: admin.credential.cert(serviceAccount),
    });

        const db = firebase.firestore().collection("products");
    module.exports = db;
