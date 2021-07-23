import { MongoClient } from 'mongodb';

export async function connectToDatabase() {
    const client = await MongoClient.connect('mongodb+srv://user:user@cluster0.bp9sj.mongodb.net/authDemo?retryWrites=true&w=majority')


    return client
}