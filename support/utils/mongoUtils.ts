import { MongoClient } from "mongodb"

const uri = "mongodb://localhost:27017"
const client = new MongoClient(uri)

export async function clearUsersCollection() {
  try {
    await client.connect()
    const db = client.db("linkai")
    const users = db.collection("users")
    await users.deleteMany({})
  } finally {
    await client.close()
  }
}
