const {MongoClient, ObjectId } = require("mongodb"); 

let singleton;

async function connect() {

if (singleton) return singleton;

const client = new Mongoclient(process.env.DB_HOST);

await client.connect();

singleton = client.db(process.env.DB_DATABASE);

return singleton;

};

async function findAll(collection) {

    const db = await connect();

    return db.collection(collection).findAll().toArray();
};

async function findOne(collection) {

    const db = await connect();
    
    return db.collection(collection).find().toArray();
};

async function insertOne(collection, object) {

    const db = await connect();

    return db.collection(collection).insertOne(object);
};

async function updateOne(collection, object) {

    const db = await connect();

    return db.collection(collection).updateOne(object);
    
};   module.exports = {findAll,findOne,insertOne,updateOne};
    