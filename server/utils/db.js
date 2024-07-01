import { MongoClient } from "mongodb";

const connectionString = "mongodb://127.0.0.1:27017/practice-mongo";

export const client = new MongoClient(connectionString, {
  useUnifiedTopology: true,
});

export const db = client.db("practice-mongo");
