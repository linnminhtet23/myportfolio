import { MongoClient } from "mongodb";

export async function connectToDatabase() {
    const client = await MongoClient.connect('mongodb+srv://linnminhtet:1234@cluster0.ohgd3d5.mongodb.net/?retryWrites=true&w=majority');

    return client;
}