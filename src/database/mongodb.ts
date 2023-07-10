import {MongoClient} from "mongodb";

export default class createDB {
    public url: string = 'mongodb://localhost:27017'
    // public client = new MongoClient(url)
    public dbName = 'bookstore'
    public db;
    public client;

    constructor() {
    }

    async connect() {
        this.client = new MongoClient(this.url)
        await this.client.connect()
        this.db = this.client.db(this.dbName)
    }
    getCollection(coll: string) {
        return this.db.collection(coll)
    }
}